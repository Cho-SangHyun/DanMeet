import React from 'react';
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ openModal, userId, authService, setUserId }) => {
    const openModalByClick = () => {
        setTimeout(openModal, 50);
    };

    const logout = () => {
        // 로그아웃 성공하면 실행할 콜백을 같이 넘김
        // Main 컴포넌트의 userId를 null로 바꿈으로써 로그인, 회원가입 버튼이 보이도록!
        authService.logout(() => {
            setUserId(null);
        });
    };

    return(
        <nav className={styles.navbar}>
            Project Name
            <div className={styles.navbar_buttons}>
                { userId ? (
                    <button onClick={logout}>로그아웃</button>
                ) : (
                    <>
                        <button onClick={openModalByClick}>로그인</button>
                        <Link to="/signup"><button>회원가입</button></Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;