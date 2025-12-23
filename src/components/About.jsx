import { useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section id="about">
            <h1 className="title">Hi, I'm Jason</h1>
            <h2 className="subtitle">Software & analytics engineer building scalable systems and data insights.</h2>
            <div className="about-text">
                <p>I specialize in building and deploying complete production systems from the ground up. I don't just code features, I own end-to-end solutions, from initial concept through deployment, delivering real business impact with minimal oversight. With a versatile builder's mindset, I thrive in fast-moving environments where tech stacks evolve rapidly, quick integrations are critical, and data-driven insights fuel decisions. I blend full-stack development, API design and integration, data pipelines, engineering, and analytics to create scalable, interconnected systems. <span onClick={toggleVisibility} className={`about-read-more-link ${isVisible ? '' : 'visible'}`}>Read more</span></p>
                <div className={`about-read-more ${isVisible ? 'visible' : ''}`}>
                    <p>I'm a self-taught full-stack software engineer with deep expertise in data engineering, analytics, and actionable insights. My journey began with designing and building intuitive user interfaces, which led me to master backend development to transform those UIs into full-featured applications complete with sophisticated logic, database integrations, and API connections.</p>
                    <p>As I incorporated data collection into my projects, I developed a passion for analytics. Observing the end-to-end data lifecycle inspired me to optimize pipelines to minimize translation and cleanup efforts enabling faster, more reliable analysis.</p>
                    <p>Today, I build scalable end-to-end systems with APIs and data pipelines that ingest and transform information from diverse sources. Using machine learning, I deliver causal inferences and predictions that drive business decisions.</p>
                </div>
            </div>
        </section>
    );
}

export default About;