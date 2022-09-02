import React from 'react';
import styles from "./footer.module.css";
import { FaGithub, FaYoutube, FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = (props) => {
    return(
        <footer className={styles.footer}>
            <section className={styles.footer_content}>
                <section className={styles.developer_info}>
                    <p><b>개발자</b>  조상현 | <b>이메일</b> XXXXXXX@naver.com</p>
                    <p><b>레포지토리</b> https://github.com/Cho-SangHyun/DanMeet</p>
                    <p><b>전화</b> 010-4XX3-7XXX | <b>사업자 번호</b> XXX-XX-XXXXX</p>
                </section>
                <section className={styles.links}>
                    <FaGithub />
                    <FaYoutube />
                    <FaFacebook />
                    <FaInstagramSquare />
                </section>
            </section>
        </footer>
    )
}

export default Footer;