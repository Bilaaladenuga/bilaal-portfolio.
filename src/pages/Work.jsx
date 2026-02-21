
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const projects = [
    {
        icon: 'uil-mobile-android',
        color: '#6366f1',
        name: "Qalb Qur'an",
        desc: "A beautiful mobile app for Muslim women to support Quran memorisation, spiritual growth, and community connection.",
        stack: ['React Native', 'Firebase'],
        href: 'https://github.com/Bilaaladenuga/qalb-qur-an'
    },
    {
        icon: 'uil-robot',
        color: '#8b5cf6',
        name: 'Bidmaj Chatbot',
        desc: 'An intelligent conversational agent handling natural language queries with proficiency in NLP and backend integration.',
        stack: ['Python', 'NLP', 'API'],
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Chatbot-'
    },
    {
        icon: 'uil-image',
        color: '#06b6d4',
        name: 'AI Image Gen',
        desc: 'A web application leveraging generative AI to create images from text prompts, integrated with modern AI APIs.',
        stack: ['React', 'OpenAI', 'Node.js'],
        href: 'https://github.com/Bilaaladenuga/AI-Image-generator-'
    },
    {
        icon: 'uil-edit',
        color: '#f59e0b',
        name: 'AnnoTater',
        desc: 'A productive webpage annotation and screenshot Chrome extension for highlighting, commenting, and saving web content.',
        stack: ['JavaScript', 'Chrome API'],
        href: 'https://github.com/Bilaaladenuga/AnnoTater'
    },
    {
        icon: 'uil-globe',
        color: '#10b981',
        name: 'Bidmaj Translator',
        desc: 'A sophisticated translation tool bridging communication gaps with real-time multilingual accuracy.',
        stack: ['Python', 'Google Translate API'],
        href: 'https://github.com/Bilaaladenuga/Bidmaj-Language-Translator-'
    },
    {
        icon: 'uil-chess',
        color: '#ec4899',
        name: 'Chess Master',
        desc: 'A fully functional digital chess game implementing standard rules, move validation, and game logic.',
        stack: ['Python', 'Pygame'],
        href: 'https://github.com/Bilaaladenuga/Chess-master'
    },
    {
        icon: 'uil-cloud-sun',
        color: '#3b82f6',
        name: 'Weather App',
        desc: 'A real-time weather tracking application fetching live meteorological data from external APIs.',
        stack: ['JavaScript', 'Weather API'],
        href: 'https://github.com/Bilaaladenuga/weather-api-fetcher'
    },
];

const Work = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="wrapper section"
        >
            <div className="top-header">
                <h1>Work</h1>
                <span>Case Studies &amp; Projects</span>
            </div>

            <motion.div
                variants={stagger}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                }}
            >
                {projects.map(p => (
                    <motion.div
                        key={p.name}
                        variants={fadeUp}
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
                            boxShadow: '0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(99,102,241,0.3)',
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

                        <h3 style={{ marginBottom: 0 }}>{p.name}</h3>

                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65', flexGrow: 1 }}>
                            {p.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {p.stack.map(t => (
                                <span key={t} style={{
                                    fontSize: '0.75rem', fontWeight: 600,
                                    background: 'rgba(99,102,241,0.1)',
                                    color: 'var(--indigo)',
                                    border: '1px solid rgba(99,102,241,0.2)',
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
            </motion.div>
        </motion.section>
    );
};

export default Work;
