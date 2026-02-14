
import { motion } from 'framer-motion';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring",
            stiffness: 100,
            damping: 12
        } 
    }
};

const Journey = () => {
    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="section"
        >
             <div className="top-header">
                <h1>My Journey</h1>
                <span>Strategic Timeline</span>
            </div>
            
            <div className="row">
                 <motion.div 
                    variants={staggerContainer}
                    className="col" 
                    style={{ width: '100%', flexDirection: 'column', gap: '20px', alignItems: 'center' }}
                >
                    
                    {/* Phase 1 */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>2020: The Fundamentals</h3>
                        <p style={{textAlign: 'left'}}>Started with HTML, CSS, JavaScript. Built static sites and learned the core of the web.</p>
                    </motion.div>

                    {/* Phase 2 */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>2021-2022: Moving Beyond Static Pages</h3>
                        <p style={{textAlign: 'left'}}>Mastered React and Next.js. Started building dynamic applications and understanding state management.</p>
                    </motion.div>

                    {/* Phase 3 */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>2025: Co-Founding MOBO Digital</h3>
                        <p style={{textAlign: 'left'}}>Launched an agency to build scalable web solutions for clients. Focused on business logic and real-world impact.</p>
                    </motion.div>

                    {/* Phase 4 */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>Present: AI Systems & Architecture</h3>
                        <p style={{textAlign: 'left'}}>Deepening expertise in LLM agents, backend architecture, and building complex systems.</p>
                    </motion.div>

                 </motion.div>
            </div>
        </motion.section>
    );
};

export default Journey;

