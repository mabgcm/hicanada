import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { GiCheckMark } from 'react-icons/gi';
import { Button } from 'reactstrap';
import '../../../assets/css/index.css';
import ad from '../../../assets/img/livpur.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overview = () => {
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
            <div className='w-100'>
                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <h2 className='text-dark'>Welcome to Canada's Healthcare Guide for Newcomers!</h2>
                            <h4>We are here to provide you with essential information about Canada's healthcare system and guide you through the process of accessing quality healthcare services.</h4>
                            <h4>Whether you are a newcomer, a student, or a recent immigrant, our comprehensive resources will help you navigate the Canadian healthcare landscape with ease.</h4>
                        </div>

                        <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

                            <div class="col-lg-5">
                                <div class="about-img">
                                    <a href="https://69ff7cjzg8l4cocksfyszaetcd.hop.clickbank.net/?tid=overview" target='_blank'><img src={ad} class="img-fluid" alt="Canada's diverse health system" /></a>

                                </div>
                            </div>

                            <div class="col-lg-7">
                                <div class="tab-content">

                                    <div class='overview'>

                                        <h5 class="d-flex align-items-start mt-3 bold600">Key Benefits of Canada's Healthcare System:</h5>

                                        <div class="d-flex align-items-start mt-4">
                                            <GiCheckMark style={iconstyle} />
                                            <h4>Universal Coverage</h4>
                                        </div>
                                        <p class='d-flex align-items-start'>Canada's healthcare system provides universal coverage, ensuring that essential medical services are available to all residents regardless of their income or immigration status.</p>

                                        <div class="d-flex align-items-center mt-4">
                                            <GiCheckMark style={iconstyle} />
                                            <h4>Comprehensive Care</h4>
                                        </div>
                                        <p>From primary healthcare to specialized treatments, Canada offers a wide range of medical services to meet your needs.</p>

                                        <div class="d-flex align-items-center mt-4">
                                            <GiCheckMark style={iconstyle} />
                                            <h4>High-Quality Standards</h4>
                                        </div>
                                        <p>Canada has a reputation for delivering high-quality healthcare services, with well-trained medical professionals and state-of-the-art facilities.</p>

                                        <div class="d-flex align-items-center mt-4">
                                            <GiCheckMark style={iconstyle} />
                                            <h4>Focus on Prevention</h4>
                                        </div>
                                        <p>Canada emphasizes preventive care, promoting a healthy lifestyle and regular check-ups to detect and address health issues early on.</p>

                                        <div class="d-flex align-items-center mt-4">
                                            <GiCheckMark style={iconstyle} />
                                            <h4>Multilingual Support</h4>
                                        </div>
                                        <p>Many healthcare facilities in Canada provide language interpretation services, ensuring that language barriers do not hinder your access to care.</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                <Button
                    className="btn-round mt-3"
                    color="danger"
                    style={{ cursor: 'none' }}
                >
                    Some Frequently Asked Questions
                </Button>
                <ul className='mt-3 mb-5'>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen1(!open1)}
                            aria-expanded={open1}
                            className="faq-q text-dark"
                        ><strong>Who is eligible for healthcare coverage in Canada?</strong>
                        </a>
                        <Collapse in={open1}>
                            <div>
                                <p className='faq-a'>
                                    Canadian citizens and permanent residents are eligible for healthcare coverage in Canada. Some provinces and territories may also provide coverage to certain groups, such as refugees or individuals with work permits. However, eligibility and coverage may vary, and some services may not be covered under the public system.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen2(!open2)}
                            aria-expanded={open2}
                            className="faq-q text-dark"
                        ><strong>What healthcare services are covered under the Canadian healthcare system?</strong>
                        </a>
                        <Collapse in={open2}>
                            <div>
                                <p className='faq-a'>
                                    The Canadian healthcare system covers medically necessary hospital and physician services, such as doctor visits, hospital stays, and surgeries. Additionally, some provinces and territories may also provide coverage for prescription drugs, dental care, and other health services. However, coverage may vary across provinces and territories, and not all services may be covered.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen3(!open3)}
                            aria-expanded={open3}
                            className="faq-q text-dark"
                        ><strong>Are prescription drugs covered under the Canadian healthcare system?</strong>
                        </a>
                        <Collapse in={open3}>
                            <div>
                                <p className='faq-a'>
                                    Prescription drug coverage is not universally provided under the Canadian healthcare system. While some provinces and territories may offer coverage for prescription drugs, others may not. In some cases, individuals may be required to purchase private insurance to cover the cost of prescription medications.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen4(!open4)}
                            aria-expanded={open4}
                            className="faq-q text-dark"
                        ><strong>Are dental services covered under the Canadian healthcare system?</strong>
                        </a>
                        <Collapse in={open4}>
                            <div>
                                <p className='faq-a'>
                                    Dental services are not generally covered under the Canadian healthcare system, although some provinces and territories may offer coverage for certain groups, such as children or low-income individuals. In most cases, individuals are responsible for paying for their own dental services, or may choose to purchase private dental insurance.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen5(!open5)}
                            aria-expanded={open5}
                            className="faq-q text-dark"
                        ><strong>Are mental health services covered under the Canadian healthcare system?</strong>
                        </a>
                        <Collapse in={open5}>
                            <div>
                                <p className='faq-a'>
                                    Mental health services are generally covered under the Canadian healthcare system, although coverage may vary depending on the province or territory. Some provinces and territories may provide coverage for a range of mental health services, such as counseling or psychotherapy, while others may only cover certain treatments or have limited coverage.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen6(!open6)}
                            aria-expanded={open6}
                            className="faq-q text-dark"
                        ><strong>How do Canadians access healthcare services?</strong>
                        </a>
                        <Collapse in={open6}>
                            <div>
                                <p className='faq-a'>
                                    Canadians can access healthcare services through a range of providers, including family doctors, walk-in clinics, hospitals, and other healthcare professionals. Patients are free to choose their own primary care providers and can also seek out specialists as needed, although wait times for specialist care can be lengthy in some areas.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen7(!open7)}
                            aria-expanded={open7}
                            className="faq-q text-dark"
                        ><strong>Can visitors to Canada access healthcare services?</strong>
                        </a>
                        <Collapse in={open7}>
                            <div>
                                <p className='faq-a'>
                                    Visitors to Canada may be able to access healthcare services, depending on the circumstances. Some provinces and territories provide limited coverage to visitors for emergency services or essential healthcare, while others may require visitors to purchase private health insurance. It is recommended that visitors check their coverage before traveling to Canada.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen8(!open8)}
                            aria-expanded={open8}
                            className="faq-q text-dark"
                        ><strong>Are there any out-of-pocket costs associated with the Canadian healthcare system?</strong>
                        </a>
                        <Collapse in={open8}>
                            <div>
                                <p className='faq-a'>
                                    There are no direct out-of-pocket costs associated with accessing medically necessary hospital and physician services under the Canadian healthcare system. However, some provinces and territories may charge fees for certain services, such as ambulance transportation or prescription drugs. Additionally, some healthcare services, such as dental or vision care, are generally not covered and may require payment.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen9(!open9)}
                            aria-expanded={open9}
                            className="faq-q text-dark"
                        ><strong>What happens if someone cannot afford healthcare services in Canada?</strong>
                        </a>
                        <Collapse in={open9}>
                            <div>
                                <p className='faq-a'>
                                    If someone cannot afford healthcare services in Canada, they may be eligible for financial assistance or coverage through their province or territory's healthcare system. In some cases, charitable organizations or community programs may also offer assistance with healthcare costs. However, not all services may be covered, and wait times for non-urgent care may be lengthy.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                    <li className='faq mb-2'>
                        <a
                            onClick={() => setOpen10(!open10)}
                            aria-expanded={open10}
                            className="faq-q text-dark"
                        ><strong>Can Canadians opt for private healthcare services?</strong>
                        </a>
                        <Collapse in={open10}>
                            <div>
                                <p className='faq-a'>
                                    Yes, Canadians can opt for private healthcare services, although private healthcare is generally not necessary for accessing medically necessary hospital and physician services. Private insurance may be used to cover additional services or treatments not covered by the public system, such as prescription drugs or dental care.
                                </p>
                            </div>
                        </Collapse>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Overview