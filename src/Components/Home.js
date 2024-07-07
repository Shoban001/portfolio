import React from "react";
import User from '../assets/images/shobanbabug.png';
import reactIcon from '../assets/images/reactIcon.svg';
import nextjsIcon from '../assets/images/nextjsIcon.png';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import GithubIcon from '../assets/images/githubIcon.svg';
import InstagramIcon from '../assets/images/instagramIcon.svg';
import linkedInIcon from '../assets/images/linkedinIcon.svg';
import ImgBanner from '../assets/images/imageDeveloper.jpg';
import twitterIcon from '../assets/images/twiiterIcon.svg';

const Home = () => {
    const bounds = { top: 100, left: 500, right: 100, bottom: 300 }

    return (
        <React.Fragment>
            <section className="home-page">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col d-flex align-items-center">
                            <div className="left-section-container">
                                <div className="home-glad mb-4">I'M GLAD YOU'RE HERE</div>
                                <h1 className="home-content">Hi, <span className="home-hi-emoji">👋</span>  I'm <span>Shoban Babu</span></h1>
                                <div className="carrer-position mt-3"><Typewriter words={['Application Developer', 'Front-End Developer']} cursor={true} loop={true} /></div>
                                <p className="mt-4">I'm Shoban Babu G, a passionate Software Engineer with 1 years of experience in React JS and Next JS. I specialize in Front-end development, and I'm dedicated to creating innovative and efficient solutions to complex problems.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="right-section-container d-flex justify-content-end position-relative">
                                <div className="software-engineer-photo"><img src={User} alt="shoban-image" /></div>
                                <div className="react-icon-container icons position-absolute"><img src={reactIcon} alt="React" /></div>
                                <div className="next-icon-container icons position-absolute"><img src={nextjsIcon} alt="Next JS" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-myself">
                <div className="container">
                    <div className="row row-cols-md-2 row-cols-1">
                        <div className="col d-flex align-itmes-center flex-column">
                            <h3 className="text-center">LET ME <span className="primary-color">INTRODUCE</span> MYSELF</h3>
                            <div className="mt-md-5 mt-sm-4">
                                <div className="">I fell in love with programming and developing applications.</div>
                                <div className="mt-2">I am fluent in classics like <span className="primary-color">Javascript, React JS and Next JS.</span></div>
                                <div className="mt-2">My field of Interest's are building new  <span className="primary-color">Web Technologies and Products</span> and also in areas related to <span className="primary-color">Cyber Security</span>.</div>
                                <div className="mt-2">
                                    Whenever possible, I also apply my passion for developing products with <span className="primary-color">Node.js</span> and Modern Javascript Library and Frameworks  like <span className="primary-color">Express JS and Angular JS</span>.
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="about-img"><img src={ImgBanner} alt="Image Banner" /></div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                    <div className="home-find-me">
                        <div className="topic text-center">FIND ME ON</div>
                        <div className="d-flex find-me-links mt-2">
                            <Link to='https://www.linkedin.com/in/shoban-babu-440b16259/'><img src={linkedInIcon} alt="LinkedIn" /></Link>
                            <Link to='https://github.com/Shoban001'><img src={GithubIcon} alt="Github" /></Link>
                            <Link to='https://www.instagram.com/shoban_babu_g/'><img src={InstagramIcon} alt="Instagram" /></Link>
                            <Link to='https://x.com/Uername232323'><img src={twitterIcon} alt="" /></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;