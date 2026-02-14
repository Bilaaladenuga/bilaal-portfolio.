
import { motion } from 'framer-motion';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5 } 
    }
};

const Now = () => {
    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="section"
        >
             <div className="top-header">
                <h1>Now</h1>
                <span>What I'm focused on currently</span>
            </div>

            <div className="row">
                <div className="col" style={{ width: '100%', justifyContent: 'center' }}>
                    <div className="about-info" style={{ alignItems: 'flex-start', padding: '40px' }}>
                        <h3>Current Priorities</h3>
                        <motion.ul 
                            variants={staggerContainer}
                            style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#777', lineHeight: '1.8' }}
                        >
                            <motion.li variants={fadeInUp}>Experimenting with <b>Agentic Workflows</b> using LangGraph.</motion.li>
                            <motion.li variants={fadeInUp}>Building <b>MOBO Digital's</b> core engineering team.</motion.li>
                            <motion.li variants={fadeInUp}>Refactoring legacy codebases to <b>Next.js 14 Server Actions</b>.</motion.li>
                            <motion.li variants={fadeInUp}>Reading: <i>"Designing Data-Intensive Applications"</i> by Martin Kleppmann.</motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Now;

