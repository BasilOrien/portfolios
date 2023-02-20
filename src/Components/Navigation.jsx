import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import profileImg from "../Img/1651438271425.jpeg";
import Styles from "../Styles/Navigation.module.css";
import menuGridIcon from "../Img/menuGrid.png";
import { faBars, faBriefcase, faBook } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.nav__ul}>
        <li className={Styles.nav__ul__li}>
          <img
            className={Styles.nav__profile_picture}
            src={profileImg}
            alt="Federico Carusso"
          />
        </li>

        <li className={Styles.nav__ul__li}>
          <Link to={"/"} onClick={()=>window.location.reload()}>
            <FontAwesomeIcon
              className={`${Styles.nav__icon} ${Styles.nav__icon_briefcase}`}
              icon={faBook}
            />
          </Link>
        </li>

        <li className={Styles.nav__ul__li}>
          <FontAwesomeIcon
            className={`${Styles.nav__icon} ${Styles.nav__icon_briefcase}`}
            icon={faBriefcase}
          />
        </li>

        <li className={Styles.nav__ul__li}>
          <FontAwesomeIcon
            className={`${Styles.nav__social_icon} ${Styles.nav__icon}`}
            icon={faLinkedin}
          />
        </li>
        <li className={Styles.nav__ul__li}>
          <FontAwesomeIcon
            className={`${Styles.nav__social_icon} ${Styles.nav__icon}`}
            icon={faInstagram}
          />
        </li>









        
        <li className={Styles.nav__ul__li}>
          <FontAwesomeIcon
            className={`${Styles.nav__social_icon} ${Styles.nav__icon}`}
            icon={faWhatsapp}
          />
        </li>
        <li className={Styles.nav__ul__li}>
          <FontAwesomeIcon
            className={`${Styles.nav__social_icon} ${Styles.nav__icon}`}
            icon={faBars}
          />
        </li>
      </ul>
    </nav>
  );
}
