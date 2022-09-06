import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../images/logo.png";
import styles from "./loginModal.module.css";

const LoginModal = ({closeModal, authService}) => {
    const modalRef = useRef();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    });

    const closeModalByESC = useCallback((e) => {
        if(e.key === 'Escape'){
            closeModal();
        }
    }, [closeModal]);

    const closeModalByOutsideClick = useCallback(e => {
        if(!modalRef.current.contains(e.target)){
            closeModal();
        }
    }, [closeModal]);

    const handleChange = (e) => {
        setUserInput(prevUserInput => {
            const {name, value} = e.target;
            return {
                ...prevUserInput,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await authService.login(userInput.email, userInput.password);
        // 로그인 성공 후 모달창 닫기
        if(user){
            navigate("/", {
                state: {
                    userId: user.uid,
                },
            });
        }
    };

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        document.addEventListener('keydown', closeModalByESC);
        document.addEventListener("click", closeModalByOutsideClick);
        return () => {
            document.removeEventListener('keydown', closeModalByESC);
            document.removeEventListener("click", closeModalByOutsideClick);
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, [closeModalByESC, closeModalByOutsideClick]);
      
    return(
        <div className={styles.modal_background}>
            <div className={styles.loginModal} ref={modalRef}>
                <span className={styles.closeModal} onClick={closeModal}><IoCloseOutline/></span>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <img className={styles.logo} src={logo} alt="로고" />
                    <input className={styles.formInput} type="email" name="email" placeholder='이메일' onChange={handleChange}/>
                    <input className={styles.formInput} type="password" name="password" placeholder='비밀번호' onChange={handleChange}/>
                    <button className={styles.loginButton}>로그인</button>
                    <p className={styles.forgotPassword}>앗! 비밀번호를 잊어버렸나요?</p>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;