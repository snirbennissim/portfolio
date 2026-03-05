import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AtSign, Github, Linkedin, PhoneCall, Radio, CircleCheck, Crosshair, Terminal } from 'lucide-react';

const EMAILJS_SERVICE  = 'service_975pi3s';
const EMAILJS_TEMPLATE = 'template_6i846iv';
const EMAILJS_KEY      = 'bOGMqGzTGxalJqwDQ';

const socials = [
  { icon: Github,    label: 'GITHUB',   cmd: 'open github.com/snirbennissim',        href: 'https://github.com/snirbennissim' },
  { icon: Linkedin,  label: 'LINKEDIN', cmd: 'open linkedin.com/in/snir-ben-nissim', href: 'https://linkedin.com/in/snir-ben-nissim' },
  { icon: AtSign,    label: 'EMAIL',    cmd: 'mailto snir.ben.n@gmail.com',           href: 'mailto:snir.ben.n@gmail.com' },
  { icon: PhoneCall, label: 'PHONE',    cmd: 'call +972-54-327-8282',                 href: 'tel:+972543278282' },
];

export default function Contact() {
  const ref = useScrollAnimation();
  const formRef = useRef();
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.from_name.trim()) e.from_name = 'ERR: name_required';
    if (!form.from_email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      e.from_email = 'ERR: invalid_email_address';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = 'ERR: message_too_short (min 10 chars)';
    }
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    setSendError(null);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY);
      setSubmitted(true);
      setForm({ from_name: '', from_email: '', message: '' });
    } catch (err) {
      setSendError('ERR: transmission_failed — please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-metal-950 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="section-fade mb-14">
          <p className="mono-label mb-2">// SECTION 04 — CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-black text-metal-50 tracking-tight">
            Open <span className="gradient-text">Channel</span>
          </h2>
          <p className="text-metal-400 mt-3 max-w-xl text-sm">
            Have a project or opportunity? Transmit a message and I&apos;ll respond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: terminal panel */}
          <div className="space-y-5">
            {/* Location line */}
            <div className="flex items-center gap-2 font-mono text-xs text-metal-400">
              <Crosshair size={12} className="text-blue-DEFAULT flex-shrink-0" />
              <span>Rishon LeZiyyon, Israel — Open to Remote & Relocation</span>
            </div>

            {/* Social terminal lines */}
            <div className="module-card with-screws rounded-lg overflow-hidden">
              <span className="absolute bottom-2 left-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
              <span className="absolute bottom-2 right-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />

              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-metal-800/80 border-b border-metal-700/40">
                <Terminal size={11} className="text-blue-DEFAULT" />
                <span className="font-mono text-[10px] text-metal-400 tracking-widest">CONTACT_CHANNELS</span>
              </div>

              <div className="p-4 space-y-1 font-mono text-xs">
                {/* Prompt line */}
                <p className="text-metal-600 text-[10px] mb-3">
                  snir@workspace:~$ list --channels
                </p>
                {socials.map(({ icon: Icon, label, cmd, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 px-3 rounded hover:bg-metal-800/60 transition-colors group"
                  >
                    <span className="text-blue-dim group-hover:text-blue-DEFAULT transition-colors flex-shrink-0">$</span>
                    <Icon size={12} className="text-metal-500 group-hover:text-metal-300 transition-colors flex-shrink-0" />
                    <span className="text-metal-400 group-hover:text-metal-200 transition-colors text-[11px]">
                      {cmd}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-3 module-card rounded-lg px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-metal-300">
                STATUS: <span className="text-green-400">AVAILABLE</span> — actively seeking junior developer role
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div className="module-card with-screws rounded-lg overflow-hidden">
            <span className="absolute bottom-2 left-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
            <span className="absolute bottom-2 right-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />

            {/* Form title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-metal-800/80 border-b border-metal-700/40">
              <Terminal size={11} className="text-blue-DEFAULT" />
              <span className="font-mono text-[10px] text-metal-400 tracking-widest">TRANSMIT_MESSAGE</span>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center px-8">
                <div className="w-14 h-14 rounded btn-metal flex items-center justify-center">
                  <CircleCheck size={24} className="text-green-400" />
                </div>
                <p className="font-mono text-sm text-green-400 tracking-wider">TRANSMISSION COMPLETE</p>
                <p className="text-metal-400 text-xs">Thanks for reaching out. I&apos;ll respond soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-[11px] text-blue-dim hover:text-blue-DEFAULT transition-colors mt-1"
                >
                  $ new_message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="p-5 space-y-4" noValidate>
                {[
                  { name: 'from_name',  type: 'text',  placeholder: '> your_full_name', label: 'OPERATOR' },
                  { name: 'from_email', type: 'email', placeholder: '> your@email.com',  label: 'EMAIL' },
                ].map(({ name, type, placeholder, label }) => (
                  <div key={name}>
                    <label className="block font-mono text-[10px] text-metal-500 tracking-widest mb-1.5">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`terminal-input w-full rounded px-3 py-2.5 text-xs placeholder-metal-700 ${
                        errors[name] ? 'border-red-500/50' : ''
                      }`}
                    />
                    {errors[name] && (
                      <p className="font-mono text-[10px] text-red-400 mt-1">{errors[name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block font-mono text-[10px] text-metal-500 tracking-widest mb-1.5">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={`> // describe your project or opportunity...\n>`}
                    className={`terminal-input w-full rounded px-3 py-2.5 text-xs placeholder-metal-700 resize-none ${
                      errors.message ? 'border-red-500/50' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-[10px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {sendError && (
                  <p className="font-mono text-[10px] text-red-400">{sendError}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-blue w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Radio size={13} />
                  <span className="font-mono tracking-widest">
                    {sending ? '> TRANSMITTING...' : '> TRANSMIT MESSAGE'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
