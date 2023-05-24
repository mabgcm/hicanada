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
import TransportHeader from './TransportHeader';
import { Helmet } from 'react-helmet';

const Transport = () => {

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
                <title>Newcomer's Guide to Transportation in Canada | HiCanada</title>
                <meta name="description" content="Discover essential tips for transportation in Canada. Explore public transport, in-city options, driving, cycling, car buying, renting, and travel resources for newcomers." />
                <meta name="keywords" content="transportation in Canada, newcomer's guide, public transportation, in-city transport, driving, cycling, car buying, car renting, travel resources, transportation tips, getting around, transportation options, transportation services, transportation infrastructure, travel in Canada, transportation guide, transportation for newcomers, transportation regulations, city buses, subway systems, taxis, ridesharing, car-sharing, car insurance, traffic rules, road safety, road trips, driver's license, traffic signs, parking, car maintenance, car rental services" />
                <meta property="og:title" content="Newcomer's Guide to Transportation in Canada | HiCanada" />
                <meta property="og:description" content="Discover essential tips for transportation in Canada. Explore public transport, in-city options, driving, cycling, car buying, renting, and travel resources for newcomers." />

            </Helmet>
            <TransportHeader />
        </>
    )
}

export default Transport