
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
                        Full-Stack Developer / AI Systems Engineer
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.875rem', color: 'var(--color-smoke)' }}>
                        <span><i className="uil uil-envelope"></i>&nbsp;adenugabilaal75@gmail.com</span>
                        <span><i className="uil uil-phone"></i>&nbsp;+234 70 7817 8909</span>
                        <span><i className="uil uil-map-marker"></i>&nbsp;Lagos, Nigeria</span>
                        <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-smoke)', textDecoration: 'none' }}>
                            <i className="uil uil-linkedin-alt"></i>&nbsp;linkedin.com/in/adenuga-bilaal
                        </a>
                        <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-smoke)', textDecoration: 'none' }}>
                            <i className="uil uil-github-alt"></i>&nbsp;github.com/Bilaaladenuga
                        </a>
                    </div>
                </div>

                {/* Summary */}
                <ResumeSection title="Professional Summary">
                    <p style={{ color: 'var(--color-smoke)', margin: 0 }}>
                        Full-stack developer with 5+ years building web applications, AI-powered systems, and geospatial tools.
                        Co-Founder of MOBO Digital, where I lead the engineering side. I work across React, Next.js, Node.js, and Python,
                        with a focus on LLM integrations, backend architecture, and data-driven applications. My background in
                        geoinformatics gives me a unique edge in spatial analysis and mapping projects.
                    </p>
                </ResumeSection>

                {/* Experience */}
                <ResumeSection title="Experience">
                    <ResumeEntry
                        title="Co-Founder & Technical Lead"
                        org="MOBO Digital"
                        period="2025 - Present"
                        bullets={[
                            'Co-founded a web agency building SaaS products and AI solutions for clients across different industries.',
                            'Designed and shipped full-stack applications using Next.js 14, Node.js, and PostgreSQL.',
                            'Built AI workflows with OpenAI and LangChain that automate repetitive client processes.',
                            'Lead code reviews, set engineering standards, and mentor junior developers on the team.',
                        ]}
                    />
                    <ResumeEntry
                        title="Junior Developer"
                        org="Bidmaj Global"
                        period="2024 - Present"
                        bullets={[
                            'Build and maintain software projects for practical business use cases.',
                            'Work with web technologies, REST APIs, automation, and Microsoft Power Platform.',
                            'Debug issues and improve existing implementations across multiple projects.',
                        ]}
                    />
                    <ResumeEntry
                        title="Freelance Full-Stack Developer"
                        org="Self-Employed"
                        period="2021 - 2025"
                        bullets={[
                            'Shipped 10+ production web apps for clients in e-commerce, education, and services.',
                            'Built React and Next.js frontends with Framer Motion animations and Tailwind CSS.',
                            'Developed REST APIs with Node.js/Express and Python/FastAPI backends.',
                            'Integrated payment gateways, AI APIs, and third-party services.',
                        ]}
                    />
                </ResumeSection>

                {/* Projects */}
                <ResumeSection title="Key Projects">
                    <ResumeEntry
                        title="Urban Heat Intelligence Mapper"
                        org="Python / React / WebGIS"
                        period=""
                        bullets={[
                            'Geospatial intelligence system that analyses urban heat patterns using Landsat satellite imagery.',
                            'Performs NDVI vegetation analysis, NDBI built-up analysis, and urban heat hotspot detection.',
                            'Integrates OpenStreetMap data and explores spatial statistics (Moran\'s I, Getis-Ord Gi*).',
                        ]}
                    />
                    <ResumeEntry
                        title="CV Job Matching Engine"
                        org="Python / Machine Learning / NLP"
                        period=""
                        bullets={[
                            'Machine learning system that matches candidate CVs with job descriptions.',
                            'Goes beyond keyword matching to understand skill relationships and experience alignment.',
                            'Identifies skill gaps and generates match scores using NLP and semantic similarity.',
                        ]}
                    />
                    <ResumeEntry
                        title="Water Access Mapper"
                        org="JavaScript / WebGIS"
                        period=""
                        bullets={[
                            'Interactive mapping application for exploring and documenting water access points across Lagos.',
                            'Supports location search, satellite map views, water-point classification, and GeoJSON/CSV export.',
                        ]}
                    />
                    <ResumeEntry
                        title="ResuCraft"
                        org="TypeScript / React / AI"
                        period=""
                        bullets={[
                            'AI-assisted resume builder that helps users create and optimise resumes for job applications.',
                            'Features structured resume building, AI content suggestions, and job-focused optimisation.',
                        ]}
                    />
                    <ResumeEntry
                        title="Qalb Qur'an"
                        org="React Native / Firebase"
                        period=""
                        bullets={[
                            'Mobile app for Muslim women to support Quran memorisation, spiritual growth, and community.',
                        ]}
                    />
                </ResumeSection>

                {/* Skills */}
                <ResumeSection title="Technical Skills">
                    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '8px 16px', fontSize: '0.9rem', marginBottom: '16px' }}>
                        {[
                            ['Languages', 'Python, JavaScript, TypeScript, SQL, PowerShell, HTML5, CSS3'],
                            ['Data Engineering', 'ETL Pipelines, REST API Integration, Web Scraping, Pandas, Power BI'],
                            ['Databases', 'PostgreSQL (Supabase), SSMS, Firebase, MongoDB'],
                            ['AI / ML', 'OpenAI API, LangChain, LangGraph, RAG, NLP, Prompt Engineering'],
                            ['Geospatial', 'GIS, WebGIS, Spatial Analysis, Landsat, GeoJSON'],
                            ['Web & Deployment', 'Next.js, React, FastAPI, Node.js, Vercel, Git, GitHub, CI/CD'],
                            ['Other', 'Power Automate, System Design, Agile, Technical Leadership'],
                        ].map(([label, value]) => (
                            <React.Fragment key={label}>
                                <span style={{ fontWeight: 600, color: 'var(--color-obsidian)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{label}</span>
                                <span style={{ color: 'var(--color-smoke)' }}>{value}</span>
                            </React.Fragment>
                        ))}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                        {[
                            { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
                            { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
                            { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
                            { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
                            { name: 'PowerShell', icon: 'https://cdn.simpleicons.org/powershell/5391FE' },
                            { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
                            { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
                            { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
                            { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                            { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
                            { name: 'Power BI', icon: '/assets/powerbi.svg' },
                            { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
                            { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
                            { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458' },
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
                        title="B.Sc. Surveying & Geoinformatics"
                        org="Lagos State University (LASU)"
                        period="2020 - Present"
                        bullets={[
                            'Studying spatial data analysis, GIS, and mapping systems. Coursework includes remote sensing, cartography, and geodetic surveying.',
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
