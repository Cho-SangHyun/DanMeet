import React from 'react';
import styles from "./navbar.module.css";

const Navbar = ({ showModal, openModal}) => {
    return(
        <nav className={styles.navbar}>
            navigation
            {showModal || (
                <button onClick={openModal}>
                    로그인
                </button>
            )}
        </nav>
    )
}

export default Navbar;