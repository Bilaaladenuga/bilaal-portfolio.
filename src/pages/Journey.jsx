
import { motion } from 'framer-motion';

const Journey = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="section"
        >
             <div className="top-header">
                <h1>My Journey</h1>
                <span>Strategic Timeline</span>
            </div>
            
            <div className="row">
                 <div className="col" style={{ width: '100%', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                    
                    {/* Phase 1 */}
                    <div className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>2020: The Fundamentals</h3>
                        <p style={{textAlign: 'left'}}>Started with HTML, CSS, JavaScript. Built static sites and learned the core of the web.</p>
                    </div>

                    {/* Phase 2 */}
                    <div className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>2021-2022: Moving Beyond Static Pages</h3>
                        <p style={{textAlign: 'left'}}>Mastered React and Next.js. Started building dynamic applications and understanding state management.</p>
                    </div>

                    {/* Phase 3 */}
                    <div className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>2025: Co-Founding MOBO Digital</h3>
                        <p style={{textAlign: 'left'}}>Launched an agency to build scalable web solutions for clients. Focused on business logic and real-world impact.</p>
                    </div>

                    {/* Phase 4 */}
                    <div className="about-info" style={{ width: '80%', textAlign: 'left', alignItems: 'flex-start' }}>
                        <h3>Present: AI Systems & Architecture</h3>
                        <p style={{textAlign: 'left'}}>Deepening expertise in LLM agents, backend architecture, and building complex systems.</p>
                    </div>

                 </div>
            </div>
        </motion.section>
    );
};

export default Journey;

