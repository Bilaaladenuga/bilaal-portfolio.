
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Only show splash on first visit per session
        const seen = sessionStorage.getItem('splashSeen');
        if (seen) { setShow(false); return; }
        const timer = setTimeout(() => {
            setShow(false);
            sessionStorage.setItem('splashSeen', 'true');
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: '#0f172a',
                        zIndex: 99999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}
                    >
                        <span style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: '#f1f5f9',
                            fontFamily: 'Inter, sans-serif',
                            letterSpacing: '-0.04em',
                        }}>
                            bilaal
                        </span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            style={{
                                fontSize: '4rem',
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: 1,
                            }}
                        >
                            .
                        </motion.span>
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '120px' }}
                        transition={{ delay: 0.5, duration: 0.9, ease: 'easeInOut' }}
                        style={{
                            height: '2px',
                            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                            borderRadius: '2px',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
