
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubRepos from '../components/GitHubRepos';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const CATEGORIES = ['All', 'AI', 'Mobile', 'Web', 'Tools', 'Games'];

const projectFilters = {
    "Qalb Qur'an": 'Mobile',
    'Bidmaj Chatbot': 'AI',
    'AI Image Gen': 'AI',
    'AnnoTater': 'Tools',
    'Bidmaj Translator': 'AI',
    'Chess Master': 'Games',
    'Weather App': 'Web',
    'My Journal': 'Web',
};

const projects = [
    {
        icon: 'uil-mobile-android',
        name: "Qalb Qur'an",
        desc: "A mobile app for Muslim women to memorise the Quran, grow spiritually, and stay close to their community.",
        stack: ['React Native', 'Firebase'],
        href: 'https://github.com/Bilaaladenuga/qalb-qur-an'
    },
    {
        icon: 'uil-robot',
        name: 'Bidmaj Chatbot',
        desc: 'A chatbot that understands everyday questions and answers like a real conversation — NLP on a Python backend.',
        stack: ['Python', 'NLP', 'API'],
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Chatbot-'
    },
    {
        icon: 'uil-image',
        name: 'AI Image Gen',
        desc: 'Type a prompt, get an image — text into pictures with OpenAI\'s image models.',
        stack: ['React', 'OpenAI', 'Node.js'],
        href: 'https://github.com/Bilaaladenuga/AI-Image-generator-'
    },
    {
        icon: 'uil-edit',
        name: 'AnnoTater',
        desc: 'A Chrome extension for highlighting, annotating, and screenshotting any webpage — built to make research less painful.',
        stack: ['JavaScript', 'Chrome API'],
        href: 'https://github.com/Bilaaladenuga/AnnoTater'
    },
    {
        icon: 'uil-globe',
        name: 'Bidmaj Translator',
        desc: 'Real-time translation across languages — built to make conversations easier across borders.',
        stack: ['Python', 'Google Translate API'],
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Language-Translator-'
    },
    {
        icon: 'uil-chess',
        name: 'Chess Master',
        desc: 'A full chess game in Python — real rules, move validation, and a working opponent to play.',
        stack: ['Python', 'Pygame'],
        href: 'https://github.com/Bilaaladenuga/Chess-master'
    },
    {
        icon: 'uil-cloud-sun',
        name: 'Weather App',
        desc: 'Live weather for anywhere — pulls real forecast data from a weather API.',
        stack: ['JavaScript', 'Weather API'],
        href: 'https://github.com/Bilaaladenuga/weather-api-fetcher'
    },
    {
        icon: 'uil-book-alt',
        name: 'My Journal',
        desc: 'A personal writing platform for essays, poems, notes, and Arabic poetry — a corner of the internet for thinking out loud.',
        stack: ['Next.js', 'Vercel'],
        href: 'https://my-journal-orcin-ten.vercel.app/'
    },
];

const Work = () => {
    const [filter, setFilter] = useState('All');

    const visible = filter === 'All'
        ? projects
        : projects.filter(p => projectFilters[p.name] === filter);

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="wrapper section"
        >
            <div className="top-header">
                <div className="section-label">Work</div>
                <h1 className="section-title">Things I've Built</h1>
                <p className="section-subtitle">Projects and deliverables from my portfolio.</p>
            </div>

            <motion.div variants={fadeUp} className="filter-row" role="group" aria-label="Filter projects by category">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`filter-chip ${filter === cat ? 'filter-chip-active' : ''}`}
                        aria-pressed={filter === cat}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            <motion.div
                layout
                className="projects-grid"
            >
                <AnimatePresence mode="popLayout">
                {visible.map(p => (
                    <motion.div
                        key={p.name}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.95 }}
                        layout
                        className="project-card"
                        whileHover={{ y: -6 }}
                    >
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
                                <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</h2>
                            </div>

                            <p className="project-card-desc">{p.desc}</p>

                            <div className="project-card-stack">
                                {p.stack.map(t => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>

                            <a href={p.href} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                View Project <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>

            <GitHubRepos />
        </motion.section>
    );
};

export default Work;
