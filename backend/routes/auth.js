import express from 'express';
import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const router = express.Router();

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { realtime: { transport: ws } }
);

const supabaseAuth = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  { realtime: { transport: ws } }
);

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', { email, password });
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const { data, error } = await supabaseAuth.auth.signInWithPassword({ email, password });
    if (error) {
      return res.status(401).json({ message: "Incorrect username or password! Please try again." });
    }

    const { data: profile, error: profileError } = await supabaseAdmin
      .from('users')
      .select('id, username, email, role, phone')
      .eq('auth_id', data.user.id)
      .single();

    if (profileError) {
      console.error('Profile lookup error:', profileError);
      return res.status(500).json({ message: 'Could not load user profile' });
    }

    res.json({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: {
        id: profile.id,
        auth_id: data.user.id,
        email: data.user.email,
        username: profile.username,
        role: profile.role,
        phone: profile.phone,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
});

router.post('/register', async (req, res) => {
  const { username, email, password, phone } = req.body;

  if (!username) return res.status(400).json({ message: "Please enter a username" });
  if (!email) return res.status(400).json({ message: "Please enter an email" });
  if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: "Please enter a valid email" });
  if (!password) return res.status(400).json({ message: "Please enter a password" });
  if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters" });

  try {
    const { data: authData, error: authError } = await supabaseAuth.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: username },
      },
    });

    if (authError) {
      // Handle specific Supabase errors with friendly messages
      let friendlyMessage = 'Something went wrong. Please try again.';

      if (authError.message.includes('rate limit')) {
        friendlyMessage = 'Too many attempts. Please wait a few minutes and try again.';
      } else if (authError.message.includes('already registered')) {
        friendlyMessage = 'An account with this email already exists.';
      } else if (authError.message.includes('valid email')) {
        friendlyMessage = 'Please enter a valid email address.';
      } else if (authError.message.includes('password')) {
        friendlyMessage = 'Password must be at least 6 characters.';
      }

      return res.status(400).json({ message: friendlyMessage });
    }

    if (authData.user?.identities?.length === 0) {
      return res.status(400).json({ message: "An account with this email already exists." });
    }

    if (authData.user) {
      const { error: profileError } = await supabaseAdmin
        .from('users')
        .insert({
          auth_id: authData.user.id,
          username,
          email,
          phone: phone || null,
          role: 'user',
        });

      if (profileError) {
        console.error('Profile insert error:', profileError);
      }
    }

    res.status(201).json({ message: 'Successfully registered', user: { email, username } });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

router.get('/verify', async (req, res) => {
  const { token, type } = req.query;

  try {
    const { error } = await supabaseAdmin.auth.verifyOtp({
      token_hash: token,
      type: type || 'signup',
    });

    if (error) {
      return res.redirect('/auth/verify?status=error');
    }

    return res.redirect('/auth/verify?status=success');
  } catch (err) {
    return res.redirect('/auth/verify?status=error');
  }
});


export default router;
    