import UniversityofArkansasLogo from '/src/assets/university_of_arkansas_sam_m_walton_college_of_business_logo.jpg'
import ExencialWealthAdvisorsLogo from '/src/assets/exencial-wealth-advisors-logo.jpg'
import CryptoMiningEngineerLogo from '/src/assets/crypto-mining-engineer-logo.png'
import ShellBlackLogo from '/src/assets/shellblack_com_llc_logo.jpg'
import AGMSLogo from '/src/assets/agms-logo.png';
import FullStackDeveloperLogo from '/src/assets/full-stack-developer-logo.jpg';
import FrontendDeveloperLogo from '/src/assets/frontend-developer-logo.png';

const Experience = () => {
    const myWorkExperience = [
        {
            company: 'University of Arkansas',
            companyLogo: UniversityofArkansasLogo,
            role: 'Salesforce Administrator & Data Analyst II',
            startDate: 'Sep 2023',
            endDate: 'Present',
            id: 1
        },
        {
            company: 'Exencial Wealth Advisors',
            companyLogo: ExencialWealthAdvisorsLogo,
            role: 'Project Manager & Sr. Salesforce Administrator',
            startDate: 'Jun 2021',
            endDate: 'Jan 2023',
            id: 2
        },
        {
            company: 'Exencial Wealth Advisors',
            companyLogo: ExencialWealthAdvisorsLogo,
            role: 'Platform Services Developer',
            startDate: 'Feb 2020',
            endDate: 'May 2021',
            id: 3
        },
        {
            company: 'Exencial Wealth Advisors',
            companyLogo: ExencialWealthAdvisorsLogo,
            role: 'Full Stack Web Developer',
            startDate: 'Feb 2019',
            endDate: 'Jan 2020',
            id: 4
        },
        {
            company: 'Small-Scale Cryptocurrency Mining Farm',
            companyLogo: CryptoMiningEngineerLogo,
            role: 'Crypto Mining Engineer',
            startDate: 'Oct 2017',
            endDate: 'Jan 2019',
            id: 5
        },
        {
            company: 'ShellBlack.com',
            companyLogo: ShellBlackLogo,
            role: 'Salesforce Consulant: Financial Services',
            startDate: 'Jun 2017',
            endDate: 'Sep 2017',
            id: 6
        },
        {
            company: 'AGMS Payment Processing',
            companyLogo: AGMSLogo,
            role: 'Full Stack Engineer',
            startDate: 'Oct 2013',
            endDate: 'Oct 2016',
            id: 7
        },
        {
            company: 'Independent Contractor',
            companyLogo: FullStackDeveloperLogo,
            role: 'Full Stack Developer',
            startDate: 'Apr 2012',
            endDate: 'Oct 2013',
            id: 8
        },
        {
            company: 'Independent Contractor',
            companyLogo: FrontendDeveloperLogo,
            role: 'Frontend Developer',
            startDate: 'May 2011',
            endDate: 'Apr 2012',
            id: 9
        },
    ];

    const workExperience = myWorkExperience.map(experience =>
        <li key={experience.id}>
            <img src={experience.companyLogo} className="work-experience-company-logo" />
            <div className="work-experience-inner-wrapper">
                <div className="work-experience-company-and-date">
                    <p className="work-experience-company">{experience.company}</p>
                    <p className="work-experience-dates">{experience.startDate} - {experience.endDate}</p>
                </div>
                <p className="work-experience-role">{experience.role}</p>
            </div>
        </li>
    );

    return (
        <section id="experience">
            <h3 className="work-experience-headline">Work Experience</h3>
            <ul className="work-experience">{workExperience}</ul>
        </section>
    );
}

export default Experience;