
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const Work = () => {
    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="section"
        >
            <div className="top-header">
                <h1>Work</h1>
                <span>Case Studies & Projects</span>
            </div>
            <motion.div variants={stagger} className="row">
                <div className="col" style={{ width: '100%', flexDirection: 'column', gap: '40px' }}>
                    {/* Project 1: Qalb Qur'an */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>Qalb Qur'an</h3>
                        <p style={{ textAlign: 'left' }}>
                            A beautiful mobile application designed for Muslim women to support Quran memorization, personal spiritual growth, and community connection.
                            Focuses on user experience and community engagement features.
                        </p>
                        <br/>
                        <b>Tech Stack:</b> <span>Mobile Development, React Native, Firebase</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/qalb-qur-an" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 2: Bidmaj Chatbot */}
                     <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>Bidmaj Chatbot</h3>
                         <p style={{ textAlign: 'left' }}>
                            An intelligent conversational agent built to handle natural language queries. 
                            Demonstrates proficiency in NLP and backend integration for real-time communication.
                         </p>
                        <br/>
                        <b>Tech Stack:</b> <span>Python, NLP, API Integration</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/Bidmaj-Chatbot-" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 3: AI Image Generator */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>AI Image Generator</h3>
                         <p style={{ textAlign: 'left' }}>
                            A web application leveraging generative AI models to create images from text prompts. 
                            Showcases integration with modern AI APIs and frontend state management.
                         </p>
                        <br/>
                        <b>Tech Stack:</b> <span>React, OpenAI DALL-E API, Node.js</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/AI-Image-generator-" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 4: AnnoTater */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>AnnoTater</h3>
                         <p style={{ textAlign: 'left' }}>
                            A productive webpage annotation and screenshot tool. 
                            Allows users to highlight, comment, and save web content for research and collaboration.
                         </p>
                        <br/>
                        <b>Tech Stack:</b> <span>JavaScript, Browser Extension APIs</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/AnnoTater" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 5: Bidmaj Language Translator */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>Bidmaj Language Translator</h3>
                         <p style={{ textAlign: 'left' }}>
                            A sophisticated translation tool bridging communication gaps. 
                            Utilizes advanced APIs to provide accurate real-time language translation.
                         </p>
                        <br/>
                        <b>Tech Stack:</b> <span>Python, Google Translate API, Tkinter</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/Bidmaj-Language-Translator-" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 6: Chess Master */}
                    <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>Chess Master</h3>
                         <p style={{ textAlign: 'left' }}>
                            A fully functional digital chess game implementing standard rules and logic. 
                            Demonstrates complex state management and algorithmic thinking.
                         </p>
                        <br/>
                        <b>Tech Stack:</b> <span>Python, Pygame, Game Logic</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/Chess-master" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>

                     {/* Project 7: Weather API Fetcher */}
                     <motion.div variants={fadeInUp} className="about-info" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                        <h3>Weather API Fetcher</h3>
                         <p style={{ textAlign: 'left' }}>
                            A real-time weather tracking application. 
                            Fetches live meteorological data to provide accurate forecasts and current conditions.
                         </p>
                        <br/>
                        <b>Tech Stack:</b> <span>JavaScript, OpenWeatherMap API, CSS3</span>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/Bilaaladenuga/weather-api-fetcher" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 15px', fontSize: '14px' }}>
                                View Code <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Work;

