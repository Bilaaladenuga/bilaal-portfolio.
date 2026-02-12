
import { motion } from 'framer-motion';

const Contact = () => {
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
                    <div className="form-control">
                        <div className="form-inputs">
                            <input type="text" className="input-field" placeholder="Name" />
                            <input type="text" className="input-field" placeholder="Email" />
                        </div>
                        <div className="text-area">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="form-button">
                            <button className="btn">Send <i className="uil uil-message"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

