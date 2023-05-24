import React, { useEffect, useState } from 'react';
import '../../../assets/css/paper-kit.css';
import '../../../assets/css/index.css';

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

import HealthHeader from './HealthHeader';
import Overview from './Overview';
import Provincial from './Provincial';
import Coverage from './Coverage';
import Pocket from './Pocket';
import Emergency from './Emergency';
import Family from './Family';
import Mental from './Mental';
import Walkin from './Walkin';
import { Helmet } from 'react-helmet';

const Health = () => {

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
                <title>Newcomer's Healthcare Guide for Canada | HiCanada</title>
                <meta name="description" content="Essential healthcare tips and information for newcomers to Canada. Discover healthcare services, insurance, finding doctors, and accessing medical facilities." />
                <meta name="keywords" content="Healthcare Canada, Canadian healthcare system, Healthcare services in Canada, Healthcare providers in Canada, Healthcare facilities in Canada, Healthcare insurance in Canada, Canadian healthcare policies, Access to healthcare in Canada, Public healthcare in Canada, Private healthcare in Canada, Healthcare professionals in Canada, Canadian healthcare resources, Healthcare costs in Canada, Healthcare coverage in Canada, Healthcare programs in Canada, Healthcare accessibility in Canada, Healthcare for newcomers in Canada, Healthcare regulations in Canada, Healthcare technology in Canada, Mental healthcare in Canada, Women's healthcare in Canada, Children's healthcare in Canada, Senior healthcare in Canada, Indigenous healthcare in Canada, Rural healthcare in Canada, Healthcare research in Canada, Healthcare innovations in Canada, Healthcare education in Canada, Healthcare workforce in Canada, Healthcare organizations in Canada." />
                <meta property="og:title" content="Newcomer's Healthcare Guide for Canada | HiCanada" />
                <meta property="og:description" content="Essential healthcare tips and information for newcomers to Canada. Discover healthcare services, insurance, finding doctors, and accessing medical facilities." />


            </Helmet>
            <HealthHeader />
            <div className="main mt-3">
                <div className="col-8 m-auto">
                    <h5 className="text-center px-5 mb-4 mt-2">
                        <strong>Are you a newcomer to Canada seeking information about the healthcare system? <br /> We're here to help you navigate the Canadian healthcare system and ensure you have access to the care you need. <br /> Whether you're looking to understand healthcare eligibility, find a doctor, or learn about health insurance options, this comprehensive guide is designed specifically for you.</strong>
                    </h5>
                </div>

                <div className="nav-tabs-navigation">
                    <div className="container nav-tabs-wrapper" data-aos="fade-up">

                        <Nav className="nav nav-tabs row gy-4 d-flex" id="tabs" role="tablist" tabs>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    onClick={() => {
                                        toggle("1");
                                    }}
                                >
                                    <div style={getDivStyle('div1')}
                                        onClick={() => handleDivClick('div1')}
                                        className={`nav-link mb-3 show ${getDivClassName('div1')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div1') ? 'text-light font-weight-bold' : ''}>Overview</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
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
                                            <h6 className={isDivActive('div2') ? 'text-light font-weight-bold' : ''}>Provincial Insurance</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
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
                                            <h6 className={isDivActive('div3') ? 'text-light font-weight-bold' : ''}>Coverage</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
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
                                            <h6 className={isDivActive('div4') ? 'text-light font-weight-bold' : ''}>Out-of-pocket Costs</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
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
                                            <h6 className={isDivActive('div5') ? 'text-light font-weight-bold' : ''}>Emergency Care</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    onClick={() => {
                                        toggle("6");
                                    }}
                                >
                                    <div style={getDivStyle('div6')}
                                        onClick={() => handleDivClick('div6')}
                                        className={`nav-link mb-3 show ${getDivClassName('div6')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h6 className={isDivActive('div6') ? 'text-light font-weight-bold' : ''}>Family Doctor</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    onClick={() => {
                                        toggle("7");
                                    }}
                                >
                                    <div style={getDivStyle('div7')}
                                        onClick={() => handleDivClick('div7')}
                                        className={`nav-link mb-3 show ${getDivClassName('div7')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h6 className={isDivActive('div7') ? 'text-light font-weight-bold' : ''}>Walk-in Clinics</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    onClick={() => {
                                        toggle("8");
                                    }}
                                >
                                    <div style={getDivStyle('div8')}
                                        onClick={() => handleDivClick('div8')}
                                        className={`nav-link mb-3 show ${getDivClassName('div8')}`}>
                                        <a className="nav-link show">
                                            {/* <FaAccessibleIcon style={{ color: 'red', fontSize: '24px' }} /> */}
                                            <h6 className={isDivActive('div8') ? 'text-light font-weight-bold' : ''}>Mental Health</h6>
                                        </a>
                                    </div>

                                </NavLink>
                            </NavItem>



                        </Nav>

                        <div className="col-12 health-data">
                            <TabContent activeTab={activeTab} className="px-4">

                                <TabPane tabId="1">
                                    <Overview />
                                </TabPane>

                                <TabPane tabId="2">
                                    <Provincial />
                                </TabPane>

                                <TabPane tabId="3">
                                    <Coverage />
                                </TabPane>

                                <TabPane tabId="4">
                                    <Pocket />
                                </TabPane>

                                <TabPane tabId="5">
                                    <Emergency />
                                </TabPane>

                                <TabPane tabId="6">
                                    <Family />
                                </TabPane>

                                <TabPane tabId="7">
                                    <Walkin />
                                </TabPane>

                                <TabPane tabId="8">
                                    <Mental />
                                </TabPane>

                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Health