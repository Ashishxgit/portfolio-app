import React, { useState } from 'react';
import { Send, Mail, MapPin, Clock, Loader2, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import Toast from './Toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: '', message: '' });

  // Real-time Field Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Full name is required (min 2 chars)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject line is required (min 3 chars)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for edited field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        type: 'error',
        message: 'Please resolve the highlighted errors in the form.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToast({
          type: 'success',
          message: data.message || 'Thank you! Your message was saved and emailed successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setToast({
          type: 'error',
          message: data.error || 'Failed to submit contact request. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setToast({
        type: 'error',
        message: 'Network error communicating with Express backend. Make sure server is running on port 5000.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Stealth Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Extraordinary</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Have a project in mind, a question about my stack, or want to discuss full-time roles? Drop a message below!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-4">
                <span>Contact Metadata</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Direct Email</span>
                    <p className="text-base font-semibold text-white mt-0.5">ashish@example.com</p>
                    <span className="text-xs text-emerald-400/80 font-mono">Monitored Daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Base Location</span>
                    <p className="text-base font-semibold text-white mt-0.5">Bhubaneswar, Odisha, India</p>
                    <span className="text-xs text-zinc-400">Open to Onsite & Remote (IST / UTC+5:30)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Response Window</span>
                    <p className="text-base font-semibold text-white mt-0.5">&lt; 12 Hours SLA</p>
                    <span className="text-xs text-zinc-400">Fast turnarounds on inquiries</span>
                  </div>
                </div>
              </div>

              {/* Tech Spec Box */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Backend Route:</span>
                  <span className="text-emerald-400">POST /api/contact</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Storage Integration:</span>
                  <span className="text-cyan-400">MongoDB Mongoose</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Email Transporter:</span>
                  <span className="text-emerald-400">Nodemailer SMTP</span>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email Address Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Email Address <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject Line Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Subject <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Engineering Role Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-all ${
                    errors.subject
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-400 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or team goals..."
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                      : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Transmitting to MongoDB & Sending Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Toast Notification */}
      <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: '', message: '' })}
      />
    </section>
  );
}
