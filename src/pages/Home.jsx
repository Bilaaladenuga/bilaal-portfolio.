
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Counter = ({ to, suffix = '', duration = 1.6 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to, duration]);

    return (
        <span ref={ref}>
            {value}<span className="suffix">{suffix}</span>
        </span>
    );
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const skills = [
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js 14', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/000000' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Power BI', icon: '/assets/powerbi.svg' },
    { name: 'Git & CI/CD', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
    { name: 'System Design', icon: 'https://cdn.simpleicons.org/diagramsdotnet/F08705' },
];

const projects = [
    {
        icon: 'uil-mobile-android',
        name: "Qalb Qur'an",
        label: 'A Quran app built for my community',
        stack: 'React Native • Firebase',
        href: 'https://github.com/Bilaaladenuga/qalb-qur-an'
    },
    {
        icon: 'uil-file-edit-alt',
        name: 'ResuCraft',
        label: 'An AI resume builder that passes the filters',
        stack: 'TypeScript • Gemini API',
        href: 'https://github.com/Bilaaladenuga/ResuCraft'
    },
    {
        icon: 'uil-edit',
        name: 'AnnoTater',
        label: 'A Chrome extension that makes research less painful',
        stack: 'JavaScript • Chrome API',
        href: 'https://github.com/Bilaaladenuga/AnnoTater'
    },
    {
        icon: 'uil-book-alt',
        name: 'My Journal',
        label: 'A personal writing platform for essays, poems, and notes',
        stack: 'Next.js • Vercel',
        href: 'https://my-journal-orcin-ten.vercel.app/'
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
            <section className="wrapper hero" id="home">
                <motion.div variants={stagger}>
                    <motion.div variants={fadeUp} className="section-label">Portfolio, 2026</motion.div>

                    <motion.h1 variants={fadeUp} className="hero-name">
                        I'm the<br />
                        <span className="typedText gradient-text"></span><br />
                        who builds<br />
                        AI-powered systems.
                    </motion.h1>

                    <motion.div variants={fadeUp} className="hero-meta" style={{ marginTop: '24px' }}>
                        <span className="hero-tag">
                            <i className="uil uil-rocket"></i> Adenuga Bilaal
                        </span>
                        <span className="hero-tag">
                            <i className="uil uil-map-marker"></i> Based in Nigeria
                        </span>
                        <span className="hero-tag">
                            <i className="uil uil-briefcase-alt"></i> Co-Founder, MOBO Digital
                        </span>
                    </motion.div>

                    <motion.p variants={fadeUp} className="hero-description" style={{ marginTop: '24px' }}>
                        I build web apps and AI tools that people actually enjoy using. Fast,
                        reliable, and simple to maintain. I help businesses turn rough ideas
                        into real, working products.
                    </motion.p>

                    <motion.div variants={fadeUp} className="hero-actions">
                        <Link to="/work">
                            <button className="btn btn-primary">View My Work <i className="uil uil-arrow-right"></i></button>
                        </Link>
                        <Link to="/journey">
                            <button className="btn btn-ghost">See My Journey</button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Photo + Stats section */}
                <motion.div
                    variants={scaleIn}
                    className="hero-photo-section"
                >
                    <div className="hero-photo">
                        <div className="hero-photo-frame"></div>
                        <img src="/assets/IMG-20230421-WA0040.jpg" alt="Bilaal Adenuga" fetchPriority="high" />
                    </div>

                    <div className="hero-stats">
                        {[
                            { to: 15, suffix: '+', label: 'GitHub Repositories' },
                            { to: 10, suffix: '+', label: 'Projects Built' },
                            { to: 5, suffix: '+', label: 'Years Experience' },
                            { to: 3, suffix: '+', label: 'AI-Powered Products' },
                        ].map((s) => (
                            <div key={s.label} className="hero-stat">
                                <div className="hero-stat-number">
                                    <Counter to={s.to} suffix={s.suffix} />
                                </div>
                                <div className="hero-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="social-row">
                    <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </motion.div>
            </section>

            {/* ── ABOUT ── */}
            <section className="wrapper section" id="about">
                <div className="editorial-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-label">01. About</div>
                        <h2 className="section-title">More than just<br />writing code.</h2>
                        <div className="about-content">
                            <p>
                                I don't just write code. I build things that solve real problems.
                                My favourite kind of work is taking a messy business idea and turning
                                it into software people actually use.
                            </p>
                            <p>
                                As Co-Founder of <strong>MOBO Digital</strong> (est. 2025),
                                I lead the technical side: making sure everything we ship
                                is fast, reliable, and easy to maintain long after launch.
                            </p>
                            <p>
                                Day to day, that means working across <strong>Modern Web Development</strong> (React, Next.js)
                                and <strong>Artificial Intelligence</strong>. LLM integrations, automated workflows,
                                and tools that save people time and headaches.
                            </p>
                        </div>
                        <div style={{ marginTop: '32px' }}>
                            <Link to="/resume">
                                <button className="btn btn-primary">
                                    View My Resume <i className="uil uil-file-alt"></i>
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-label">Tech Stack</div>
                        <div className="skills-grid" style={{ marginTop: '16px' }}>
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item"
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <img src={skill.icon} alt={skill.name} loading="lazy" />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SELECTED PROJECTS ── */}
            <section className="wrapper section" id="projects">
                <div className="top-header">
                        <div className="section-label">02. Projects</div>
                    <h2 className="section-title">Selected Work</h2>
                    <p className="section-subtitle">A few things I'm proud of building.</p>
                </div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="projects-grid"
                >
                    {projects.map(p => (
                        <motion.div key={p.name} variants={fadeUp} className="project-card">
                            <div className="project-card-body">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '44px', height: '44px',
                                        borderRadius: '2px',
                                        background: 'rgba(138, 5, 255, 0.08)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <i className={`uil ${p.icon}`} style={{ fontSize: '1.4rem', color: 'var(--color-plasma-violet)' }}></i>
                                    </div>
                                    <h3 className="project-card-title">{p.name}</h3>
                                </div>
                                <p className="project-card-desc">{p.label}</p>
                                <div className="project-card-stack">
                                    {p.stack.split(' • ').map(t => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                                <a href={p.href} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                    View on GitHub <i className="uil uil-external-link-alt"></i>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '4em' }}>
                    <Link to="/work">
                        <button className="btn btn-ghost">View All Projects <i className="uil uil-arrow-right"></i></button>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
