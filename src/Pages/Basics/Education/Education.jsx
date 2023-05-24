import React from 'react';
import '../../../assets/css/paper-kit.css'

// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
} from "reactstrap";
import EduHeader from './EduHeader';
import Content from './Content';
import { Helmet } from 'react-helmet';

const Education = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });


    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <>
            <Helmet>
                <title>Newcomer's Education Guide for Canada | HiCanada</title>
                <meta name="description" content="Discover valuable tips for education in Canada. Explore schools, universities, programs, scholarships, admission requirements, and student resources for newcomers." />
                <meta name="keywords" content="newcomers to Canada, education guide, education in Canada, educational opportunities, schools, universities, language programs, scholarships, admission requirements, student visa, academic resources, cultural integration, academic success, studying in Canada, higher education, academic programs, student support, student services, career development, international students, tuition fees, academic institutions, learning opportunities, educational pathways, educational system, student life, educational policies, educational consultants, student resources" />
                <meta property="og:title" content="Newcomer's Education Guide for Canada | HiCanada" />
                <meta property="og:description" content="Discover valuable tips and information about education for newcomers to Canada. Explore educational opportunities, schools, universities, language programs, scholarships, admission requirements, student visa, academic resources, cultural integration, academic success." />


            </Helmet>
            <EduHeader />
            <Content />
        </>
    )
}

export default Education