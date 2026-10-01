import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { initMailer } from './config/mailer.js';
import contactRoutes from './routes/contactRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Portfolio Express API Engine',
  });
});

// Register API Routes
app.use('/api', contactRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
  });
});

// Start Server & Connect Database & Mailer
const startServer = async () => {
  await connectDB();
  await initMailer();

  app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`  🚀 Stealth Portfolio Backend API Server Running`);
    console.log(`  📡 URL: http://localhost:${PORT}`);
    console.log(`  📮 Contact Endpoint: POST http://localhost:${PORT}/api/contact`);
    console.log(`================================================`);
  });
};

startServer();
