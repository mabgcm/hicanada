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
import HealthHeader from './HealthHeader';
import Overview from './Overview';
import Provincial from './Provincial';
import Coverage from './Coverage';
import Pocket from './Pocket';
import Emergency from './Emergency';
import Family from './Family';
import Mental from './Mental';
import Multilingual from './Multilingual';

const Health = () => {

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
            <HealthHeader />
            <div className="main mt-3">
                <h5 className="text-center px-5 mb-4 mt-2">
                    <strong>Did you know that Canada provides universal access to medical services to all residents, regardless of their legal status? From preventive care to emergency care, the healthcare services offered are designed to cater to everyone's needs. However, there are still some important details you need to know about healthcare coverage in Canada. Keep reading to find out more!</strong>
                </h5>
                <div className="nav-tabs-navigation">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-xl-2 ">
                            <div className="nav-tabs-wrapper health-pills">
                                <Nav className="px-3" id="tabs" role="tablist" variant="pills" >
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "1" ? "active" : ""}
                                            onClick={() => {
                                                toggle("1");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Overview</h6>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "2" ? "active" : ""}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Provincial Insurance</h6>
                                        </NavLink>
                                    </NavItem >
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "3" ? "active" : ""}
                                            onClick={() => {
                                                toggle("3");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Coverage</h6>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "4" ? "active" : ""}
                                            onClick={() => {
                                                toggle("4");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Out-of-pocket Costs</h6>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "5" ? "active" : ""}
                                            onClick={() => {
                                                toggle("5");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Emergency Care</h6>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "6" ? "active" : ""}
                                            onClick={() => {
                                                toggle("6");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Family Doctor</h6>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "7" ? "active" : ""}
                                            onClick={() => {
                                                toggle("7");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Mental Health</h6>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className='navpill'>
                                        <NavLink
                                            className={activeTab === "7" ? "active" : ""}
                                            onClick={() => {
                                                toggle("8");
                                            }}
                                        >
                                            <h6 style={{ cursor: 'pointer', color: '#F33816', transition: 'color 0.2s ease-in-out' }} onMouseOver={e => e.target.style.color = '#DF2402'}
                                                onMouseOut={e => e.target.style.color = '#F33816'}>Multilingual Services</h6>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-xl-10 health-data">
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
                                    <Mental />
                                </TabPane>

                                <TabPane tabId="8">
                                    <Multilingual />
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