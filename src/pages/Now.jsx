
import { motion } from 'framer-motion';

const items = [
    {
        icon: 'uil-robot',
        title: 'Agentic AI Workflows',
        body: 'Experimenting with autonomous AI agents and multi-step workflows using LangGraph and LangChain.',
    },
    {
        icon: 'uil-briefcase-alt',
        title: 'Building MOBO Digital',
        body: 'Growing the core engineering team and delivering scalable web solutions for early clients.',
    },
    {
        icon: 'uil-code-branch',
        title: 'Next.js 14 Server Actions',
        body: 'Refactoring and migrating legacy codebases to Next.js 14 App Router with Server Actions for better performance.',
    },
    {
        icon: 'uil-book-open',
        title: 'Reading: DDIA',
        body: '"Designing Data-Intensive Applications" by Martin Kleppmann — diving deep into distributed systems fundamentals.',
    },
    {
        icon: 'uil-chart-growth',
        title: 'System Architecture',
        body: 'Deepening knowledge in scalable backend design patterns — queues, caching strategies, and API design.',
    },
];

const Now = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="wrapper section"
        >
            <div className="top-header">
                <h1>Now</h1>
                <span>What I'm focused on currently</span>
            </div>

            <div className="now-list">
                {items.map((item, i) => (
                    <motion.div
                        key={item.title}
                        className="now-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <div className="now-icon">
                            <i className={`uil ${item.icon}`}></i>
                        </div>
                        <div className="now-text">
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Now;
