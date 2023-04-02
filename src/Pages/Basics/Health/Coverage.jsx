import React from 'react';
import { FaCommentMedical } from "react-icons/fa";
import { BsHospital } from "react-icons/bs";
import { BsPrescription2 } from "react-icons/bs";
import { GiMedicalDrip } from "react-icons/gi";
import {
    Button,
    Modal,
    Container,
    Row,
    Col,
} from "reactstrap";

const Coverage = () => {

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
            <h5><strong>The coverage provided by the provincial/territorial health insurance plan in Canada can vary slightly from province to province, but generally includes essential medical services such as doctor's visits, hospitalization, prescription drugs, and medical procedures.</strong></h5>
            <Container className='mt-5'>
                <Row className="text-center">
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-danger">
                                <FaCommentMedical />
                            </div>
                            <div className="description">
                                <Button className="btn-link" color="danger"
                                    onClick={toggleModal5}>
                                    Doctor's Visits
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
                                            Doctor's Visits
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Doctor's visits are covered under the provincial/territorial health insurance plan, and patients can see a doctor or a specialist without being charged out-of-pocket expenses. This includes appointments with family physicians, specialists, and walk-in clinics.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-danger">
                                <BsHospital />
                            </div>
                            <div className="description">
                                <Button className="btn-link" color="danger" onClick={toggleModal6}>
                                    Hospitalization
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
                                            Hospitalization
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Hospitalization is also covered, and patients can be admitted to a hospital without incurring any costs. This includes emergency care, surgery, and other medical procedures that require hospitalization.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
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
                                        <p>Prescription drugs are covered under some provincial/territorial health insurance plans, but the level of coverage can vary depending on the province. Some provinces provide limited coverage for prescription drugs, while others offer more comprehensive coverage. It's important to note that certain drugs may not be covered under the provincial/territorial health insurance plan, and patients may be required to pay out-of-pocket expenses for those drugs.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-danger">
                                <GiMedicalDrip />
                            </div>
                            <div className="description">
                                <Button className="btn-link" color="danger" onClick={toggleModal4}>
                                    Medical Procedures
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
                                            Medical Procedures
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>Medical procedures, such as diagnostic tests, imaging, and surgeries, are generally covered under the provincial/territorial health insurance plan. Patients can receive these services without being charged out-of-pocket expenses.</p>
                                    </div>

                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h5 className='mt-5'><strong>It's important to note that while the provincial/territorial health insurance plan provides coverage for essential medical services, some services may not be fully covered. For example, certain medical procedures may require additional fees or costs, and patients may need to pay for those out-of-pocket or obtain private health insurance to cover those costs.</strong></h5>
        </div>
    )
}

export default Coverage