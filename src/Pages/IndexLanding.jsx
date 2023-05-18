import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/index.css';
import { GiDiploma } from 'react-icons/gi';
import { GoLaw } from 'react-icons/go';
import { SiPowervirtualagents } from 'react-icons/si';
import { MdOutlineBusinessCenter, MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsHousesFill } from 'react-icons/bs';

const IndexLanding = () => {

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

    return (
        <>
            <section id="featured-services" class="featured-services">
                <div class="container">

                    <div class="row gy-4">

                        <div class="col-xl-4 col-md-12 d-flex" data-aos="zoom-out">
                            <div class="service-item position-relative">
                                <div class="icon text-center"><GiDiploma to='education' style={{ fontSize: '36px', color: 'red' }} /></div>
                                <h4 className='text-center'><a href="/education" class="stretched-link">Unlock Your Potential</a></h4>
                                <h5>Explore studying in Canada with prestigious universities, comprehensive college programs, scholarships for international students, and guidance for choosing the perfect educational path. Discover Canadian education systems, study permits, and valuable resources.</h5>
                            </div>
                        </div>

                        <div class="col-xl-4 col-md-12 d-flex" data-aos="zoom-out" data-aos-delay="200">
                            <div class="service-item position-relative">
                                <div class="icon text-center"><MdOutlineHealthAndSafety to='/health' style={{ fontSize: '36px', color: 'red' }} /></div>
                                <h4 className='text-center'><a href="/health" class="stretched-link">Your Well-being Matters</a></h4>
                                <h5>Prioritizing your well-being, we guide you through the Canadian healthcare system, helping access services, find doctors, understand insurance, and explore mental health support. Our focus is your peace of mind.</h5>
                            </div>
                        </div>

                        <div class="col-xl-4 col-md-12 d-flex" data-aos="zoom-out" data-aos-delay="400">
                            <div class="service-item position-relative">
                                <div class="icon text-center"><GoLaw to='/visa' style={{ fontSize: '36px', color: 'red' }} /></div>
                                <h4 className='text-center'><a href="/visa" class="stretched-link">Your Path to a New Beginning</a></h4>
                                <h5>We simplify the immigration process, assisting with visas, permanent residency, work permits, citizenship requirements. Connect with trusted consultants and lawyers for expert support.</h5>
                            </div>
                        </div>

                        <div class="col-xl-4 col-md-12 d-flex" data-aos="zoom-out" data-aos-delay="600">
                            <div class="service-item position-relative">
                                <div class="icon text-center"><MdOutlineBusinessCenter to='employment' style={{ fontSize: '36px', color: 'red' }} /></div>
                                <h4 className='text-center'><a href="/employment" class="stretched-link">Forge Your Career</a></h4>
                                <h5>Explore Canada's thriving job market and discover exciting opportunities. Gain insights into work culture, work permits, and enhance your job search with expert advice on resumes, interviews, and connecting with employment agencies.</h5>
                            </div>
                        </div>

                        <div class="col-xl-4 col-md-12 d-flex" data-aos="zoom-out" data-aos-delay="800">
                            <div class="service-item position-relative">
                                <div class="icon text-center"><SiPowervirtualagents to='/legal' style={{ fontSize: '36px', color: 'red' }} /></div>
                                <h4 className='text-center'><a href="/legal" class="stretched-link">Expert Guidance When You Need It</a></h4>
                                <h5>Navigate the legal landscape with ease through our network of immigration lawyers and legal experts. Learn about your rights, access free legal services, and find support for immigration appeals and refugee legal matters.</h5>
                            </div>
                        </div>

                        <div class="col-xl-4 col-md-12 d-flex" data-aos="zoom-out" data-aos-delay="1000">
                            <div class="service-item position-relative">
                                <div class="icon text-center"><BsHousesFill to='/housing' style={{ fontSize: '36px', color: 'red' }} /></div>
                                <h4 className='text-center'><a href="/housing" class="stretched-link">Find Your Home</a></h4>
                                <h5>Find your perfect home in Canada with our guidance. Explore renting apartments, affordable housing options, tenant rights, and temporary housing solutions. Access tailored housing assistance programs for newcomers and secure your comfortable home.</h5>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default IndexLanding