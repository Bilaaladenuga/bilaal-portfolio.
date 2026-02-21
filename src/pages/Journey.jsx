
import { motion } from 'framer-motion';

const phases = [
    {
        year: '2020',
        title: 'The Fundamentals',
        body: 'Started with HTML, CSS, and JavaScript. Built static sites and learned the core of the web — understanding how browsers render content and how to craft clean, semantic markup.',
        icon: 'uil-code-branch',
    },
    {
        year: '2021 – 2022',
        title: 'Moving Beyond Static Pages',
        body: 'Mastered React and Next.js. Started building dynamic, data-driven applications and developed a deep understanding of state management, component design, and frontend architecture.',
        icon: 'uil-react',
    },
    {
        year: '2023 – 2024',
        title: 'Backend, AI & Full Stack',
        body: 'Expanded into Node.js, Python, PostgreSQL, and AI integrations. Began working with OpenAI APIs, building chatbots, generative tools, and exploring automated workflows with LangChain.',
        icon: 'uil-robot',
    },
    {
        year: '2025',
        title: 'Co-Founding MOBO Digital',
        body: 'Launched MOBO Digital — an agency building scalable web solutions for clients. Focused on business logic, technical leadership, and delivering real-world impact through software.',
        icon: 'uil-rocket',
    },
    {
        year: 'Now',
        title: 'AI Systems & Architecture',
        body: 'Deepening expertise in LLM agents, backend system architecture, and building complex end-to-end AI-powered products. Continuously pushing the boundaries of what\'s possible.',
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
                <h1>My Journey</h1>
                <span>Strategic Timeline</span>
            </div>

            <div className="timeline">
                {phases.map((p, i) => (
                    <motion.div
                        key={p.year}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">
                            <i className={`uil ${p.icon}`} style={{ marginRight: '6px', fontSize: '1.4rem', verticalAlign: 'middle' }}></i>
                            {p.year}
                        </div>
                        <div className="timeline-title">{p.title}</div>
                        <div className="timeline-body">{p.body}</div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Journey;
