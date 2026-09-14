
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resume = () => {
    const handlePrint = () => window.print();

    return (
        <>
            <style>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; color: #111 !important; }
                    .resume-page { box-shadow: none !important; border: none !important; }
                }
            `}</style>

            <div className="no-print wrapper" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 0', marginBottom: '24px', flexWrap: 'wrap', gap: '12px'
            }}>
                <Link to="/" style={{ color: 'var(--color-plasma-violet)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                    <i className="uil uil-arrow-left"></i> Back to portfolio
                </Link>
                <button className="btn btn-primary" onClick={handlePrint}>
                    <i className="uil uil-download-alt"></i> Download / Print PDF
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="resume-page"
            >
                {/* Header */}
                <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-graphite-hairline)', paddingBottom: '24px' }}>
                    <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '-0.04em', fontWeight: 900 }}>
                        Adenuga Bilaal
                    </h1>
                    <p style={{ margin: '8px 0 16px', color: 'var(--color-plasma-violet)', fontWeight: 600, fontSize: '1rem' }}>
                        Technical Founder, AI Systems Developer, Full-Stack Engineer
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.875rem', color: 'var(--color-smoke)' }}>
                        <span><i className="uil uil-envelope"></i>&nbsp;adenugabilaal75@gmail.com</span>
                        <span><i className="uil uil-phone"></i>&nbsp;+234 70 7817 8909</span>
                        <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-smoke)', textDecoration: 'none' }}>
                            <i className="uil uil-linkedin-alt"></i>&nbsp;linkedin.com/in/adenuga-bilaal
                        </a>
                        <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-smoke)', textDecoration: 'none' }}>
                            <i className="uil uil-github-alt"></i>&nbsp;github.com/Bilaaladenuga
                        </a>
                    </div>
                </div>

                {/* Summary */}
                <ResumeSection title="Summary">
                    <p style={{ color: 'var(--color-smoke)', margin: 0 }}>
                        Full-Stack Developer and Technical Founder with 5+ years building
                        web apps and AI systems. Co-Founder of MOBO Digital (2025),
                        where I lead the engineering side. Architecture, delivery, and making sure
                        the tech actually works.
                    </p>
                </ResumeSection>

                {/* Experience */}
                <ResumeSection title="Experience">
                    <ResumeEntry
                        title="Co-Founder & Technical Lead"
                        org="MOBO Digital"
                        period="2025 – Present"
                        bullets={[
                            'Co-founded the agency and lead the engineering team, from architecture to production.',
                            'Designed the architecture behind our SaaS builds: Next.js 14, Node.js, and PostgreSQL.',
                            'Built AI workflows (OpenAI, LangChain) that cut out the tedious parts of client processes.',
                            'Run code reviews and set engineering standards across the dev team.',
                        ]}
                    />
                    <ResumeEntry
                        title="Freelance Full-Stack Developer"
                        org="Self-Employed"
                        period="2021 – 2025"
                        bullets={[
                            'Shipped 10+ production web apps for clients in e-commerce, education, and services.',
                            'Built React and Next.js frontends with Framer Motion animations and Tailwind CSS styling.',
                            'Developed RESTful APIs with Node.js/Express and Python/FastAPI backends.',
                            'Added third-party integrations like payment gateways and AI APIs.',
                        ]}
                    />
                </ResumeSection>

                {/* Projects */}
                <ResumeSection title="Selected Projects">
                    <ResumeEntry title="Qalb Qur'an" org="React Native · Firebase" period="" bullets={["A mobile app for Muslim women to memorise the Qur'an, grow spiritually, and stay close to their community."]} />
                    <ResumeEntry title="Bidmaj Chatbot" org="Python · NLP · REST API" period="" bullets={['A chatbot that understands everyday questions and answers like a real conversation.']} />
                    <ResumeEntry title="AI Image Generator" org="React · OpenAI DALL-E · Node.js" period="" bullets={["Type a prompt, get an image. Turns text into pictures with OpenAI's image models."]} />
                    <ResumeEntry title="AnnoTater" org="JavaScript · Chrome Extensions API" period="" bullets={['A Chrome extension for highlighting, annotating, and screenshotting web pages.']} />
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
                                <span style={{ fontWeight: 600, color: 'var(--color-obsidian)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{label}</span>
                                <span style={{ color: 'var(--color-smoke)' }}>{value}</span>
                            </React.Fragment>
                        ))}
                    </div>
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
                                background: 'var(--color-paper-white)', border: '1px solid var(--color-graphite-hairline)',
                                borderRadius: '2px', padding: '8px 10px', minWidth: '52px'
                            }}>
                                <img src={s.icon} alt={s.name} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                                <span style={{ fontSize: '0.65rem', color: 'var(--color-smoke)', fontWeight: 500 }}>{s.name}</span>
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
                            'Studying Surveying and Geoinformatics, building foundations in spatial data analysis, GIS, and mapping systems.',
                        ]}
                    />
                    <ResumeEntry
                        title="Self-Taught Software Engineer"
                        org="Online Platforms"
                        period="2020 – Present"
                        bullets={[
                            'Done structured courses in full-stack web development, data structures, algorithms, and AI engineering.',
                        ]}
                    />
                </ResumeSection>
            </motion.div>
        </>
    );
};

const ResumeSection = ({ title, children }) => (
    <div style={{ marginBottom: '28px' }}>
        <h2 className="resume-section-header">{title}</h2>
        {children}
    </div>
);

const ResumeEntry = ({ title, org, period, bullets }) => (
    <div style={{ marginBottom: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
            <div>
                <span style={{ fontWeight: 700, color: 'var(--color-obsidian)' }}>{title}</span>
                {org && <span style={{ color: 'var(--color-smoke)', marginLeft: '8px', fontSize: '0.875rem' }}>/ {org}</span>}
            </div>
            {period && <span style={{ color: 'var(--color-ash)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{period}</span>}
        </div>
        <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-smoke)', fontSize: '0.875rem' }}>
            {bullets.map((b, i) => <li key={i} style={{ marginBottom: '4px' }}>{b}</li>)}
        </ul>
    </div>
);

export default Resume;
