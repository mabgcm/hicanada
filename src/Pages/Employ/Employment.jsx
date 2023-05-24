import React, { useEffect, useState } from 'react';
import '../../assets/css/paper-kit.css';
import '../../assets/css/index.css';

// reactstrap components
import AOS from 'aos';
import 'aos/dist/aos.css';

// reactstrap components
import {
    NavItem,
    Nav,
    TabContent,
    TabPane,
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import EmploymentHeader from './EmploymentHeader';
import { Helmet } from 'react-helmet';

const Employment = () => {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    useEffect(() => {
        AOS.init({
            // Global settings
            duration: 800,  // Duration of animations
            once: true,     // Only animate elements once

            // Customize animations per element
            offset: 120,    // Offset (in pixels) from the original trigger point
            delay: 100,     // Delay animation (in milliseconds)
            easing: 'ease', // Easing function
        });

        // Optional: Refresh AOS when your React component updates
        AOS.refresh();
    }, []);

    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const [activeDiv, setActiveDiv] = useState('div1');

    const handleDivClick = (divId) => {
        setActiveDiv(divId);
    };

    const isDivActive = (divId) => {
        return divId === activeDiv;
    };

    const getDivClassName = (divId) => {
        return isDivActive(divId) ? 'active-div' : 'inactive-div';
    };

    const getDivStyle = (divId) => {
        const baseStyle = {
            height: '80px',
            backgroundColor: 'lightgrey',
            padding: '10px',
            cursor: 'pointer',
        };

        if (isDivActive(divId)) {
            return {
                ...baseStyle,
                backgroundColor: '#F5593D',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            };
        }

        return baseStyle;
    };

    return (
        <>
            <Helmet>
                <title>Newcomer's Guide to Employment and Career in Canada | HiCanada</title>
                <meta name="description" content="Discover essential tips for employment and career success in Canada. Explore job search, resumes, interviews, work permits, professional development, and more." />
                <meta name="keywords" content="employment in Canada, career in Canada, newcomer's guide, job search, resume writing, interviews, work permits, professional development, career tips, job opportunities, job market, employment resources, job search strategies, work culture, job hunting, work-life balance, career growth, networking, job skills, job success, Canadian work environment" />
                <meta property="og:title" content="Newcomer's Guide to Employment and Career in Canada | HiCanada" />
                <meta property="og:description" content="Discover essential tips for employment and career success in Canada. Explore job search, resumes, interviews, work permits, professional development, and more." />

            </Helmet>
            <EmploymentHeader />
        </>
    )
}

export default Employment