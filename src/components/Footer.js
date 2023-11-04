import * as React from 'react';
import '../cssfiles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faCopyright} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div class="logo-text" style={{fontSize:30}}>
          TradeTrackr
        </div>

        <div class="text-center p-3" style={{color: "white"}}>
           © 2023 Copyright Trade Trackr
        </div>
        <section class ="icons">
          <FontAwesomeIcon icon={faFacebook} fontSize={30}/>
          <FontAwesomeIcon icon={faXTwitter} fontSize={30}/>
          <FontAwesomeIcon icon={faInstagram} fontSize={30}/>
          <FontAwesomeIcon icon={faLinkedin} fontSize={30}/>
        </section>
      </footer>
    </div>
  )
}

export default Footer
