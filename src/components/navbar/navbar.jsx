import React from 'react';
import styles from "./navbar.module.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import NavbarButton from '../navbarButton/navbarButton';

// contents
// type, text, onClick, to프로퍼티를 가진다
// ex) {type: "Link", to: "/", text: "홈"}
// ex) {type: "button", onClick: func, text: "로그인"}

const Navbar = ({ contents }) => {
    return(
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/"><img className={styles.logo_img} src={logo} alt="DanMeet" /></Link>
            <ul className={styles.navbar_buttons}>
                {contents.map((content, index) => (<NavbarButton key={index} content={content}/>))}
            </ul>
        </nav>
    )
}

export default Navbar;