import React from 'react';
import styles from './index.module.css';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = ({ details }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.social}>
          <h3>FOLLOW MANSION GLOBAL</h3>
          <div>
            <AiFillFacebook className={styles.icon} />
            <SiTwitter className={styles.icon} />
            <AiFillInstagram className={styles.icon} />
            <AiFillLinkedin className={styles.icon} />
          </div>
        </div>
        <div className={styles.nav}>
          <div>
            <h3>MANSION GLOBAL</h3>
            <Link className={styles.link} to="/create">
              About Mansion Global
            </Link>
            <Link className={styles.link} to="/create">
              Digital Self Service
            </Link>
            <Link className={styles.link} to="/create">
              Advertise With Us
            </Link>
            <Link className={styles.link} to="/create">
              Sign up to Newsletters
            </Link>
          </div>

          <div>
            <h3>GLOBAL PARTNERS</h3>
            <Link className={styles.link} to="/create">
              PropTiger
            </Link>
            <Link className={styles.link} to="/create">
              Realtor
            </Link>
            <Link className={styles.link} to="/create">
              MansionGlobal.jp
            </Link>
            <Link className={styles.link} to="/create">
              Housing.com
            </Link>
            <Link className={styles.link} to="/create">
              Makaan
            </Link>
          </div>

          <div>
            <h3>INDEX</h3>
            <Link className={styles.link} to="/create">
              All Index
            </Link>
            <Link className={styles.link} to="/create">
              Homes for Sale
            </Link>
            <Link className={styles.link} to="/create">
              Homes for Rent
            </Link>
            <Link className={styles.link} to="/create">
              News Topics
            </Link>
            <Link className={styles.link} to="/create">
              The Library
            </Link>
          </div>
        </div>
        <div className={styles.midNav}>
          <Link to="/create">Privacy Notice</Link>
          <Link to="/create">Cookie Notice</Link>
          <Link to="/create">Your Ad Choices</Link>
          <Link to="/create">Copyright Policy</Link>
          <Link to="/create">Data Policy</Link>
          <Link to="/create">Terms of Use </Link>
          <Link to="/create">Accessibility</Link>
        </div>
        <hr />
        <div className={styles.bottomNav}>
          <p>
            COPYRIGHT © 2022 MANSION GLOBAL. ALL RIGHTS RESERVED.1211 AVE OF THE
            AMERICAS NEW YORK, NY 10036 |
            <span>
              <Link to="mailto:INFO@MANSIONGLOBAL.COM">
                INFO@MANSIONGLOBAL.COM
              </Link>
            </span>
          </p>
          <p>
            DISCLAIMER: THE CURRENCY CONVERSION IS PROVIDED FOR ILLUSTRATION
            PURPOSES ONLY. IT IS MEANT ONLY AS AN APPROXIMATION BASED ON THE
            LATEST INFORMATION AVAILABLE AND SHOULD NOT BE RELIED UPON FOR ANY
            OTHER PURPOSES. WE ARE NOT RESPONSIBLE FOR ANY LOSS THAT YOU MAY
            INCUR AS A RESULT OF RELYING ON THESE CURRENCY CONVERSIONS. ALL
            PROPERTY PRICES ARE AS STATED BY THE LISTING AGENT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
