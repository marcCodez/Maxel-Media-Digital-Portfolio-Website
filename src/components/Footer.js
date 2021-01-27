import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='test'>
            <section className='socials'>
            <div className='icon-socials'>
                <a 
                    className='socials-link'
                    href='https://www.facebook.com/MaxeIMedia/'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i className='fa fa-facebook-square'/>
                </a>
                <a
                    className='socials-link'
                    href='https://www.instagram.com/maxel_media/'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                >
                 <i className='fa fa-instagram'/>
                 </a>
                 <a
                    className='socials-link'
                    href='https://www.youtube.com/channel/UCEUMWlju-dbYVeij4RwmVRQ'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                >
                 <i className='fa fa-youtube'/>
                 </a>
           
                 </div>
                 </section>
                 </div>
                 <p className="copyright">© Marc Pulumbarit 2021</p>
        </footer>
    )
}

export default Footer