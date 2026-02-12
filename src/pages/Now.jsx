
import { motion } from 'framer-motion';

const Now = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#777', lineHeight: '1.8' }}>
                            <li>Experimenting with <b>Agentic Workflows</b> using LangGraph.</li>
                            <li>Building <b>MOBO Digital's</b> core engineering team.</li>
                            <li>Refactoring legacy codebases to <b>Next.js 14 Server Actions</b>.</li>
                            <li>Reading: <i>"Designing Data-Intensive Applications"</i> by Martin Kleppmann.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Now;

