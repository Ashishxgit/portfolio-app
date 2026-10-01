import mongoose from 'mongoose';

// In-memory database fallback cache if live MongoDB is unavailable locally
export const inMemoryContacts = [];

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db';
  
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000, // 3s timeout for quick fallback
    });
    console.log(`[MongoDB] Database connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Warning] Live MongoDB connection failed (${error.message}).`);
    console.warn(`[MongoDB Info] Falling back to in-memory store. Form submissions will be logged and stored in memory.`);
    return false;
  }
};
