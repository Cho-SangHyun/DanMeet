import React from 'react';
import styles from "./navbarButton.module.css";
import { Link } from 'react-router-dom';

const NavbarButton = ({content}) => {
    return(
        <li className={styles.navbar_button}>
            {content.type === "button" ? (
                <button className={styles.button} onClick={content.onClick}>{content.text}</button>
            ) : (
                <Link className={styles.button} to={content.to}>{content.text}</Link>
            )}
        </li>
    )
}

export default NavbarButton;
