import React from 'react';
import {
    Button,
    Modal,
    Container,
    Row,
    Col,
} from "reactstrap";
import { RiMapPinUserLine } from 'react-icons/ri'
import { MdEngineering } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";

import YouTube from 'react-youtube';

const Permanent = () => {

    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    const [modal3, setModal3] = React.useState(false);

    const toggleModal1 = () => {
        setModal1(!modal1);
    };
    const toggleModal2 = () => {
        setModal2(!modal2);
    };
    const toggleModal3 = () => {
        setModal3(!modal3);
    };

    const opts = {
        height: '250',
        width: '400',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
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
        </div>
    )
}

export default Permanent