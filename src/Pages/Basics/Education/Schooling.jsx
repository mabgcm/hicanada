import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../assets/css/index.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';


const Schooling = () => {

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

    const iconStyle = {
        color: '#f5593d',
        fontSize: '20px',
    };

    return (
        <section id="features" class="features">
            <div className="container">
                <div class="row gy-4">
                    <div class="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                        <h3>Schooling in Canada</h3>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li className='list-unstyled mb-1'><BsFillCheckCircleFill style={iconStyle} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li className='list-unstyled mb-1'><BsFillCheckCircleFill style={iconStyle} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li className='list-unstyled mb-1'><BsFillCheckCircleFill style={iconStyle} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div class="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                        <img src="https://picsum.photos/774/669" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schooling