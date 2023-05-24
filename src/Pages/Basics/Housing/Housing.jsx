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
import HousingHeader from './HousingHeader';
import { Helmet } from 'react-helmet';

const Housing = () => {

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
                <title>Newcomer's Guide to Housing in Canada | HiCanada</title>
                <meta name="description" content="Explore essential tips for housing in Canada. Discover rental options, accommodation search, lease agreements, housing regulations, and affordable housing programs." />
                <meta name="keywords" content="housing in Canada, newcomer's guide, buying a house, renting an apartment, accommodation search, lease agreements, housing regulations, affordable housing programs, housing tips, housing for newcomers, housing resources, housing market, housing costs, housing assistance, housing affordability, housing search, housing information, housing guidelines, housing policies, housing support, housing agencies, housing advice, home buying process, rental market, mortgage options, down payment, mortgage rates, home inspection, rental agreement, tenant rights, housing grants, rental assistance, housing loans" />
                <meta property="og:title" content="Newcomer's Guide to Housing in Canada | HiCanada" />
                <meta property="og:description" content="Explore essential tips for housing in Canada. Discover rental options, accommodation search, lease agreements, housing regulations, and affordable housing programs." />

            </Helmet>
            <HousingHeader />
        </>
    )
}

export default Housing