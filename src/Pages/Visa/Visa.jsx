
import React, { useEffect, useState } from 'react';
import '../../assets/css/paper-kit.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

// reactstrap components
import {
    NavItem,
    Nav,
    TabContent,
    TabPane,
} from "reactstrap";
import { NavLink } from 'react-router-dom';

// core components
import VisaHeader from "./VisaHeader.jsx";
import Irregular from "./Irregular";
import Asylum from "./Asylum";
import Refugee from "./Refugee";
import Temporary from "./Temporary";
import Permanent from "./Permanent";


function LandingPage() {
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
            height: '100px',
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
                <title>Visa and Status Guide for Newcomers to Canada | HiCanada</title>
                <meta name="description" content="Get valuable tips and information about visas and status for newcomers to Canada. Learn about the immigration process, visa types, work permits, and more." />
                <meta name="keywords" content="newcomers to Canada, visa guide, immigration process, visa types, work permits, status in Canada" />
                <meta property="og:title" content="Visa and Status Guide for Newcomers to Canada | HiCanada" />
                <meta property="og:description" content="Get valuable tips and information about visas and status for newcomers to Canada. Learn about the immigration process, visa types, work permits, and more." />

            </Helmet>
            <VisaHeader />
            <div className="main mt-3">
                <div className=" text-center px-5 mb-4">
                    <p><strong>The legal status of newcomers can have a significant impact on their rights, access to services, and ability to work and travel. If you are a newcomer to Canada, it's important to understand your legal status and the conditions that apply to your stay in the country.</strong></p>
                </div>
                <div className="nav-tabs-navigation">
                    <div className="container nav-tabs-wrapper" data-aos="fade-up">
                        <Nav className="nav nav-tabs row gy-4 d-flex" id="tabs" role="tablist" tabs>
                            <NavItem className="nav-item col-12 col-sm">
                                <NavLink
                                    onClick={() => {
                                        toggle("1");
                                    }}
                                >
                                    <div style={getDivStyle('div1')}
                                        onClick={() => handleDivClick('div1')}
                                        className={`nav-link mb-3 show ${getDivClassName('div1')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h5 className={isDivActive('div1') ? 'text-light font-weight-bold' : ''}>Permanent Residents</h5>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-12 col-sm">
                                <NavLink
                                    onClick={() => {
                                        toggle("2");
                                    }}
                                >
                                    <div style={getDivStyle('div2')}
                                        onClick={() => handleDivClick('div2')}
                                        className={`nav-link mb-3 show ${getDivClassName('div2')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h5 className={isDivActive('div2') ? 'text-light font-weight-bold' : ''}>Temporary Residents</h5>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-12 col-sm">
                                <NavLink
                                    onClick={() => {
                                        toggle("3");
                                    }}
                                >
                                    <div style={getDivStyle('div3')}
                                        onClick={() => handleDivClick('div3')}
                                        className={`nav-link mb-3 show ${getDivClassName('div3')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h5 className={isDivActive('div3') ? 'text-light font-weight-bold' : ''}>Refugees</h5>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-12 col-sm">
                                <NavLink
                                    onClick={() => {
                                        toggle("4");
                                    }}
                                >
                                    <div style={getDivStyle('div4')}
                                        onClick={() => handleDivClick('div4')}
                                        className={`nav-link mb-3 show ${getDivClassName('div4')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h5 className={isDivActive('div4') ? 'text-light font-weight-bold' : ''}>Asylum Seekers</h5>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-12 col-sm">
                                <NavLink
                                    onClick={() => {
                                        toggle("5");
                                    }}
                                >
                                    <div style={getDivStyle('div5')}
                                        onClick={() => handleDivClick('div5')}
                                        className={`nav-link mb-3 show ${getDivClassName('div5')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h5 className={isDivActive('div5') ? 'text-light font-weight-bold' : ''}>Irregular Migrants</h5>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                        </Nav>
                    </div>
                </div>
                <TabContent activeTab={activeTab} className="px-4">

                    <TabPane tabId="1">
                        <Permanent />
                    </TabPane>

                    <TabPane tabId="2">
                        <Temporary />
                    </TabPane>

                    <TabPane tabId="3">
                        <Refugee />
                    </TabPane>

                    <TabPane tabId="4">
                        <Asylum />
                    </TabPane>

                    <TabPane tabId="5">
                        <Irregular />
                    </TabPane>

                </TabContent>
            </div>
        </>
    );
}

export default LandingPage;
