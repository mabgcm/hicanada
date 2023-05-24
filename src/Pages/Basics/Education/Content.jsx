import React, { useEffect, useState } from 'react';
import '../../../assets/css/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Modinest from './System';
import { FaAccessibleIcon } from 'react-icons/fa';
import Schooling from './Schooling';

const Content = () => {

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

    const [activeDiv, setActiveDiv] = useState(null);

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
        <div>
            <div className="main mt-3">

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
                                            <h6 className={isDivActive('div1') ? 'text-light font-weight-bold' : ''}>Education System</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("2");
                                    }}
                                >
                                    <div style={getDivStyle('div2')}
                                        onClick={() => handleDivClick('div2')}
                                        className={`nav-link mb-3 show ${getDivClassName('div2')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div2') ? 'text-light font-weight-bold' : ''}>Schooling in Canada</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("3");
                                    }}
                                >
                                    <div style={getDivStyle('div3')}
                                        onClick={() => handleDivClick('div3')}
                                        className={`nav-link mb-3 show ${getDivClassName('div3')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div3') ? 'text-light font-weight-bold' : ''}>universities and colleges</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("4");
                                    }}
                                >
                                    <div style={getDivStyle('div4')}
                                        onClick={() => handleDivClick('div4')}
                                        className={`nav-link mb-3 show ${getDivClassName('div4')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div4') ? 'text-light font-weight-bold' : ''}>Education credentials</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("5");
                                    }}
                                >
                                    <div style={getDivStyle('div5')}
                                        onClick={() => handleDivClick('div5')}
                                        className={`nav-link mb-3 show ${getDivClassName('div5')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div5') ? 'text-light font-weight-bold' : ''}>Financial assistance</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("6");
                                    }}
                                >
                                    <div style={getDivStyle('div6')}
                                        onClick={() => handleDivClick('div6')}
                                        className={`nav-link mb-3 show ${getDivClassName('div6')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div6') ? 'text-light font-weight-bold' : ''}>Education for Immigrants</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("7");
                                    }}
                                >
                                    <div style={getDivStyle('div7')}
                                        onClick={() => handleDivClick('div7')}
                                        className={`nav-link mb-3 show ${getDivClassName('div7')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div7') ? 'text-light font-weight-bold' : ''}>Visas and Study Permits</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem className="nav-item col-sm-12 col-md-3">
                                <NavLink
                                    // className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("8");
                                    }}
                                >
                                    <div style={getDivStyle('div8')}
                                        onClick={() => handleDivClick('div8')}
                                        className={`nav-link mb-3 show ${getDivClassName('div8')}`}>
                                        <a className="nav-link show">
                                            <h6 className={isDivActive('div8') ? 'text-light font-weight-bold' : ''}>Education Policies & Regulations</h6>
                                        </a>
                                    </div>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </div>
                </div>
                <TabContent activeTab={activeTab} className="px-4">

                    <TabPane tabId="1">
                        <Modinest />
                    </TabPane>

                    <TabPane tabId="2">
                        <Schooling />
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default Content