const Skills = () => {
    const mySkills = [
        // Core Technical
        { label: 'Python' },
        { label: 'SQL' },
        { label: 'Pandas & NumPy' },
        { label: 'Data Pipelines & ETL' },
        { label: 'Data Modeling & Transformation' },
        { label: 'API Development & Integration' },
        { label: 'Web Scraping & Data Ingestion' },
        // Data & Analytics
        { label: 'Exploratory Data Analysis (EDA)' },
        { label: 'Statistical Analysis' },
        { label: 'Data Visualization' },
        { label: 'Interactive Dashboard Design' },
        { label: 'Business Intelligence & Reporting' },
        // Machine Learning & Advanced Analytics
        { label: 'Machine Learning' },
        { label: 'scikit-learn' },
        { label: 'Time Series Analysis' },
        { label: 'Forecasting' },
        { label: 'Predictive Modeling' },
        { label: 'Feature Engineering' },
        { label: 'Model Evaluation & Deployment' },
        // Engineering & Operations
        { label: 'Database Design' },
        { label: 'Git & Version Control' },
        { label: 'CI/CD & Automated Deployment' },
        { label: 'Cloud Platforms' },
        { label: 'Data Quality & Integrity' },
        // Frontend & Full-Stack
        { label: 'React.js' },
        { label: 'JavaScript' },
        { label: 'Full-Stack Development' },
        { label: 'UI/UX Design for Data Products' },
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