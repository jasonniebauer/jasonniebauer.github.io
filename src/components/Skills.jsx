const Skills = () => {
    const mySkills = [
        { label: 'Python'},
        { label: 'React.js'},
        { label: 'Full-Stack Development'},
        { label: 'API Development / RESTful APIs'},
        { label: 'JavaScript/TypeScript'},
        { label: 'Data Pipelines'},
        { label: 'SQL'},
        { label: 'Data Engineering / Data Analytics'},
        { label: 'Git / Version Control'},
        { label: 'Cloud Hosting'},
        { label: 'Pandas'},
        { label: 'Machine Learning'},
        { label: 'Agile Methodologies'},
        { label: 'Integration'},
        { label: 'Salesforce'},
        { label: 'Data Analysis'},
        { label: 'Database Design'},
        { label: 'UI/UX'},
        { label: 'Business Process Design'},
        { label: 'Automation'},
        { label: 'Data Mining'},
        { label: 'Web Scraping'},
        { label: 'Statistical Analysis' },
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