
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="section" 
            id="contact"
        >
            <div className="top-header">
                <h1>Get in touch</h1>
                <span>Do you have a project in your mind, contact me here</span>
            </div>
            <div className="row">
                <div className="col">
                    <div className="contact-info">
                        <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                        <p><i className="uil uil-envelope"></i> Email: adenugabilaal75@gmail.com</p>
                        <p><i className="uil uil-phone"></i> +234 90 9824 5902</p>
                    </div>
                </div>
                <div className="col">
                    <form className="form-control" onSubmit={handleSubmit}>
                        <div className="form-inputs">
                            <input 
                                type="text" 
                                name="name"
                                className="input-field" 
                                placeholder="Name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                type="email" 
                                name="email"
                                className="input-field" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="text-area">
                            <textarea 
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-button">
                            <button 
                                className="btn" 
                                type="submit"
                                disabled={status === 'sending'}
                                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send'} <i className="uil uil-message"></i>
                            </button>
                        </div>
                        {status === 'success' && (
                            <p style={{ color: '#22c55e', marginTop: '15px', fontWeight: 500 }}>
                                ✓ Message sent! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', marginTop: '15px', fontWeight: 500 }}>
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

