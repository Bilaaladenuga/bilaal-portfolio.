
import { motion } from 'framer-motion';

const items = [
    {
        icon: 'uil-robot',
        title: 'Agentic AI Workflows',
        body: 'Experimenting with autonomous AI agents and multi-step workflows — LangGraph and LangChain are my current playground.',
    },
    {
        icon: 'uil-briefcase-alt',
        title: 'Building MOBO Digital',
        body: 'Growing the engineering team at MOBO Digital and shipping real projects for our first clients.',
    },
    {
        icon: 'uil-code-branch',
        title: 'Next.js 14 Server Actions',
        body: 'Migrating older codebases to the Next.js 14 App Router with Server Actions — faster loads, cleaner code.',
    },
    {
        icon: 'uil-book-open',
        title: 'Reading: DDIA',
        body: '"Designing Data-Intensive Applications" by Martin Kleppmann — slowly working my way through the distributed systems classic.',
    },
    {
        icon: 'uil-chart-growth',
        title: 'System Architecture',
        body: 'Learning scalable backend patterns — queues, caching, and API design that holds up under real traffic.',
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
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Now;
