
import { motion } from 'framer-motion';
import { useState } from 'react';

const EMAIL = 'adenugabilaal75@gmail.com';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
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
                <h1>Get in Touch</h1>
                <span>Have a project in mind? Let's build something great.</span>
            </div>

            <div className="row">
                {/* Left: Contact Info */}
                <div className="col">
                    <div className="contact-info">
                        <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>

                        {/* Clickable email with copy toast */}
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <p
                                onClick={copyEmail}
                                title="Click to copy email"
                                style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                <i className="uil uil-envelope"></i>
                                {EMAIL}
                                <span style={{ fontSize: '0.75rem', color: 'var(--indigo)', fontWeight: 600 }}>
                                    {copied ? '✓ Copied!' : 'click to copy'}
                                </span>
                            </p>
                        </div>

                        <p>
                            <i className="uil uil-phone"></i>
                            +234 70 7817 8909
                        </p>

                        <div className="contact-social">
                            <div className="icon">
                                <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <i className="uil uil-instagram"></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <i className="uil uil-linkedin-alt"></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <i className="uil uil-github-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="col">
                    <form className="form-control" onSubmit={handleSubmit}>
                        <div className="form-inputs">
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
                        <div className="form-button">
                            <button
                                className="btn"
                                type="submit"
                                disabled={status === 'sending'}
                                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <i className="uil uil-message"></i>
                            </button>
                        </div>
                        {status === 'success' && (
                            <p style={{ color: '#22c55e', marginTop: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <i className="uil uil-check-circle"></i> Message sent! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', marginTop: '12px', fontWeight: 500 }}>
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
