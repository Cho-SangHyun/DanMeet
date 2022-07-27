import React from 'react';
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ openModal }) => {
    const openModalByClick = () => {
        setTimeout(openModal, 50);
    };

    return(
        <nav className={styles.navbar}>
            Project Name
            <div className={styles.navbar_buttons}>
                <button onClick={openModalByClick}>로그인</button>
                <Link to="/signup"><button>회원가입</button></Link>
            </div>
        </nav>
    )
}

export default Navbar;