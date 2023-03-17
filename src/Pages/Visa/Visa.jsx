
import React from "react";
import '../../assets/css/paper-kit.css'

// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
} from "reactstrap";

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


    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };


    return (
        <>
            <VisaHeader />
            <div className="main mt-3">
                <div className=" text-center px-5 mb-4">
                    <p><strong>The legal status of newcomers can have a significant impact on their rights, access to services, and ability to work and travel. If you are a newcomer to Canada, it's important to understand your legal status and the conditions that apply to your stay in the country.</strong></p>
                </div>
                <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                        <Nav id="tabs" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={activeTab === "1" ? "active" : ""}
                                    onClick={() => {
                                        toggle("1");
                                    }}
                                >
                                    <h6 style={{ cursor: 'pointer' }}>Permanent Residents</h6>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === "2" ? "active" : ""}
                                    onClick={() => {
                                        toggle("2");
                                    }}
                                >
                                    <h6 style={{ cursor: 'pointer' }}>Temporary Residents</h6>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === "3" ? "active" : ""}
                                    onClick={() => {
                                        toggle("3");
                                    }}
                                >
                                    <h6 style={{ cursor: 'pointer' }}>Refugees</h6>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === "4" ? "active" : ""}
                                    onClick={() => {
                                        toggle("4");
                                    }}
                                >
                                    <h6 style={{ cursor: 'pointer' }}>Asylum Seekers</h6>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === "5" ? "active" : ""}
                                    onClick={() => {
                                        toggle("5");
                                    }}
                                >
                                    <h6 style={{ cursor: 'pointer' }}>Irregular Migrants</h6>
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
