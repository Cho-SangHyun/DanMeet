import React from 'react';
import styles from "./navbar.module.css";

const Navbar = ({ showModal, openModal}) => {
    const openModalByClick = () => {
        setTimeout(openModal, 50);
    }
    return(
        <nav className={styles.navbar}>
            navigation
            {showModal || (
                <button onClick={openModalByClick}>
                    로그인
                </button>
            )}
        </nav>
    )
}

export default Navbar;