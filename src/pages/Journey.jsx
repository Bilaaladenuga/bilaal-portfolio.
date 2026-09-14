
import { motion } from 'framer-motion';

const phases = [
    {
        year: '2020',
        title: 'The Fundamentals',
        body: 'Started with HTML, CSS, and JavaScript. Built my first static sites, figured out how browsers actually render pages, and learned to write clean markup that actually makes sense.',
        icon: 'uil-code-branch',
    },
    {
        year: '2021 – 2022',
        title: 'Moving Beyond Static Pages',
        body: 'Got hooked on React and Next.js. Moved from static pages to real, data-driven apps, picking up state management, component design, and frontend architecture along the way.',
        icon: 'uil-react',
    },
    {
        year: '2023 – 2024',
        title: 'Backend, AI & Full Stack',
        body: 'Went full-stack. Node.js, Python, PostgreSQL. Then I started playing with AI: OpenAI APIs, chatbots, image generators, and automated workflows with LangChain.',
        icon: 'uil-robot',
    },
    {
        year: '2025',
        title: 'Co-Founding MOBO Digital',
        body: 'Co-founded MOBO Digital, an agency that builds web solutions for real clients. My focus shifted to business logic and leading the technical side.',
        icon: 'uil-rocket',
    },
    {
        year: 'Now',
        title: 'AI Systems & Architecture',
        body: 'Diving deeper into LLM agents, backend architecture, and end-to-end AI products. Always a new problem worth solving.',
        icon: 'uil-chart-growth',
    },
];

const Journey = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="wrapper section"
        >
            <div className="top-header">
                <div className="section-label">Journey</div>
                <h1 className="section-title">How I Got Here</h1>
                <p className="section-subtitle">How I got from there to here.</p>
            </div>

            <div className="timeline">
                {phases.map((p, i) => (
                    <motion.div
                        key={p.year}
                        className="timeline-entry"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                        </div>
                        <div>
                            <div className="timeline-year">
                                <i className={`uil ${p.icon}`} style={{ marginRight: '8px', fontSize: '1.2rem', verticalAlign: 'middle' }}></i>
                                {p.year}
                            </div>
                            <div className="timeline-title">{p.title}</div>
                            <div className="timeline-body">{p.body}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Journey;
