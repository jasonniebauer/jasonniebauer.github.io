const Skills = () => {
    const mySkills = [
        // Core Technical
        { label: 'Python' },
        { label: 'SQL' },
        { label: 'JavaScript / React' },
        { label: 'Full-Stack Development' },
        { label: 'API Development & Integration' },
        { label: 'Real-Time Data Processing' },
        { label: 'Data Pipelines & Automation' },
        { label: 'Data Integrity & Validation' },
        // Data & Analytics
        { label: 'Interactive Dashboard Design' },
        { label: 'Data Visualization' },
        { label: 'UI/UX Design' },
        { label: 'Data Modeling & Transformation' },
        { label: 'Pandas' },
        { label: 'Web Scraping & Data Ingestion' },
        // Reliability & Operations
        { label: 'Observability & Monitoring' },
        { label: 'Incident Response & Troubleshooting' },
        // Software Engineering
        { label: 'Database Design' },
        { label: 'Git / Version Control' },
        { label: 'Cloud Hosting & Deployment' },
        // Advanced
        { label: 'Machine Learning' },
        { label: 'Statistical Analysis' },
        // Process
        { label: 'Agile Methodologies' },
        { label: 'Cross-Functional Collaboration' },
    ];

    const skillsList = mySkills.map(skill => 
        <li key={skill.label}>{skill.label}</li>
    );

    return (
        <section id="skills">
            <h3>Skills</h3>
            <ul className="skills-list">
                {skillsList}
            </ul>
        </section>
    );
}

export default Skills;