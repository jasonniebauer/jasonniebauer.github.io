const Projects = () => {
    const myProjects = [
        {
            image: '',
            title: 'DOGE Insights',
            dates: 'Jan 2025 - Nov 2025',
            description: 'Government spending analytics platform delivering in-depth analysis and real-time dashboards on the Department of Government Efficiency (DOGE). It tracks savings from canceled contracts, grants, leases, and regulatory reforms, turning complex government data into actionable insights that promote transparency, accountability, and informed public discussion around spending efficiency.',
            technology: [
                'Python',
                'SQL',
                'Data Pipeline',
                'Pandas',
                'Data Transformation',
                'Data Analytics',
                'Statistical Analysis',
                'Data Visualization',
                'Data Ingestion',
                'Government API Integration',
                'React.js',
                'JavaScript',
                'Interactive Dashboards',
                'Full-Stack Development',
                'Database Design',
                'UI/UX Design',
                'Automation',
                'Cloud Hosting (PythonAnywhere)'
            ],
            website: 'https://www.doge-insights.com/',
            source: ''
        },
        {
            image: '',
            title: 'BasketHogs',
            dates: 'Oct 2025 - Current',
            description: 'Analytics hub offering advanced statistics and visualizations on the Arkansas Razorbacks men\'s basketball team. Delivers in-depth player performance tracking, shot efficiency charts, team metrics, and interactive dashboards throughout the 2025-2026 season to empower Hogs fans with data-driven insights.',
            technology: [
                'Python',
                'SQL',
                'Data Pipeline',
                'Pandas',
                'Data Analytics',
                'Statistical Analysis',
                'Data Visualization',
                'Interactive Dashboards',
                'Data Ingestion',
                'React.js',
                'JavaScript',
                'Full-Stack Development',
                'Database Design',
                'Machine Learning OCR',
                'UI/UX Design',
                'Cloud Hosting (Vercel)',
                'Automated Deployment'
            ],
            website: 'https://www.baskethogs.com/',
            source: ''
        },
        {
            image: '',
            title: 'CryptoTab',
            dates: 'Dec 2025 - Current',
            description: 'Minimal web app with real-time prices for 26 top cryptocurrencies in USD, EUR, and GBP all powered by reliable data from three leading cryptocurrency APIs. Watch live updates refresh automatically (even in the background). Perfect for traders, investors, or anyone keeping an eye on the market without the hassle.',
            technology: [
                'JavaScript',
                'Real-Time Data Handling',
                'Coinbase API Integration',
                'CoinGecko API Integration',
                'CoinPaprika API Integration',
                'Data Aggregation',
                'Multi-Currency Support',
                'Background Tab Updates',
                'Data Visualization',
                'Full-Stack Development',
                'UI/UX Design',
                'Custom CSS',
                'Error Handling & Reliability',
                'Performance Optimization',
                'Cloud Hosting (Netlify)',
                'Automated Deployment',
            ],
            website: 'https://cryptotab.app/',
            source: ''
        },
        {
            image: '',
            title: 'BitcoinSimple',
            dates: 'Dec 2025 - Current',
            description: 'Swiss Army knife API for Bitcoin data. One lightweight endpoint hub delivers real-time prices (with fiat conversion), wallet balances, transaction details, block summaries, network stats, historical charts, mempool insights, fee estimates, and halving countdowns all in clean JSON, no auth required.',
            technology: [
                'Python',
                'FastAPI',
                'API Development',
                'RESTful Design',
                'Cryptocurrency Data',
                'Blockchain Data Handling',
                'Data Aggregation',
                'Data Caching',
                'Rate Limiting',
                'Error Handling',
                'Open-Source Development & Maintenance',
                'Cloud Hosting (Vercel)',
                'Automated Deployment',
            ],
            website: 'https://bitcoinsimple.info/',
            source: 'https://github.com/jasonniebauer/bitcoinsimple'
        },
        {
            image: '',
            title: 'Grokipedia API',
            dates: 'Nov 2025 - Current',
            description: 'Unlock the power of Grokipedia\'s massive knowledge base with this free, open-source REST API providing seamless programmatic access to 1,089,057 full-text articles from xAI\'s innovative AI-powered encyclopedia. Perfect for training and fine-tuning LLMs, text analysis and natural language processing research, and integrating rich knowledge into apps, chatbots, search tools, or data pipelines.',
            technology: [
                'Python',
                'FastAPI',
                'API Development',
                'Web Scraping',
                'BeautifulSoup',
                'Data Caching',
                'Text Processing & Extraction',
                'Rate Limiting',
                'Error Handling',
                'RESTful Design',
                'Open-Source Development & Maintenance',
                'Cloud Hosting (Vercel)',
                'Automated Deployment',
            ],
            website: 'https://grokipedia-api.com/',
            source: 'https://github.com/dataxapi/grokipedia-api'
        },
        {
            image: '',
            title: 'DotClock',
            dates: 'Dec 2025',
            description: 'Minimalist web app that reimagines time in elegant segmented digits with toggles for 12 or 24-hour format and a "words" mode (e.g. FIVE SEVENTEEN). Perfect for anyone who wants clean, glanceable timekeeping with a touch of retro charm and modern flexibility.',
            technology: [
                'JavaScript',
                'Custom CSS',
                'UI/UX Design',
                'Frontend Development',
                'Real-Time Updates',
                'Responsive Design',
                'Open-Source Development & Maintenance',
                'Cloud Hosting (Netlify)',
                'Automated Deployment',
            ],
            website: 'https://dotclock.app/',
            source: 'https://github.com/jasonniebauer/dotclock'
        },
    ];

    const projectsList = myProjects.map(project =>
        <div key={project.title} className="project">
            <div className="project-image"></div>
            <div className="project-card">
                <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-date">{project.dates}</p>
                    <p className="project-description">{project.description}</p>
                </div>
                <div>
                    <ul className="project-tools-wrapper">
                        {project.technology.map((technology) => (
                        <li key={technology} className="project-tools">{technology}</li> // 'technology' is unique here and works as a key
                        ))}
                    </ul>
                    <div className="project-links">
                        { project.website && (
                            <a href={project.website}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-link-icon"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                Website
                            </a>
                        )}
                        { project.source && (
                            <a href={project.source}>
                                <svg viewBox="0 0 438.549 438.549" className="project-link-icon"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects">
            <div className="projects-section-header">
                <h5 className="projects-title">My Projects</h5>
                <h1>Check out my latest work</h1>
                <p className="projects-subtitle">I love tackling projects that blend robust data pipelines with intuitive, impactful interfaces. Below are some of my favorites.</p>
            </div>
            <div className="projects-wrapper">
                {projectsList}
            </div>
        </section>
    );
}

export default Projects;