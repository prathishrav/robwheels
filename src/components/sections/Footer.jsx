import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
    return (
        <section className="footer" id="footer">

            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="/"> <i><FontAwesomeIcon icon={faArrowRight} /></i>  home </a>
                    <a href="/"><i><FontAwesomeIcon icon={faArrowRight} /></i>  vehicles </a>
                    <a href="/"> <i><FontAwesomeIcon icon={faArrowRight} /></i> brands </a>
                    <a href="/"><i><FontAwesomeIcon icon={faArrowRight} /></i>  reviews </a>
                    <a href="/"><i><FontAwesomeIcon icon={faArrowRight} /></i>  contact </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="/"><i><FontAwesomeIcon icon={faPhone} /></i>  +91 9789278391</a>

                    <a href="/"> <i><FontAwesomeIcon icon={faEnvelope} /></i> prathishrav@gmail.com</a>
                    <a href="/"> <i><FontAwesomeIcon icon={faMapMarkerAlt} /> </i>Tamilnadu india-641041 </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="/"> <i><FontAwesomeIcon icon={faFacebookF} /></i> facebook </a>
                    <a href="/"> <i><FontAwesomeIcon icon={faTwitter} /></i> twitter </a>
                    <a href="/"> <i><FontAwesomeIcon icon={faInstagram} /></i> instagram </a>
                </div>
            </div>

            <div className="credit"> created by prathishrav | all rights reserved </div>

        </section>
    );
}

export default Footer;