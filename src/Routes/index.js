import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from '../Components/Home';
import About from '../Components/About';
import Project from '../Components/Project';
import Resume from '../Components/Resume';
import Loader from "../Layout/Loader";

const Routers = () => {
    const routeData = [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/project', element: <Project /> },
        { path: '/resume', element: <Resume /> },
        {path:'/loader', element:<Loader/>}
    ];

    return(
        <React.Fragment>
            <Routes>
                <Route element={<Layout/>}>
                 {routeData?.map((data, i) => (
                        <Route path={data?.path} element={data?.element} key={i} />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default Routers;