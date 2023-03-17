import React from 'react';
import { GiBackpack } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { FaUserShield } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
    Button,
    Modal,
    Container,
    Row,
    Col,
} from "reactstrap";

const Temporary = () => {

    const [modal4, setModal4] = React.useState(false);
    const [modal5, setModal5] = React.useState(false);
    const [modal6, setModal6] = React.useState(false);
    const [modal7, setModal7] = React.useState(false);

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

    return (
        <div>
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
                                <Modal isOpen={modal5} toggle={toggleModal5}>
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

        </div>
    )
}

export default Temporary