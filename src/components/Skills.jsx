const Skills = () => {
    const mySkills = [
        // Core Analytics & Data Foundations
        { label: 'Python' },
        { label: 'SQL' },
        { label: 'Data Pipelines' },
        { label: 'Pandas' },
        { label: 'Data Modeling & Transformation' },
        { label: 'Data Analytics & Insights' },
        // Software & Systems Engineering
        { label: 'Full-Stack Development' },
        { label: 'API Development & Integration' },
        { label: 'React.js' },
        { label: 'JavaScript / TypeScript' },
        { label: 'Database Design' },
        // Scalability & Operations
        { label: 'Cloud Hosting & Deployment' },
        { label: 'Git / Version Control' },
        { label: 'Automation' },
        // Advanced & Specialized
        { label: 'Machine Learning' },
        { label: 'Statistical Analysis' },
        { label: 'Web Scraping & Data Ingestion' },
        { label: 'UI/UX Design' },
        // Domain & Process
        { label: 'Salesforce Administration' },
        { label: 'Agile Methodologies' },
        { label: 'Business Process Design' },
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