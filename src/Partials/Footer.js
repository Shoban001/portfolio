import React, { useEffect, useState } from "react";  
import { Link } from "react-router-dom";
import twitterIcon from '../assets/images/twiiterIcon.svg';
import githubIcon from '../assets/images/githubIcon.svg';
import linkedinIcon from '../assets/images/linkedinIcon.svg';
import instagramIcon from '../assets/images/instagramIcon.svg';

const Footer = () => {
    const [year, setYear] = useState('2024');
    useEffect(()=>{
        const date1 = new Date();
        setYear(date1.getUTCFullYear())
    },[])
    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="row justify-content-between align-items-center row-cols-md-3 row-cols-1">
                        <div className="col text-center">Designed and Developed by <span className="primary-color d-md-inline d-block">Shoban Babu G</span></div>
                        <div className="col text-center mt-md-0 mt-3">Copyright &copy; {year}</div>
                        <div className="col">
                            <div className="d-flex justify-content-md-end justify-content-center footer-contact-me mt-md-0 mt-3">
                                <Link to='https://www.linkedin.com/in/shoban-babu-440b16259/'><img src={linkedinIcon} alt="LinkedIn" /></Link>
                                <Link to='https://github.com/Shoban001'><img src={githubIcon} alt="Github" /></Link>
                                <Link to='https://x.com/Uername232323'><img src={twitterIcon} alt="Twitter" /></Link>
                                <Link to='https://www.instagram.com/shoban_babu_g/'><img src={instagramIcon} alt="Instagram" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;