import { useState } from 'react';

const About = (props) => {
    return (
        <section id="about">
            <h1 className="title">Hi, I'm Jason</h1>
            <h2 className="subtitle">Analytics Engineer & Data Scientist building data systems and insights.</h2>
            <div className="about-text">
                <p>I build and ship production-grade data solutions that turn raw data into actionable insights and predictive models with full ownership from data collection through deployment.
                    <span onClick={props.showAboutSection} className={`about-read-more-link ${props.isAboutSectionVisible ? '' : 'visible'}`}>Read more</span>
                </p>
                <div className={`about-read-more ${props.isAboutSectionVisible ? 'visible' : ''}`}>
                    <p>As a Data Analyst turned Analytics Engineer and Data Scientist, I combine strong data engineering skills with machine learning and statistical analysis to deliver scalable, end-to-end analytics systems. I thrive in fast-paced environments where I can design robust data pipelines, develop interactive dashboards, and build predictive models that drive real business impact.</p>
                    <p>My projects include interactive workforce analytics platforms, government transparency tools, and sports performance dashboards. These feature robust data ingestion, transformations, time series analysis, forecasting, and intuitive visualizations that enable faster and better-informed decisions.</p>
                    <p>Passionate about the full data lifecycle, I specialize in transforming messy, complex datasets into clean, reliable, and modeling-ready data using Python, SQL, Pandas, and modern tooling. I am always expanding my expertise in machine learning and predictive analytics.</p>
                    <p>I'm excited to bring my builder mindset and technical versatility to a team focused on solving complex problems with data and intelligence.</p>
                </div>
            </div>
        </section>
    );
}

export default About;