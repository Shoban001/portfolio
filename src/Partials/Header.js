import React, { useState } from "react";
import hamburger from '../assets/images/hamburger.svg';
import { NavLink } from "react-router-dom";
import resumepdf from '../assets/files/ShobanResume.pdf';

const Header = () => {
    const [show, setShow] = useState(false);
    const dispOptions = () => {
        setShow(!show);
    }

    const onButtonClick = async () => {
        await fetch(resumepdf).then((response) => {
                response.blob().then((blob) => {
                    const fileURL =
                        window.URL.createObjectURL(blob);    
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = "ShobanResume.pdf";
                    alink.click();
                });
            });
    };

    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mobile-view-header position-relative d-md-none d-block">
                            <div className="header-hamburger" onClick={dispOptions}><img src={hamburger} alt="ham-icon" /></div>
                            {show && <div className="header-list-options position-absolute text-center">
                                <ul className="mobile-header-options">
                                    <li><NavLink to='/' activeClassname='nav-active'>Home</NavLink></li>
                                    <li><NavLink to='/about' activeClassname='nav-active'>About</NavLink></li>
                                    <li><NavLink to='/project' activeClassname='nav-active'>Project</NavLink></li>
                                    <li><NavLink to='/resume' activeClassname='nav-active'>Resume</NavLink></li>
                                </ul>
                            </div>}
                        </div>
                        <div className="logo d-flex align-itmes-center"><NavLink to=''>Shoban Babu</NavLink></div>
                        <ul className="d-md-flex header-options align-items-center d-none">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/project'>Project</NavLink></li>
                            <li><NavLink to='/resume'>Resume</NavLink></li>
                        </ul>
                        <div className="header-contact-link"><button onClick={onButtonClick}>Download CV</button></div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;