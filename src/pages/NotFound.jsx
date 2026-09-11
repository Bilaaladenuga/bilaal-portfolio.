
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="not-found-page"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="not-found-number"
            >
                404
            </motion.div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-obsidian)', letterSpacing: '-0.02em' }}>
                Page Not Found
            </h2>
            <p style={{ color: 'var(--color-smoke)', maxWidth: '400px', lineHeight: 1.7 }}>
                Looks like this page doesn't exist — or it moved. Head back home and let's get you sorted.
            </p>

            <Link to="/">
                <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <i className="uil uil-arrow-left"></i> Back to Home
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default NotFound;
