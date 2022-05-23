import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import MobileNav from '../MobileNav';

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const stickyNavElement = React.useRef(null);

  // const [stickyStatus, setStickyStatus] = React.useEffect(false);
  const [pageYOffset, setPageYOffset] = React.useState(window.pageYOffset);

  const [navbarOffSetTop, setNavbarOffSetTop] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setPageYOffset(window.pageYOffset);
      setNavbarOffSetTop(stickyNavElement.current.offsetTop);
    });

    if (pageYOffset > navbarOffSetTop + 120) {
      stickyNavElement.current.classList.add(styles.sticky);
    } else {
      stickyNavElement.current.classList.remove(styles.sticky);
    }
  }, [pageYOffset, navbarOffSetTop]);

  return (
    <React.Fragment>
      {windowWidth <= 992 && <MobileNav />}
      {windowWidth > 992 && (
        <div>
          <div className={styles.section}>
            <div className={styles.container}>
              <div className={styles.startItems}>
                <Link className={styles.link} to={`/posts?page=${0}`}>
                  Home
                </Link>
                <Link className={styles.link} to="/create">
                  CREATE POST
                </Link>
              </div>

              <div className={styles.midItems}>
                <div>
                  <Link className={styles.link} to={`/posts?page=${0}`}>
                    ENGLISH
                  </Link>
                  <RiArrowDropDownLine className={styles.icon} />
                </div>
                <div>
                  <Link className={styles.link} to="/create">
                    $ USD
                  </Link>
                  <RiArrowDropDownLine className={styles.icon} />
                </div>
              </div>

              <div className={styles.endItem}>
                <Link className={styles.link} to="/create">
                  SIGN IN
                </Link>
              </div>
            </div>
          </div>
          <div
            ref={stickyNavElement}
            className={styles.section}
            // className={
            //   pageYOffset >= 0
            //     ? `${styles.section} ${styles.sticky}`
            //     : styles.section
            // }
          >
            <div className={`${styles.container} ${styles.midHeader}`}>
              <h1>
                mansion <span>global</span>
              </h1>
              <div>
                <Link className={styles.link} to={`/posts?page=${0}`}>
                  NEWS
                </Link>
                <Link className={styles.link} to={`/posts?page=${0}`}>
                  TOP MARKETS
                </Link>
                <Link className={styles.link} to={`/posts?page=${0}`}>
                  NEW DEVELOPMENTS
                </Link>
                <Link className={styles.link} to={`/posts?page=${0}`}>
                  MORE
                </Link>
              </div>
            </div>
            <div className={`${styles.container} ${styles.bottomHeader}`}>
              <div>
                <select name="Buy" id="1">
                  <option value="1">Buy</option>
                  <option value="2">Rent</option>
                </select>
                <input placeholder="Select A Location" />
                <AiOutlineSearch className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
