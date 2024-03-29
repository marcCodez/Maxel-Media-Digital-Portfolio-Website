import React, {useEffect} from 'react'
import '../../App.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ 
            duration: 1500
        });
    }, [])
    return (
        <section id='about' className='text-center pb-3 space-top'>
            <div className='container'>
                <div className='about-info'>
                <div className='heading'>
            <h1 data-aos="fade-left" data-aos-delay="250" className='section-title font-weight-bold'>ABOUT MAXEL MEDIA</h1>
            <div data-aos="fade-left" data-aos-delay="250" className='underline'></div>
            </div>
            <img data-aos="zoom-in" src='/images/maxpic-min.jpg' className='about-image' alt="Maxel Media in action holding a camera"/>
            <p data-aos="fade-left" data-aos-delay="250" className='about-description'>Max Lerion is a content creator based in Sydney, Australia. Under an alias of Maxel Media he has been creating content for over 2 years and has recently started to publish client work on social media less than a year ago. He has worked with numerous brands, businesses and artists in  marketing with his diverse skills in photography and videography. Currently in his final year in a bachelor of Media (Screen and Sound Production), he aims to build his brand as a freelancer into a production company to help cater to businesses around Sydney in digital marketing and to bring visions to reality.</p>
            </div>
            </div>
        </section>
    )
}

export default About
