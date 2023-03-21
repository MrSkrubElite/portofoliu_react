import './Contactme.css';
import React from 'react';
import handdown from "../../components/imgs/handdown.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faMapLocation, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import carrental from "../../components/imgs/carrentalproject.png"

library.add(fab, faCheckSquare, faCoffee)

const Contactme = () => {
  return (
    <section id="contactme">
        <div className="container-contactme">
            <div className="title-contactme">
                <h3>CONTACT</h3>
                <h1>Don't be shy! Hit me up! <img src={handdown} alt="handdown" className='handdown' /> </h1>
            </div>
            <div className="links-container">
                    <div className="location">
                        <div className="img-container">
                            <FontAwesomeIcon icon={faMapLocation} className="map" />
                        </div>
                        <div className="cc">
                            <h4>Location</h4>
                            <p>Constanta, Romania</p>
                        </div>
                    </div>

                    <div className="location mail">
                        <div className="img-container">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className="map" />
                        </div>
                        <div className="cc">
                            <h4>Mail</h4>
                            <p>stefalex1999@gmail.com</p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  );
}

export default Contactme;