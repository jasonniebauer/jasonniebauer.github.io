import { useState } from 'react';

const About = (props) => {
    return (
        <section id="about">
            <h1 className="title">Hi, I'm Jason</h1>
            <h2 className="subtitle">Software & Analytics Engineer building scalable systems and data insights.</h2>
            <div className="about-text">
                <p>I build and ship production-grade systems that turn raw data into actionable business impact with full ownership from concept to deployment.
                    <span onClick={props.showAboutSection} className={`about-read-more-link ${props.isAboutSectionVisible ? '' : 'visible'}`}>Read more</span>
                </p>
                <div className={`about-read-more ${props.isAboutSectionVisible ? 'visible' : ''}`}>
                    <p>As a versatile, self-taught engineer, I combine full-stack development, API design, data pipelines, and analytics engineering to create scalable, interconnected solutions in fast-paced environments. I thrive where rapid integrations, evolving tech stacks, and data-driven decisions are the norm to deliver reliable systems with minimal oversight.</p>
                    <p>My projects span real-time dashboards, interactive analytics platforms, and transparency tools that all feature robust data ingestion, transformation, and intuitive UIs that enable faster insights and better decisions.</p>
                    <p>Passionate about the full data lifecycle, I design optimized pipelines that reduce cleanup overhead and accelerate analysis. Using Python, SQL, and modern tools, I transform diverse data sources into clean, modeled datasets ready for reporting, causal inference, or predictive modeling.</p>
                    <p>Always learning and adapting, I'm excited to bring this builder's mindset to teams solving complex problems with data and code.</p>
                </div>
            </div>
        </section>
    );
}

export default About;