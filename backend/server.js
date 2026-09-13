import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port: 5000');
});