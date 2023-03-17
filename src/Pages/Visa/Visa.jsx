
import React from "react";
import '../../assets/css/paper-kit.css'
import { RiMapPinUserLine } from 'react-icons/ri'
import { MdEngineering } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";
import { GiBackpack } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { FaUserShield } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import YouTube from 'react-youtube';
// reactstrap components
import {
    Button,
    Modal,
    Container,
    Row,
    Col,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Pagination,
    PaginationItem,
    PaginationLink,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import VisaHeader from "./VisaHeader.jsx";


function LandingPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });

    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    const [modal3, setModal3] = React.useState(false);
    const [modal4, setModal4] = React.useState(false);
    const [modal5, setModal5] = React.useState(false);
    const [modal6, setModal6] = React.useState(false);
    const [modal7, setModal7] = React.useState(false);
    const [modal8, setModal8] = React.useState(false);
    const [modal9, setModal9] = React.useState(false);
    const [modal10, setModal10] = React.useState(false);
    const toggleModal1 = () => {
        setModal1(!modal1);
    };
    const toggleModal2 = () => {
        setModal2(!modal2);
    };
    const toggleModal3 = () => {
        setModal3(!modal3);
    };
    const toggleModal4 = () => {
        setModal4(!modal4);
    };
    const toggleModal5 = () => {
        setModal5(!modal5);
    };
    const toggleModal6 = () => {
        setModal6(!modal6);
    };
    const toggleModal7 = () => {
        setModal7(!modal7);
    };
    const toggleModal8 = () => {
        setModal8(!modal8);
    };
    const toggleModal9 = () => {
        setModal9(!modal9);
    };
    const toggleModal10 = () => {
        setModal10(!modal10);
    };
    const [activeTab, setActiveTab] = React.useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    const opts = {
        height: '250',
        width: '400',
        playerVars: {
            autoplay: 0,
        },
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
                        <p>
                            <strong>Permanent residents are individuals who have been granted permission to live and work in Canada on a permanent basis. They have many of the same rights and responsibilities as Canadian citizens, including access to healthcare, education, and social services. Permanent residents may eventually apply for Canadian citizenship if they meet certain requirements.</strong>
                        </p>
                        <Container className="text-center">
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    {/* <h2 className="title">Let's talk product</h2> */}
                                    <h5 className="description mt-5">
                                        <strong>To become a permanent resident of Canada, individuals must apply through one of the immigration programs offered by the Canadian government. These programs include the <em>Federal Skilled Worker Program, the Canadian Experience Class,</em>   and the <em>Provincial Nominee Program,</em>  among others.</strong>
                                    </h5>
                                    <br />
                                    <Button
                                        className="btn-round"
                                        color="danger"
                                        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/understand-pr-status.html"
                                        target='_blank'
                                    >
                                        See Details
                                    </Button>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col md="4">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <FaDraftingCompass />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Federal Skilled Worker Program</h4>
                                            <p className="description">
                                                <strong>It is a Canadian immigration program designed to attract skilled foreign workers to obtain permanent residency.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger"
                                                onClick={toggleModal1}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal1} toggle={toggleModal1}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal1}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel1"
                                                    >
                                                        Federal Skilled Worker Program
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <YouTube videoId='d3IcoL7aWNc' opts={opts} />
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <MdEngineering />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Canadian Experience Class</h4>
                                            <p>
                                                <strong>A program that facilitates permanent residency for foreign workers who have already gained Canadian work experience.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal2}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal2} toggle={toggleModal2}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal2}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Canadian Experience Class (CEC)
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <ul>
                                                        <li>CEC is a program for skilled workers who want to become permanent residents of Canada.</li>
                                                        <li>To be eligible for CEC, candidates must have at least one year of skilled work experience in Canada, gained in the last three years before they apply, and meet language requirements.</li>
                                                        <li>CEC is one of the three federal immigration programs managed through the Express Entry system.</li>
                                                        <li>Candidates who meet the requirements and have enough points in the Express Entry system can apply for permanent residence.</li>
                                                        <li>CEC values Canadian work experience and language skills, and helps immigrants integrate into Canadian society.</li>
                                                        <li>CEC is an attractive option for international students and temporary foreign workers who want to stay in Canada permanently.</li>
                                                    </ul>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://youtu.be/ppjAfA63_ak'
                                                        target='_blank'
                                                    >
                                                        Watch More
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <RiMapPinUserLine />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Provincial Nominee Program</h4>
                                            <p>
                                                <strong>A Canadian immigration program that allows provinces and territories to nominate foreign workers for permanent residency.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal3}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal3} toggle={toggleModal3}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal3}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Provincial Nominee Program (PNP)
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>The Provincial Nominee Program (PNP) is a program where Canadian provinces and territories can choose people who want to move to Canada and settle in a specific area. Each province has its own rules and requirements, but generally people with skills or experience that are needed in a particular province can apply. If someone is chosen through the PNP, they can then apply for permanent residence in Canada. The PNP helps to meet the economic and demographic needs of different areas in Canada and promotes regional development.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://www.canadavisa.com/canada-pnp-finder-and-tracker.html'
                                                        target='_blank'
                                                    >
                                                        Check PNP Finder
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>

                    <TabPane tabId="2">
                        <p><strong>Temporary residents are individuals who are authorized to enter and remain in Canada for a limited period of time, such as tourists, international students, or temporary workers. Their legal status is tied to the specific conditions of their entry, such as the duration of their stay and their purpose for being in Canada.</strong></p>
                        <Container>
                            <Row className="text-center">
                                <Col md="3">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <GiBackpack />
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Visitors</h5>
                                            <p className="description">
                                                <strong>People who come to Canada for tourism, to visit family or friends, or for other temporary purposes.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger"
                                                onClick={toggleModal5}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal5} toggle={toggleModal1}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal5}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel1"
                                                    >
                                                        Visitor Visa
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    A Canadian visitor visa is a temporary entry document that allows people to come to Canada for tourism, visiting family or friends, or for other temporary purposes. It is also known as a temporary resident visa (TRV) and must be obtained before arriving in Canada. The application process involves submitting certain documents and meeting eligibility criteria.
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <GiBookshelf />
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Students</h5>
                                            <p>
                                                <strong>People who come to Canada to study at a Canadian educational institution.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal6}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal6} toggle={toggleModal6}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal6}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Student Visa
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    A Canadian student visa is a temporary entry document that allows international students to study in Canada. It is also known as a study permit and must be obtained before arriving in Canada. The application process involves submitting certain documents, such as proof of acceptance from a Canadian educational institution, and meeting eligibility criteria.
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://youtu.be/ppjAfA63_ak'
                                                        target='_blank'
                                                    >
                                                        Watch More
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <MdWork />
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Workers</h5>
                                            <p>
                                                <strong>People who come to Canada to work for a Canadian employer, for a temporary period.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal7}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal7} toggle={toggleModal7}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal7}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Work Visa
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>The Canadian work visa is a temporary entry document that allows people to work in Canada temporarily. It is also known as a work permit and must be obtained before arriving in Canada. The application process involves submitting certain documents, such as a job offer from a Canadian employer, and meeting eligibility criteria.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://www.canadavisa.com/canada-pnp-finder-and-tracker.html'
                                                        target='_blank'
                                                    >
                                                        Check PNP Finder
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="info">
                                        <div className="icon icon-danger">
                                            <FaUserShield />
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Refugee Claimants</h5>
                                            <p>
                                                <strong>People who are seeking refugee protection in Canada and awaiting the outcome of their claim.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal4}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal4} toggle={toggleModal4}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal4}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Refugee Status
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    To be a refugee claimant in Canada, you must be physically present in Canada and make a claim for refugee protection. This means that you must believe that you are at risk of persecution or have a well-founded fear of persecution in your home country. To make a claim, you can either present yourself at a Canadian port of entry or make a claim at an inland office. Once your claim is made, you will be given a hearing where you can present your case to the Immigration and Refugee Board of Canada.
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://www.canadavisa.com/canada-pnp-finder-and-tracker.html'
                                                        target='_blank'
                                                    >
                                                        Check PNP Finder
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>

                    <TabPane tabId="3">
                        <p><strong>Refugees are individuals who have been forced to flee their home country due to persecution, war, or violence. They are granted legal status in Canada if they are found to be a Convention refugee or a person in need of protection.</strong></p>
                        <Container>
                            <Row className="text-center">
                                <Col md="4">
                                    <div className="info mt-5">
                                        <div className="icon icon-danger">
                                            {/* <GiBackpack /> */}
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Government-Assisted Refugees (GARs)</h5>
                                            <p className="description">
                                                <strong>These are refugees who are referred to Canada by the United Nations Refugee Agency (UNHCR) or other designated referral organizations, and who are resettled in Canada with financial and other assistance from the Canadian government.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger"
                                                onClick={toggleModal8}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal8} toggle={toggleModal8}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal8}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel1"
                                                    >
                                                        Government-Assisted Refugees
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Government-Assisted Refugees (GARs) are refugees who are identified and referred to Canada by the United Nations Refugee Agency (UNHCR) or other designated referral organizations. Once they arrive in Canada, they receive financial and settlement support from the Canadian government for up to one year. This includes help with housing, food, and other basic necessities, as well as language training, employment assistance, and other services to help them integrate into Canadian society. GARs are usually the most vulnerable refugees, such as those who are at risk of persecution or violence, and who are unable to support themselves.</p>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="info mt-5">
                                        <div className="icon icon-danger">
                                            {/* <GiBookshelf /> */}
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Privately Sponsored Refugees (PSRs)</h5>
                                            <p>
                                                <strong>These are refugees who are sponsored by private individuals, groups or organizations, such as community or faith-based groups, and who are provided with financial and settlement support for their first year in Canada.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal9}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal9} toggle={toggleModal9}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal9}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Privately Sponsored Refugees
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Privately Sponsored Refugees (PSRs) are refugees who are sponsored by private individuals, groups, or organizations in Canada. Sponsors commit to providing financial, emotional, and settlement support to the refugees for up to one year, including help with housing, food, and other basic needs, as well as language training, employment assistance, and other services to help them integrate into Canadian society. PSRs are often family members or friends of the sponsors, but can also be sponsored by community or faith-based groups.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://youtu.be/ppjAfA63_ak'
                                                        target='_blank'
                                                    >
                                                        Watch More
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="info mt-5">
                                        <div className="icon icon-danger">
                                            {/* <MdWork /> */}
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Blended Visa Office-Referred Refugees (BVORs)</h5>
                                            <p>
                                                <strong>These refugees are referred to Canada by the UNHCR or other designated referral organizations, and resettled in Canada with both financial support from the Canadian government and sponsorship from private individuals, groups or organizations.</strong>
                                            </p>
                                            <Button className="btn-link" color="danger" onClick={toggleModal10}>
                                                Learn more
                                            </Button>
                                            <Modal isOpen={modal10} toggle={toggleModal10}>
                                                <div className="modal-header">
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={toggleModal10}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                    <h5
                                                        className="modal-title text-center"
                                                        id="exampleModalLabel2"
                                                    >
                                                        Blended Visa Office-Referred Refugees
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Blended Visa Office-Referred Refugees (BVORs) are refugees who are referred to Canada by the United Nations Refugee Agency (UNHCR) or other designated referral organizations, and who are resettled in Canada with both financial support from the Canadian government and sponsorship from private individuals, groups or organizations. The government provides up to six months of financial support, while the sponsor provides settlement support for up to one year. This category of refugees is intended to increase the number of refugees resettled in Canada and to encourage private sponsorship.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        type="button"
                                                        href='https://www.canadavisa.com/canada-pnp-finder-and-tracker.html'
                                                        target='_blank'
                                                    >
                                                        Check PNP Finder
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>

                    <TabPane tabId="4">
                        <p className="mb-4"><strong>Asylum seekers in Canada are people who have fled their home countries because they fear persecution or danger. They are seeking protection and refugee status in Canada so that they can live in safety and freedom. Asylum seekers may come from various countries around the world, and they may have experienced persecution due to their race, religion, political beliefs, nationality, or membership in a particular social group.</strong></p>

                        <p className="mb-4"><strong>When asylum seekers arrive in Canada, they can make a claim for refugee protection. This claim will be reviewed by the Immigration and Refugee Board of Canada to determine if the individual meets the criteria for refugee status. Asylum seekers can arrive in Canada through a regular port of entry or by crossing the border irregularly.</strong></p>

                        <p className="mb-4"><strong>Canada has a long tradition of providing refuge to people who are fleeing persecution or danger in their home countries. Asylum seekers in Canada have access to legal, medical, and social services while their claims are being processed. Canada also has programs to help refugees settle in their new communities and to integrate into Canadian society.</strong></p>
                        <Container className="mb-5">
                            <Row>
                                <Col md='4' className="text-center my-auto" >
                                    <Button
                                        className="btn-round"
                                        color="danger"
                                        href="https://youtu.be/XpJ9gkqZLzU"
                                        target='_blank'
                                    >
                                        How to Claim
                                    </Button>
                                </Col>
                                <Col md='4' className="text-center" >
                                    <h6>watch more about Refugee Criteria</h6>
                                    <nav aria-label="Page navigation example"  >
                                        <Pagination style={{ display: 'flex', justifyContent: 'center' }}>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="https://youtu.be/N1zCRD5j6cg"
                                                    id="video1"
                                                    target='_blank'

                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="bottom"
                                                target="video1"
                                            >
                                                Refugee Status Determination (RSD)
                                            </UncontrolledTooltip>

                                            <PaginationItem>
                                                <PaginationLink
                                                    href="https://youtu.be/HmaLaY-Q7EQ"
                                                    id="video2"
                                                    target='_blank'
                                                >
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="bottom"
                                                target="video2"
                                            >
                                                UNHCR Interview Preparation
                                            </UncontrolledTooltip>

                                            <PaginationItem>
                                                <PaginationLink
                                                    href="https://youtu.be/JLqEFmVMgWU"
                                                    id="video3"
                                                    target='_blank'
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <UncontrolledTooltip
                                                delay={0}
                                                placement="bottom"
                                                target="video3"
                                            >
                                                How to Launch an Appeal
                                            </UncontrolledTooltip>




                                        </Pagination>
                                    </nav>
                                </Col>
                                <Col md='4' className="text-center my-auto">
                                    <Button
                                        className="btn-round"
                                        color="danger"
                                        href="https://www.canada.ca/en/immigration-refugees-citizenship/news/2017/03/claiming_asylum_incanadawhathappens.html"
                                        target='_blank'
                                    >
                                        Procedure
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>

                    <TabPane tabId="5">
                        <p className="mb-4"><strong>Irregular immigrants in Canada are individuals who cross the Canadian border without following the regular immigration process or without proper documentation. They may enter Canada by crossing the border between ports of entry or by using false documents. Irregular immigrants are also commonly referred to as "irregular border crossers" or "undocumented migrants".</strong></p>

                        <p className="mb-4"><strong>Irregular immigration is not the same as refugee claimants who enter Canada at a regular port of entry and make a claim for asylum or refugee protection. While refugee claimants are following the regular immigration process, irregular immigrants are not, and may face legal consequences for crossing the border irregularly.</strong></p>

                        <p className="mb-4"><strong>Canada has policies and procedures in place for dealing with irregular immigration, including the provision of temporary accommodation and access to legal, medical, and social services. However, the issue of irregular immigration can be controversial, and there is ongoing debate around how best to manage this issue while still upholding Canada's immigration laws and policies.</strong></p>
                    </TabPane>

                </TabContent>
            </div>
        </>
    );
}

export default LandingPage;
