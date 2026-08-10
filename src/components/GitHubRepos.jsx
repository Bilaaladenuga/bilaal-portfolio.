import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB_USERNAME = 'Bilaaladenuga';

// Curated fallback descriptions for repos without one on GitHub.
// Used when the GitHub API returns no description, so every card is informative.
const CURATED_DESCRIPTIONS = {
  'AI-Image-generator-': 'A web application that generates images from text prompts using generative AI APIs, with a clean client-side interface.',
  'AlFatwa': 'An Islamic knowledge and Q&A platform designed to make authentic religious guidance accessible online.',
  'AnnoTater': 'A productive webpage annotation and screenshot Chrome extension for highlighting, commenting, and saving web content.',
  'Bidmaj-Chatbot-': 'An intelligent conversational agent handling natural language queries with NLP and backend integration.',
  'Bidmaj-Language-Translator-': 'A sophisticated translation tool bridging communication gaps with real-time multilingual accuracy.',
  'BIDMAJ-TEXTMORPH-': 'A user-friendly text-to-speech converter that transforms written text into natural, human-like speech.',
  'bilaal-portfolio.': 'My personal portfolio — a React + Vite site showcasing my projects, journey, and experience.',
  'Chess-master': 'A fully functional digital chess game implementing standard rules, move validation, and game logic.',
  'My-browser-': 'A custom web browser built in Python, exploring browser fundamentals and GUI automation.',
  'My-Portfolio-': 'An earlier version of my personal portfolio, preserved as a milestone from my web development journey.',
  'pizza-webpage-': 'A polished, responsive landing page for a pizza restaurant with ordering-focused UI.',
  'ResuCraft': 'An AI-powered resume builder for creating polished, ATS-friendly resumes with industry-specific templates and Gemini content assistance.',
  'TIC-TAC-TOE': 'A classic Tic-Tac-Toe game with a clean, interactive board — a fun frontend exercise in game logic.',
  'weather-api-fetcher': 'A real-time weather tracking application fetching live meteorological data from external APIs.',
  'Weather-App-': 'A modern weather app with a Tailwind-styled interface, bundling live forecast data from weather APIs.',
};
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;
const CACHE_KEY = 'github-repos-cache-v2';
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

// Language → badge color
const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  PHP: '#4F5D95',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Jupyter: '#DA5B0B',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const formatCount = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n);

const timeAgo = (dateStr) => {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

// ── Skeleton card shown while loading ──
const SkeletonCard = () => (
  <div style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '20px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight: '190px',
  }}>
    <div className="skeleton-block" style={{ width: '40%', height: '20px', borderRadius: '6px' }} />
    <div className="skeleton-block" style={{ width: '90%', height: '14px', borderRadius: '6px' }} />
    <div className="skeleton-block" style={{ width: '75%', height: '14px', borderRadius: '6px' }} />
    <div className="skeleton-block" style={{ width: '50%', height: '14px', borderRadius: '6px' }} />
    <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
      <div className="skeleton-block" style={{ width: '70px', height: '22px', borderRadius: '50px' }} />
      <div className="skeleton-block" style={{ width: '70px', height: '22px', borderRadius: '50px' }} />
    </div>
  </div>
);

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [errorMsg, setErrorMsg] = useState('');
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('All');

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // Try cache first
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
          if (!cancelled) {
            setRepos(cached.repos);
            setStatus('ready');
          }
          return;
        }
      } catch { /* ignore corrupt cache */ }

      try {
        const res = await fetch(API_URL, {
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (res.status === 403) {
          throw new Error('GitHub API rate limit reached — please try again later.');
        }
        if (!res.ok) throw new Error(`GitHub API error (${res.status})`);

        const data = await res.json();
        const cleaned = data
          // Hide forks and the special profile-README repo
          .filter((r) => !r.fork && r.name !== GITHUB_USERNAME)
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description || CURATED_DESCRIPTIONS[r.name] || 'No description provided.',
            html_url: r.html_url,
            homepage: r.homepage,
            language: r.language,
            stargazers_count: r.stargazers_count || 0,
            forks_count: r.forks_count || 0,
            topics: (r.topics || []).slice(0, 4),
            updated_at: r.updated_at,
          }));

        if (!cancelled) {
          setRepos(cleaned);
          setStatus('ready');
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), repos: cleaned }));
          } catch { /* storage full — ignore */ }
        }
      } catch (err) {
        if (cancelled) return;
        // Fall back to stale cached data if available
        try {
          const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
          if (cached && cached.repos?.length) {
            setRepos(cached.repos);
            setStatus('ready');
            return;
          }
        } catch { /* ignore */ }
        setErrorMsg(err.message || 'Could not load repositories.');
        setStatus('error');
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  const languages = useMemo(() => {
    const set = new Set(repos.map((r) => r.language).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [repos]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repos.filter((r) => {
      const matchesQuery = !q ||
        r.name.toLowerCase().includes(q) ||
        (r.description || '').toLowerCase().includes(q) ||
        r.topics.some((t) => t.toLowerCase().includes(q));
      const matchesLang = language === 'All' || r.language === language;
      return matchesQuery && matchesLang;
    });
  }, [repos, query, language]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="wrapper section"
      style={{ paddingTop: '2em' }}
    >
      <motion.div variants={fadeUp} className="top-header">
        <h1>GitHub Repositories</h1>
        <span>All public projects — pulled live from my GitHub</span>
      </motion.div>

      {/* ── Controls ── */}
      {(status === 'ready' || repos.length > 0) && (
        <motion.div variants={fadeUp} className="github-controls">
          <div className="github-search">
            <i className="uil uil-search"></i>
            <input
              type="text"
              className="input-field"
              placeholder="Search repositories, topics..."
              aria-label="Search repositories"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="github-filters">
            {languages.map((lang) => (
              <button
                key={lang}
                className={`github-chip ${language === lang ? 'github-chip-active' : ''}`}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <p className="github-count">
            {filtered.length} {filtered.length === 1 ? 'repository' : 'repositories'}
            {language !== 'All' || query ? ' found' : ''}
          </p>
        </motion.div>
      )}

      {/* ── Grid ── */}
      {status === 'loading' && (
        <div className="github-grid">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {status === 'error' && (
        <motion.div variants={fadeUp} className="github-error">
          <i className="uil uil-exclamation-oct"></i>
          <p>{errorMsg}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-faint)' }}>
            In the meantime, view them directly:{' '}
            <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--indigo)' }}>
              github.com/{GITHUB_USERNAME}
            </a>
          </p>
        </motion.div>
      )}

      {status === 'ready' && (
        <>
          {filtered.length === 0 ? (
            <motion.div variants={fadeUp} className="github-error">
              <i className="uil uil-search-alt"></i>
              <p>No repositories match your search.</p>
            </motion.div>
          ) : (
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="github-grid">
              <AnimatePresence>
                {filtered.map((repo) => {
                  const langColor = LANGUAGE_COLORS[repo.language] || '#94a3b8';
                  return (
                    <motion.a
                      key={repo.id}
                      variants={fadeUp}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-card"
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      layout
                    >
                      <div className="github-card-top">
                        <i className="uil uil-github-alt"></i>
                        <h3>{repo.name}</h3>
                      </div>

                      <p className="github-desc">{repo.description}</p>

                      {repo.topics.length > 0 && (
                        <div className="github-topics">
                          {repo.topics.map((t) => (
                            <span key={t} className="github-topic">#{t}</span>
                          ))}
                        </div>
                      )}

                      <div className="github-meta">
                        {repo.language && (
                          <span className="github-lang">
                            <span style={{
                              width: '10px', height: '10px', borderRadius: '50%',
                              background: langColor, display: 'inline-block', flexShrink: 0,
                            }} />
                            {repo.language}
                          </span>
                        )}
                        <span title="Stars"><i className="uil uil-star"></i> {formatCount(repo.stargazers_count)}</span>
                        <span title="Forks"><i className="uil uil-code-branch"></i> {formatCount(repo.forks_count)}</span>
                        <span className="github-updated" title="Last updated">Updated {timeAgo(repo.updated_at)}</span>
                      </div>
                    </motion.a>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </>
      )}
    </motion.section>
  );
};

export default GitHubRepos;
