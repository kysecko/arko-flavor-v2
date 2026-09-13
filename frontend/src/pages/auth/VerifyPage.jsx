import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function VerifyPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Verification error:', error);
        setStatus('error');
        return;
      }

      if (session) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        {status === 'verifying' && (
          <>
            <div className="animate-spin h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4" />
            <p>Verifying your email...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <h2 className="text-2xl font-bold mb-2">Email Verified!</h2>
            <p className="text-gray-500 mb-4">Your account is now active.</p>
            <button
              onClick={() => navigate('/auth/login')}
              className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600"
            >
              Go to Login
            </button>
          </>
        )}

        {status === 'error' && (
          <>
            <h2 className="text-2xl font-bold mb-2">Verification Failed</h2>
            <p className="text-gray-500 mb-4">The link is invalid or expired.</p>
            <button
              onClick={() => navigate('/auth/login', { replace: true })}
              className="text-orange-500 font-bold underline"
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default VerifyPage;
