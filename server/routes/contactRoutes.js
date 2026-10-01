import express from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { inMemoryContacts } from '../config/db.js';
import { sendContactEmail } from '../config/mailer.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Save contact submission to MongoDB & email notification
// @access  Public
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Server-side validation
    const errors = [];

    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.push('A valid email address is required.');
    }

    if (!subject || subject.trim().length < 3) {
      errors.push('Subject must be at least 3 characters.');
    }

    if (!message || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters.');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: errors.join(' '),
      });
    }

    // 1. Send Email via Nodemailer
    const emailResult = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    let savedDocument = null;

    // 2. Save to MongoDB if connection is ready, else use in-memory fallback
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
        emailSent: emailResult.success,
      });

      savedDocument = await newContact.save();
      console.log(`[MongoDB Success] Saved contact document ID: ${savedDocument._id}`);
    } else {
      savedDocument = {
        _id: 'mem_' + Date.now(),
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        createdAt: new Date(),
        emailSent: emailResult.success,
      };
      inMemoryContacts.push(savedDocument);
      console.log(`[InMemory Storage] Saved contact entry. Total entries: ${inMemoryContacts.length}`);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received and emailed successfully.',
      data: savedDocument,
      emailStatus: emailResult,
    });
  } catch (error) {
    console.error('[Contact Route Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request.',
    });
  }
});

// @route   GET /api/contact/list
// @desc    Retrieve submitted messages (Development view)
// @access  Public
router.get('/contact/list', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const contacts = await Contact.find().sort({ createdAt: -1 }).limit(20);
      return res.json({ success: true, count: contacts.length, data: contacts });
    } else {
      return res.json({ success: true, count: inMemoryContacts.length, mode: 'in-memory', data: inMemoryContacts });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
