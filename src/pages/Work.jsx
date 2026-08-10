
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
};

const projects = [
    {
        icon: 'uil-mobile-android',
        color: '#2563eb',
        name: "Qalb Qur'an",
        desc: "A mobile app for Muslim women to memorise the Quran, grow spiritually, and stay close to their community.",
        stack: ['React Native', 'Firebase'],
        href: 'https://github.com/Bilaaladenuga/qalb-qur-an'
    },
    {
        icon: 'uil-robot',
        color: '#6366f1',
        name: 'Bidmaj Chatbot',
        desc: 'A chatbot that understands everyday questions and answers like a real conversation — NLP on a Python backend.',
        stack: ['Python', 'NLP', 'API'],
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Chatbot-'
    },
    {
        icon: 'uil-image',
        color: '#06b6d4',
        name: 'AI Image Gen',
        desc: 'Type a prompt, get an image — text into pictures with OpenAI\'s image models.',
        stack: ['React', 'OpenAI', 'Node.js'],
        href: 'https://github.com/Bilaaladenuga/AI-Image-generator-'
    },
    {
        icon: 'uil-edit',
        color: '#f59e0b',
        name: 'AnnoTater',
        desc: 'A Chrome extension for highlighting, annotating, and screenshotting any webpage — built to make research less painful.',
        stack: ['JavaScript', 'Chrome API'],
        href: 'https://github.com/Bilaaladenuga/AnnoTater'
    },
    {
        icon: 'uil-globe',
        color: '#10b981',
        name: 'Bidmaj Translator',
        desc: 'Real-time translation across languages — built to make conversations easier across borders.',
        stack: ['Python', 'Google Translate API'],
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Language-Translator-'
    },
    {
        icon: 'uil-chess',
        color: '#ec4899',
        name: 'Chess Master',
        desc: 'A full chess game in Python — real rules, move validation, and a working opponent to play.',
        stack: ['Python', 'Pygame'],
        href: 'https://github.com/Bilaaladenuga/Chess-master'
    },
    {
        icon: 'uil-cloud-sun',
        color: '#3b82f6',
        name: 'Weather App',
        desc: 'Live weather for anywhere — pulls real forecast data from a weather API.',
        stack: ['JavaScript', 'Weather API'],
        href: 'https://github.com/Bilaaladenuga/weather-api-fetcher'
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
                <h1>Work</h1>
                <span>Things I've built</span>
            </div>

            {/* ── Category filter ── */}
            <motion.div variants={fadeUp} className="work-filters" role="group" aria-label="Filter projects by category">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`work-chip ${filter === cat ? 'work-chip-active' : ''}`}
                        aria-pressed={filter === cat}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            <motion.div
                layout
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                }}
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
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: '20px',
                            padding: '32px 28px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        whileHover={{
                            y: -8,
                            boxShadow: '0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(37,99,235,0.3)',
                        }}
                    >
                        <div style={{
                            width: '52px', height: '52px',
                            borderRadius: '14px',
                            background: `${p.color}20`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '4px'
                        }}>
                            <i className={`uil ${p.icon}`} style={{ fontSize: '1.6rem', color: p.color }}></i>
                        </div>

                        <h2 style={{ marginBottom: 0, fontSize: '1.2rem', fontWeight: 600 }}>{p.name}</h2>

                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65', flexGrow: 1 }}>
                            {p.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {p.stack.map(t => (
                                <span key={t} style={{
                                    fontSize: '0.75rem', fontWeight: 600,
                                    background: 'rgba(37,99,235,0.1)',
                                    color: 'var(--indigo)',
                                    border: '1px solid rgba(37,99,235,0.2)',
                                    padding: '3px 10px', borderRadius: '50px'
                                }}>{t}</span>
                            ))}
                        </div>

                        <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                marginTop: '8px',
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'var(--indigo)', fontWeight: 600, fontSize: '0.875rem',
                                textDecoration: 'none', transition: 'gap 0.2s'
                            }}
                        >
                            View Project <i className="uil uil-github-alt"></i>
                        </a>
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>

            {/* ── ALL GITHUB REPOSITORIES ── */}
            <GitHubRepos />
        </motion.section>
    );
};

export default Work;
