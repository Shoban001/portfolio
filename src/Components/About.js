import React from "react";
import { Link } from "react-router-dom";
import ImgBanner from '../assets/images/aboutImgs.png';
import reactIcon from '../assets/images/reactIcon.svg';
import reduxIcon from '../assets/images/reduxIcon.svg';
import githubIcon from '../assets/images/githubIcon.svg';
import nextjsIcon from '../assets/images/nextjsIcon.png';
import cssIcon from '../assets/images/cssIcon.svg';
import jsIcon from '../assets/images/jsIcon.svg';
import nodeIcon from '../assets/images/nodeIcon.svg';
import javaIcon from '../assets/images/javaIcon.svg';
import Marquee from "react-fast-marquee";
import vsIcon from '../assets/images/vsIcon.png';
import postmanIcon from '../assets/images/postmanIcon.svg';
import slack from '../assets/images/slackIcon.svg';
import macIcon from '../assets/images/macIcon.svg';

const About = () => {
    return (
        <React.Fragment>
            <section className="about-section-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h3 className="text-center mb-md-5 mb-3 mt-4">Know Who <span className="primary-color">I'M</span></h3>
                            <div className="aboutme-content">
                                <div className="">Hi Everyone, I am <span className="primary-color">Shoban Babu G</span> from Chennai, TamilNadu, India.<br />
                                    I am currently employed as a Software Engineer at <Link className="primary-color" to=''>Ippopay</Link>.
                                    I have completed Integrated MSc (Computer Science) in Madras University.</div>
                                <div className="mt-4">
                                    Apart from coding, some other activities that I love to do!
                                    <ul className="about-my-activity mt-3">
                                        <li>Playing Games</li>
                                        <li>Travelling</li>
                                        <li>Watching Movies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="about-page-imag"><img src={ImgBanner} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="profession-section">
                <div className="container-fluid">
                    <h3 className="text-center mb-5">Professional <span className="primary-color">Skillset</span></h3>
                    <div className="row ">
                        <Marquee pauseOnHover={true} className="skill-marquee">
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={reactIcon} alt="react" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={reduxIcon} alt="redux" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={githubIcon} alt="github" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={nextjsIcon} alt="nextjs" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={cssIcon} alt="css" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={jsIcon} alt="js" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={nodeIcon} alt="node" /></div></div></div>
                            <div className="col"><div className="skill-imgs-container"><div className="skill-icons"><img src={javaIcon} alt="java" /></div></div></div>
                        </Marquee>
                    </div>
                </div>
            </section>
            <section className="tool-use-section">
                <div className="container">
                    <h3 className="text-center mb-md-5 mb-3">The <span className="primary-color">Tools</span> I Use</h3>
                    <div className="row row-cols-1 row-cols-md-4">
                        <div className="col"><div className="d-flex justify-content-center tool-img vscode"><img src={vsIcon} alt="" /></div></div>
                        <div className="col"><div className="d-flex justify-content-center tool-img postman"><img src={postmanIcon} alt="" /></div></div>
                        <div className="col"><div className="d-flex justify-content-center tool-img"><img src={macIcon} alt="" /></div></div>
                        <div className="col"><div className="d-flex justify-content-center tool-img"><img src={slack} alt="" /></div></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About;