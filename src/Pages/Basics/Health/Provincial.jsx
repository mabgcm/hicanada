import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse';
import { GiCheckMark } from 'react-icons/gi';
import '../../../assets/css/index.css';
import ad from '../../../assets/img/gliko.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Coverage from './Coverage';

const Provincial = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);

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

    const iconstyle = {
        fontSize: '25px',
        color: 'red',
    }

    return (
        <>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2 className='text-dark'>Understanding Canada's Health Insurance System</h2>
                        <h4>In this section, we provide a comprehensive overview of Canada's health insurance system. Understanding how health insurance works in Canada is essential for newcomers to ensure they have access to the healthcare services they need. We will explore the key components, eligibility criteria, and benefits of Canada's health insurance system.</h4>
                        <h4>Let's dive into the details of Canada's health insurance coverage.</h4>
                    </div>

                    <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-5">
                            <div class="about-img">
                                <a href="https://866db8l7qkqcfw3dwfp9wc4l1u.hop.clickbank.net/?tid=gliko" target='_blank'><img src={ad} class="img-fluid" alt="Canada's diverse health system" /></a>

                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="tab-content">

                                <div class='overview'>

                                    <h5 class="d-flex align-items-start mt-3 bold600">Key Components of Canada's Health Insurance System:</h5>

                                    <div class="d-flex align-items-start mt-4">
                                        <GiCheckMark style={iconstyle} />
                                        <h4>Provincial and Territorial Coverage</h4>
                                    </div>
                                    <p class='d-flex align-items-start'>Canada's health insurance system is administered at the provincial and territorial levels. Each province and territory has its own health insurance plan, often referred to as a provincial health card. These plans cover necessary medical services, including doctor visits, hospital care, and some diagnostic tests.</p>

                                    <div class="d-flex align-items-center mt-4">
                                        <GiCheckMark style={iconstyle} />
                                        <h4>Universal Coverage</h4>
                                    </div>
                                    <p>One of the key principles of Canada's health insurance system is universal coverage. This means that all Canadian residents, including newcomers and immigrants with permanent residency or certain visa statuses, are eligible for health insurance coverage. Universal coverage ensures that everyone has access to necessary healthcare services without financial barriers.</p>

                                    <div class="d-flex align-items-center mt-4">
                                        <GiCheckMark style={iconstyle} />
                                        <h4>Eligibility Criteria</h4>
                                    </div>
                                    <p>Eligibility for health insurance coverage varies slightly between provinces and territories. Generally, newcomers are required to fulfill certain residency requirements, such as establishing their primary residence in a province or territory and having a valid immigration status. It's important to check the specific eligibility criteria of the province or territory where you reside.</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="info mt-4">
                            <div className="icon icon-danger">
                            </div>
                            <div className="description">
                                <Button
                                    className="btn-round"
                                    color="danger"
                                    onClick={toggleModal1}
                                >
                                    How to Apply
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
                                            Application for Provincial/Territorial Health Insurance
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>To apply for Provincial/Territorial Health Insurance, you must be a Canadian citizen, permanent resident, or have been granted refugee status in Canada. You must also be a resident of the province or territory in which you are applying for at least three months to be eligible for coverage.</p>
                                        <p>The application process for Provincial/Territorial Health Insurance varies by province or territory, but generally, you will need to provide the following information:</p>
                                        <ul>
                                            <li className='faq'><p>+ Proof of citizenship or immigration status</p></li>
                                            <li className='faq'><p>+ Proof of residency, such as a lease or utility bill</p></li>
                                            <li className='faq'><p>+ Social Insurance Number (SIN)</p></li>
                                            <li className='faq'><p>+ Any existing health insurance coverage</p></li>
                                        </ul>
                                        <p>It is important to note that some provinces or territories may require additional documentation, so it's best to check with the local health authority for specific requirements.</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h5 className='text-dark mt-5'> <strong>Where to Apply for Provincial/Territorial Health Insurance:</strong> </h5>
            <ul className='mt-3 mb-5'>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen1(!open1)}
                        aria-expanded={open1}
                        className="faq-q text-dark"
                    ><strong>Ontario</strong>
                    </a>
                    <Collapse in={open1}>
                        <div>
                            <p className='faq-a'>
                                You can apply for Ontario Health Insurance Plan (OHIP) by visiting a ServiceOntario centre or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen2(!open2)}
                        aria-expanded={open2}
                        className="faq-q text-dark"
                    ><strong>Quebec</strong>
                    </a>
                    <Collapse in={open2}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Quebec is called the Régie de l'assurance maladie du Québec (RAMQ), and you can apply by visiting a RAMQ office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen3(!open3)}
                        aria-expanded={open3}
                        className="faq-q text-dark"
                    ><strong>British Columbia</strong>
                    </a>
                    <Collapse in={open3}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in British Columbia is called the Medical Services Plan (MSP), and you can apply by visiting an Insurance Corporation of British Columbia (ICBC) driver licensing office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen4(!open4)}
                        aria-expanded={open4}
                        className="faq-q text-dark"
                    ><strong>Alberta</strong>
                    </a>
                    <Collapse in={open4}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Alberta is called Alberta Health Care Insurance Plan (AHCIP), and you can apply by visiting a registry agent office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen5(!open5)}
                        aria-expanded={open5}
                        className="faq-q text-dark"
                    ><strong>Manitoba</strong>
                    </a>
                    <Collapse in={open5}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Manitoba is called Manitoba Health, Seniors and Active Living, and you can apply by visiting a Manitoba Health, Seniors and Active Living office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen6(!open6)}
                        aria-expanded={open6}
                        className="faq-q text-dark"
                    ><strong>Saskatchewan</strong>
                    </a>
                    <Collapse in={open6}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Saskatchewan is called the Saskatchewan Health Card, and you can apply by visiting a Saskatchewan Health Card office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen7(!open7)}
                        aria-expanded={open7}
                        className="faq-q text-dark"
                    ><strong>Nova Scotia</strong>
                    </a>
                    <Collapse in={open7}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Nova Scotia is called the Nova Scotia Health Card, and you can apply by visiting a Service Nova Scotia centre or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen8(!open8)}
                        aria-expanded={open8}
                        className="faq-q text-dark"
                    ><strong>New Brunswick</strong>
                    </a>
                    <Collapse in={open8}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in New Brunswick is called Medicare, and you can apply by visiting a Service New Brunswick centre or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen9(!open9)}
                        aria-expanded={open9}
                        className="faq-q text-dark"
                    ><strong>Prince Edward Island</strong>
                    </a>
                    <Collapse in={open9}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Prince Edward Island is called the PEI Health Card, and you can apply by visiting a PEI Health Card office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
                <li className='faq mb-2'>
                    <a
                        onClick={() => setOpen10(!open10)}
                        aria-expanded={open10}
                        className="faq-q text-dark"
                    ><strong>Newfoundland and Labrador</strong>
                    </a>
                    <Collapse in={open10}>
                        <div>
                            <p className='faq-a'>
                                The health insurance plan in Newfoundland and Labrador is called the Newfoundland and Labrador Medical Care Plan (MCP), and you can apply by visiting a MCP office or applying online through their website.
                            </p>
                        </div>
                    </Collapse>
                </li>
            </ul>
            <Coverage />
        </>
    )
}

export default Provincial