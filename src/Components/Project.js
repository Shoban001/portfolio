import React from "react";
import { Link } from "react-router-dom";
import resumeBuilderImg from '../assets/images/resumeBuildImg.jpg';
import chatbotImg from '../assets/images/chatbotAi.jpeg';

const Project = () => {
    return (
        <React.Fragment>
            <section className="project-section">
                <div className="container">
                    <h3 className="text-center">My Recent <span className="primary-color">Projects</span></h3>
                    <div className="row row-cols-md-2 row-cols-1">
                        <div className="col">
                            <div className="project-container-box p-3">
                                <div className="project-img mb-3"><img src={resumeBuilderImg} alt="" /></div>
                                <div className="project-content mb-4">
                                    <div className="title-project text-center mb-3">Resume Builder Website</div>
                                    The Resume Builder project aims to provide users with a user-friendly platform to create professional resumes effortlessly. It is designed to streamline the resume creation process by offering customizable templates, easy editing tools, and helpful tips to showcase the user's skills and experiences effectively.
                                </div>
                                <div className="project-link-btn text-center"><Link to='https://github.com/Shoban001/resume-builder'>Github</Link></div>
                            </div>
                        </div>
                        <div className="col mt-md-0 mt-3">
                            <div className="project-container-box p-3">
                                <div className="project-img mb-3"><img src={chatbotImg} alt="" /></div>
                                <div className="project-content mb-4">
                                    <div className="title-project text-center mb-3">AI Chatbot</div>
                                    The AI Chatbot project aims to develop an intelligent conversational agent using the OpenAI API. This chatbot will be capable of understanding natural language queries, providing contextually relevant responses, and engaging users in meaningful conversations. By leveraging OpenAI's cutting-edge language models, the chatbot will deliver a seamless and interactive user experience across various platforms.
                                </div>
                                <div className="project-link-btn text-center"><Link to=''>Github</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Project;