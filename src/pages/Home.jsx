
import { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const skills = [
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
    { name: 'Next.js 14', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff', color: '#ffffff' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/ffffff', color: '#ffffff' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
    { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Microsoft_Power_BI_logo.svg', color: '#F2C811' },
    { name: 'Git & CI/CD', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
    { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C', color: '#1C9956' },
    { name: 'System Design', icon: 'https://cdn.simpleicons.org/diagramsdotnet/F08705', color: '#F08705' },
];

const projects = [

    {
        icon: 'uil-mobile-android',
        name: "Qalb Qur'an",
        label: 'Mobile App for Community',
        stack: 'React Native • Firebase',
        href: 'https://github.com/Bilaaladenuga/qalb-qur-an'
    },
    {
        icon: 'uil-robot',
        name: 'Bidmaj Chatbot',
        label: 'AI Conversational Agent',
        stack: 'Python • NLP • API',
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Chatbot-'
    },
    {
        icon: 'uil-image',
        name: 'AI Image Gen',
        label: 'Generative Art Platform',
        stack: 'React • OpenAI • Node.js',
        href: 'https://github.com/Bilaaladenuga/AI-Image-generator-'
    },
];

const Home = () => {
    useEffect(() => {
        const typed = new Typed('.typedText', {
            strings: ['Technical Founder', 'AI Systems Architect', 'Full Stack Engineer'],
            loop: true,
            typeSpeed: 70,
            backSpeed: 45,
            backDelay: 2000
        });
        return () => typed.destroy();
    }, []);

    return (
        <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }}>
            {/* ── HERO ── */}
            <section className="wrapper featured-box" id="home">
                <motion.div variants={stagger} className="featured-text">
                    <motion.div variants={fadeUp} className="featured-text-card">
                        <span className="tag">
                            <i className="uil uil-rocket"></i> Adenuga Bilaal
                        </span>
                    </motion.div>

                    <motion.div variants={fadeUp} className="featured-name">
                        I build AI-powered<br />
                        systems for the<br />
                        <span className="typedText"></span>
                    </motion.div>

                    <motion.p variants={fadeUp} className="featured-text-info">
                        I engineer scalable, AI-powered web systems for the modern web —
                        focused on high-performance architectures and intuitive interfaces.
                        Co-Founder of&nbsp;<strong style={{ color: 'var(--indigo)' }}>MOBO Digital</strong>.
                    </motion.p>

                    <motion.div variants={fadeUp} className="featured-text-btn">
                        <Link to="/work">
                            <button className="btn btn-primary">View My Work <i className="uil uil-arrow-right"></i></button>
                        </Link>
                        <Link to="/journey">
                            <button className="btn btn-ghost">See My Journey</button>
                        </Link>
                    </motion.div>

                    <motion.div variants={stagger} className="social_icons">
                        <motion.div variants={fadeUp} className="icon">
                            <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="uil uil-instagram"></i>
                            </a>
                        </motion.div>
                        <motion.div variants={fadeUp} className="icon">
                            <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                        </motion.div>
                        <motion.div variants={fadeUp} className="icon">
                            <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="featured-image"
                >
                    <div className="image">
                        <img src="/assets/IMG-20230421-WA0040.jpg" alt="Bilaal Adenuga" />
                    </div>
                </motion.div>
            </section>

            {/* ── ABOUT ── */}
            <section className="wrapper section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                    <span>Bridging Business Logic &amp; Technical Excellence</span>
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
                                I don't just write code — I build systems. My passion lies in
                                dissecting complex business problems and architecting robust
                                digital solutions. As the Co-Founder of <strong>MOBO Digital</strong> (est. 2025),
                                I lead technical strategy to deliver products that are performant,
                                scalable, and maintainable.
                                <br /><br />
                                I specialise in <strong>Modern Web Development</strong> (React, Next.js) and{' '}
                                <strong>Artificial Intelligence</strong> (LLM integration, automated workflows),
                                ensuring my clients stay ahead of the curve.
                            </p>
                            <div className="about-btn">
                                <Link to="/resume">
                                    <button className="btn btn-primary">
                                        View My Resume <i className="uil uil-file-alt"></i>
                                    </button>
                                </Link>
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
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                                    gap: '12px',
                                }}
                            >
                                {skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={fadeUp}
                                        whileHover={{ scale: 1.08, y: -4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        style={{
                                            background: 'var(--bg)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '14px',
                                            padding: '14px 8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '8px',
                                            cursor: 'default',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = skill.color}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'}
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                                        />
                                        <span style={{
                                            fontSize: '0.7rem',
                                            fontWeight: 600,
                                            color: 'var(--text-muted)',
                                            textAlign: 'center',
                                            lineHeight: '1.3',
                                        }}>
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SELECTED PROJECTS ── */}
            <section className="wrapper section" id="projects">
                <div className="top-header">
                    <h1>Selected Projects</h1>
                    <span>Engineering Case Studies</span>
                </div>
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="project-container"
                >
                    {projects.map(p => (
                        <motion.div key={p.name} variants={fadeUp} className="project-box">
                            <i className={`uil ${p.icon}`}></i>
                            <h3>{p.name}</h3>
                            <label>{p.label}</label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                                {p.stack.split(' • ').map(t => (
                                    <span key={t} style={{
                                        fontSize: '0.75rem', fontWeight: 600,
                                        background: 'rgba(99,102,241,0.12)',
                                        color: 'var(--indigo)',
                                        border: '1px solid rgba(99,102,241,0.25)',
                                        padding: '3px 10px', borderRadius: '50px'
                                    }}>{t}</span>
                                ))}
                            </div>
                            <a href={p.href} target="_blank" rel="noopener noreferrer"
                                style={{
                                    marginTop: '16px', color: 'var(--indigo)', fontSize: '0.875rem',
                                    fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px',
                                    textDecoration: 'none'
                                }}>
                                View on GitHub <i className="uil uil-external-link-alt"></i>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '3em' }}>
                    <Link to="/work">
                        <button className="btn btn-ghost">View All Projects <i className="uil uil-arrow-right"></i></button>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
