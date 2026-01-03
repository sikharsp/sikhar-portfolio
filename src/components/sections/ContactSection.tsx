import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/sikharsp' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/David_billa9' },
  { icon: Mail, label: 'Email', href: 'mailto:psikhar74@gmail.com' },
];

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name: (form.name as any).value,
      email: (form.email as any).value,
      message: (form.message as any).value,
      _captcha: false,
      _template: 'table',
      _subject: 'New Portfolio Message!',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/psikhar74@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        setSent(true);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-card neon-border rounded-full text-sm font-body text-muted-foreground mb-6">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's</span> Connect
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card neon-border rounded-3xl p-8 md:p-12"
        >

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-muted border rounded-xl"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-muted border rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-muted border rounded-xl resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>

            </form>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl text-primary mb-4">Message Sent 🚀</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. I'll reply soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="px-6 py-3 border border-primary rounded-xl text-primary hover:bg-primary hover:text-black transition"
              >
                Send Another
              </button>
            </div>
          )}

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-12 h-12 glass-card neon-border rounded-xl flex items-center justify-center"
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-16">
          © 2024 Sikhar Panthi. Crafted with passion and precision.
        </p>

      </div>
    </section>
  );
}

