import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { BsPrescription2 } from "react-icons/bs";
import {
    Button,
    Modal,
    Container,
    Row,
    Col,
} from "reactstrap";

const Pocket = () => {

    const [modal5, setModal5] = React.useState(false);
    const [modal6, setModal6] = React.useState(false);
    const [modal7, setModal7] = React.useState(false);


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
            <h6 className='text-danger'>out-of-pocket costs</h6>
            <h5><strong>While provincial/territorial health insurance plans cover most medically necessary services, there may be some out-of-pocket costs for certain services such as prescription drugs, dental care, and vision care.</strong></h5>
            <Container className='mt-5'>
                <Row className="text-center">
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-danger">
                                <FaRegEye />
                            </div>
                            <div className="description">
                                <Button className="btn-link" color="danger"
                                    onClick={toggleModal5}>
                                    Vision Care
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
                                            Vision Care
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Routine eye exams and corrective lenses are not covered under provincial/territorial health insurance plans. Some provinces and territories may provide coverage for eye exams for certain populations, such as children or seniors, but coverage for corrective lenses is generally not included.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-danger">
                                <TbDental />
                            </div>
                            <div className="description">
                                <Button className="btn-link" color="danger" onClick={toggleModal6}>
                                    Dental Care
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
                                            Dental Care
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Dental care is generally not covered under provincial/territorial health insurance plans, except for certain medically necessary procedures. Some provinces and territories offer dental coverage for children or low-income individuals, but coverage can vary widely.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-danger">
                                <BsPrescription2 />
                            </div>
                            <div className="description">
                                <Button className="btn-link" color="danger" onClick={toggleModal7}>
                                    Prescription Drugs
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
                                            Prescription Drugs
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>The coverage and fees for prescription drugs can vary depending on the province or territory. In some cases, there may be a deductible or co-pay required, while in other cases, prescription drugs may not be covered at all. Some provinces and territories have programs in place to provide coverage for certain prescription drugs, especially for low-income individuals and seniors.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h5 className='mt-5'><strong>Individuals can obtain private insurance to cover some of these services. Some employers may also offer extended health benefits that include coverage for prescription drugs, dental care, and vision care. In addition, some provinces and territories offer supplementary health insurance plans that provide additional coverage for these services, often at an additional cost.</strong></h5>
        </div>
    )
}

export default Pocket