
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resume = () => {
    const handlePrint = () => window.print();

    return (
        <>
            {/* Print-only styles */}
            <style>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; color: #111 !important; }
                    .resume-page { box-shadow: none !important; border: none !important; }
                }
            `}</style>

            {/* Top bar – hidden when printing */}
            <div className="no-print" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 0', marginBottom: '24px', flexWrap: 'wrap', gap: '12px'
            }}>
                <Link to="/" style={{ color: 'var(--indigo)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <i className="uil uil-arrow-left"></i> Back to portfolio
                </Link>
                <button className="btn btn-primary" onClick={handlePrint}>
                    <i className="uil uil-download-alt"></i> Download / Print PDF
                </button>
            </div>

            {/* Resume Card */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="resume-page"
                style={{
                    maxWidth: '780px', margin: '0 auto', padding: '52px 56px',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: '20px', lineHeight: '1.65',
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
                    <h1 style={{ margin: 0, fontSize: '2.2rem', letterSpacing: '-0.03em' }}>
                        Adenuga Bilaal
                    </h1>
                    <p style={{ margin: '6px 0 16px', color: 'var(--indigo)', fontWeight: 600, fontSize: '1rem' }}>
                        Technical Founder · AI Systems Developer · Full-Stack Engineer
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <span><i className="uil uil-envelope"></i>&nbsp;adenugabilaal75@gmail.com</span>
                        <span><i className="uil uil-phone"></i>&nbsp;+234 70 7817 8909</span>
                        <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                            <i className="uil uil-linkedin-alt"></i>&nbsp;linkedin.com/in/adenuga-bilaal
                        </a>
                        <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                            <i className="uil uil-github-alt"></i>&nbsp;github.com/Bilaaladenuga
                        </a>
                    </div>
                </div>

                {/* Summary */}
                <ResumeSection title="Summary">
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                        Technical Founder and Full-Stack Developer with 5+ years building
                        web applications and AI-powered systems. Co-Founder of MOBO Digital (2025),
                        where I lead the engineering side — architecture, delivery, and making sure
                        the tech actually solves the problem at hand. I work across modern JavaScript
                        frameworks (React, Next.js), backend systems (Node.js, Python, PostgreSQL),
                        and AI integrations (OpenAI, LangChain) — and I care as much about the
                        business goal as I do about the code that gets us there.
                    </p>
                </ResumeSection>

                {/* Experience */}
                <ResumeSection title="Experience">
                    <ResumeEntry
                        title="Co-Founder & Technical Lead"
                        org="MOBO Digital"
                        period="2025 – Present"
                        bullets={[
                            'Co-founded the agency and lead the engineering team — from architecture to shipped products.',
                            'Designed the architecture behind our SaaS builds: Next.js 14, Node.js, and PostgreSQL.',
                            'Built AI workflows (OpenAI, LangChain) that automate the tedious parts of client processes.',
                            'Run code reviews and set engineering standards across the dev team.',
                        ]}
                    />
                    <ResumeEntry
                        title="Freelance Full-Stack Developer"
                        org="Self-Employed"
                        period="2021 – 2025"
                        bullets={[
                            'Delivered 10+ production web applications for clients across e-commerce, education, and services.',
                            'Built React and Next.js frontends with Framer Motion animations and Tailwind CSS styling.',
                            'Developed RESTful APIs with Node.js/Express and Python/FastAPI backends.',
                            'Implemented third-party integrations including payment gateways and AI APIs.',
                        ]}
                    />
                </ResumeSection>

                {/* Projects */}
                <ResumeSection title="Selected Projects">
                    <ResumeEntry
                        title="Qalb Qur'an"
                        org="React Native · Firebase"
                        period=""
                        bullets={[
                            "A mobile app for Muslim women to memorise the Qur'an, grow spiritually, and stay close to their community.",
                        ]}
                    />
                    <ResumeEntry
                        title="Bidmaj Chatbot"
                        org="Python · NLP · REST API"
                        period=""
                        bullets={[
                            'A chatbot that understands everyday questions and answers like a real conversation.',
                        ]}
                    />
                    <ResumeEntry
                        title="AI Image Generator"
                        org="React · OpenAI DALL-E · Node.js"
                        period=""
                        bullets={[
                            "Type a prompt, get an image — text into pictures with OpenAI's image models.",
                        ]}
                    />
                    <ResumeEntry
                        title="AnnoTater"
                        org="JavaScript · Chrome Extensions API"
                        period=""
                        bullets={[
                            'A Chrome extension for highlighting, annotating, and screenshotting web pages — built to make research less painful.',
                        ]}
                    />
                </ResumeSection>

                {/* Skills */}
                <ResumeSection title="Technical Skills">
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '8px 16px', fontSize: '0.9rem', marginBottom: '16px' }}>
                        {[
                            ['Frontend', 'React, Next.js 14, Tailwind CSS, Framer Motion, HTML5, CSS3'],
                            ['Backend', 'Node.js, Express, Python, FastAPI, REST APIs'],
                            ['Databases', 'PostgreSQL, Firebase, MongoDB'],
                            ['AI / ML', 'OpenAI API, LangChain, LangGraph, Prompt Engineering'],
                            ['Tools', 'Git, GitHub Actions, Vercel, Docker (basics), CI/CD'],
                            ['Other', 'System Design, Agile, Technical Leadership'],
                        ].map(([label, value]) => (
                            <React.Fragment key={label}>
                                <span style={{ fontWeight: 600, color: 'var(--indigo)' }}>{label}</span>
                                <span style={{ color: 'var(--text-muted)' }}>{value}</span>
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Tech logo strip */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                        {[
                            { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
                            { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
                            { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
                            { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
                            { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                            { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
                            { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
                            { name: 'Power BI', icon: '/assets/powerbi.svg' },
                            { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
                            { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
                        ].map(s => (
                            <div key={s.name} title={s.name} style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                                background: 'var(--bg)', border: '1px solid var(--border)',
                                borderRadius: '10px', padding: '8px 10px', minWidth: '52px'
                            }}>
                                <img src={s.icon} alt={s.name} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>{s.name}</span>
                            </div>
                        ))}
                    </div>
                </ResumeSection>

                {/* Education */}
                <ResumeSection title="Education">
                    <ResumeEntry
                        title="B.Sc. Surveying &amp; Geoinformatics"
                        org="Lagos State University (LASU)"
                        period="Current Student"
                        bullets={[
                            'Studying Surveying and Geoinformatics — developing strong foundations in spatial data analysis, GIS, and mapping systems.',
                            'Applying technical programming skills to geospatial data processing and automation projects.',
                        ]}
                    />
                    <ResumeEntry
                        title="Self-Taught Software Engineer"
                        org="Online Platforms (freeCodeCamp, Udemy, YouTube, MDN)"
                        period="2020 – Present"
                        bullets={[
                            'Completed structured courses in full-stack web development, data structures, algorithms, and AI engineering.',
                        ]}
                    />
                </ResumeSection>
            </motion.div>
        </>
    );
};

/* ── helpers ── */
const ResumeSection = ({ title, children }) => (
    <div style={{ marginBottom: '28px' }}>
        <h2 style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--indigo)',
            borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '16px',
        }}>{title}</h2>
        {children}
    </div>
);

const ResumeEntry = ({ title, org, period, bullets }) => (
    <div style={{ marginBottom: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
            <div>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{title}</span>
                {org && <span style={{ color: 'var(--text-muted)', marginLeft: '8px', fontSize: '0.875rem' }}>— {org}</span>}
            </div>
            {period && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{period}</span>}
        </div>
        <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {bullets.map((b, i) => <li key={i} style={{ marginBottom: '4px' }}>{b}</li>)}
        </ul>
    </div>
);

export default Resume;
