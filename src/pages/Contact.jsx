
import { motion } from 'framer-motion';
import { useState } from 'react';

const EMAIL = 'adenugabilaal75@gmail.com';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/xpwzgqkb', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="wrapper section"
            id="contact"
        >
            <div className="top-header">
                <div className="section-label">Contact</div>
                <h1 className="section-title">Get in Touch</h1>
                <p className="section-subtitle">Have a project in mind? Let's build something great.</p>
            </div>

            <div className="contact-grid">
                {/* Left: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="contact-info-card">
                        <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>

                        <div className="contact-detail" onClick={copyEmail} style={{ cursor: 'pointer' }}>
                            <i className="uil uil-envelope"></i>
                            <span>{EMAIL}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--color-plasma-violet)', fontWeight: 500, marginLeft: 'auto' }}>
                                {copied ? '✓ Copied!' : 'copy'}
                            </span>
                        </div>

                        <div className="contact-detail">
                            <i className="uil uil-phone"></i>
                            <span>+234 70 7817 8909</span>
                        </div>

                        <div className="contact-social-row">
                            <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <form className="form-group" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                className="input-field"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                className="input-field"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <div className="form-submit">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={status === 'sending'}
                                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <i className="uil uil-message"></i>
                            </button>
                        </div>
                        {status === 'success' && (
                            <p style={{ color: '#006d4c', marginTop: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <i className="uil uil-check-circle"></i> Message sent! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p style={{ color: '#e96770', marginTop: '12px', fontWeight: 500 }}>
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
