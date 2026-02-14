
import { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
        } 
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const Home = () => {
    useEffect(() => {
        const typed = new Typed('.typedText', {
            strings: ["Technical Founder", "AI Systems Architect", "Full Stack Engineer"],
            loop: true,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2500
        });

        return () => typed.destroy();
    }, []);

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            {/* -------------- HERO SECTION ---------------- */}
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <motion.div variants={fadeInUp} className="featured-text-card">
                        <span>Adenuga Bilaal</span>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="featured-name">
                        <p>I'm a <span className="typedText"></span></p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="featured-text-info">
                        <p>
                            I engineer scalable, AI-powered web systems for the modern web. 
                            Focused on high-performance backend architectures and intuitive React frontends. 
                            Helping businesses automate and scale through technology.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="featured-text-btn">
                        <Link to="/work"><button className="btn blue-btn">View My Work</button></Link>
                        <Link to="/journey"><button className="btn">See My Journey <i className="uil uil-arrow-right"></i></button></Link>
                    </motion.div>
                    
                    <motion.div variants={staggerContainer} className="social_icons">
                        <motion.div variants={fadeInUp} className="icon">
                            <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="uil uil-instagram"></i>
                            </a>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="icon">
                            <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="icon">
                            <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="featured-image"
                >
                    <div className="image">
                        <img src="/assets/IMG-20230421-WA0040.jpg" alt="Bilaal Adenuga" />
                    </div>
                </motion.div>
            </section>

            {/* -------------- ABOUT SECTION ---------------- */}
            <section className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                    <span>Bridging Business Logic & Technical Excellence</span>
                </div>
                <div className="row">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="col"
                    >
                        <div className="about-info">
                            <h3>My Mission</h3>
                            <p>
                                I don't just write code; I build systems. My passion lies in dissecting complex business problems and architecting robust digital solutions. 
                                As the Co-Founder of <b>MOBO Digital</b> (est. 2025), I lead technical strategy to deliver products that are not only performant but also scalable and maintainable.
                                <br/><br/>
                                I specialize in the intersection of <b>Modern Web Development</b> (React, Next.js) and <b>Artificial Intelligence</b> (LLM integration, automated workflows), ensuring my clients stay ahead of the curve.
                            </p>
                            <div className="about-btn">
                                <button className="btn">Download Resume <i className="uil uil-download-alt"></i></button>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.6 }}
                         viewport={{ once: true }}
                         className="col"
                    >
                         <div className="skills-box">
                            <div className="skills-header">
                                <h3>Technical Arsenal</h3>
                            </div>
                            <div className="skills-list">
                                {/* Core */}
                                <span>JavaScript (ES6+)</span>
                                <span>System Design</span>
                                <span>Git & CI/CD</span>
                                
                                {/* Frontend */}
                                <span>React</span>
                                <span>Next.js 14</span>
                                <span>Tailwind CSS</span>
                                <span>Framer Motion</span>
                                
                                {/* Backend & AI */}
                                <span>Node.js</span>
                                <span>Python</span>
                                <span>PostgreSQL</span>
                                <span>OpenAI API</span>
                                <span>LangChain</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

             {/* -------------- SELECTED WORK ---------------- */}
             <section className="section" id="projects">
                <div className="top-header">
                    <h1>Selected Projects</h1>
                    <span>Engineering Case Studies</span>
                </div>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="project-container"
                >
                    <motion.div variants={fadeInUp} className="project-box">
                        <i className="uil uil-mobile-android"></i>
                        <h3>Qalb Qur'an</h3>
                        <label>Mobile App for Community</label>
                        <div style={{marginTop: '10px', fontSize: '0.9em', color: '#888'}}>React Native • Firebase</div>
                    </motion.div>
                    
                     <motion.div variants={fadeInUp} className="project-box">
                        <i className="uil uil-robot"></i>
                        <h3>Bidmaj Chatbot</h3>
                        <label>AI Conversational Agent</label>
                         <div style={{marginTop: '10px', fontSize: '0.9em', color: '#888'}}>Python • NLP • API</div>
                    </motion.div>
                    
                     <motion.div variants={fadeInUp} className="project-box">
                        <i className="uil uil-image"></i>
                        <h3>AI Image Gen</h3>
                        <label>Generative Art Platform</label>
                         <div style={{marginTop: '10px', fontSize: '0.9em', color: '#888'}}>React • OpenAI • Node.js</div>
                    </motion.div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Home;

