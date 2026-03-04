import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle, MapPin, MessageSquare } from 'lucide-react';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/snirbennissim',
    href: 'https://github.com/snirbennissim',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/snirbennissim',
    href: 'https://linkedin.com/in/snirbennissim',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@snirbennissim.dev',
    href: 'mailto:contact@snirbennissim.dev',
  },
];

export default function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Valid email is required';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters';
    }
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:contact@snirbennissim.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="section-fade text-center mb-16">
          <p className="text-accent-light text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind, a job opportunity, or just want to connect? My
            inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-accent-light" />
                Let&apos;s build something great
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m currently open to full-time roles, freelance projects, and
                consulting opportunities. Whether you have a startup idea or an
                enterprise need — let&apos;s chat.
              </p>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={15} className="text-accent-light flex-shrink-0" />
              <span>Based in Israel · Available for Remote & Relocation</span>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1e293b] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={16} className="text-accent-light" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    <div className="text-slate-300 text-sm group-hover:text-white transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-bg-card border border-[#1e293b] rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <CheckCircle size={28} className="text-green-400" />
                </div>
                <h4 className="text-white font-semibold text-lg">Message Sent!</h4>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent-light text-sm hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full bg-bg-secondary border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500/50 focus:ring-red-500/20'
                        : 'border-[#1e293b] focus:ring-accent/20 focus:border-accent/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-bg-secondary border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500/20'
                        : 'border-[#1e293b] focus:ring-accent/20 focus:border-accent/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full bg-bg-secondary border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-500/50 focus:ring-red-500/20'
                        : 'border-[#1e293b] focus:ring-accent/20 focus:border-accent/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
