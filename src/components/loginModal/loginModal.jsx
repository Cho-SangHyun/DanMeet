import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import styles from "./loginModal.module.css";

const LoginModal = ({closeModal}) => {
    const modalRef = useRef();

    const closeModalByESC = useCallback((e) => {
        if(e.key === 'Escape'){
            closeModal();
        }
    }, [closeModal]);

    const closeModalByOutsideClick = useCallback(e => {
        if(modalRef.current !== e.target){
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    useEffect(() => {
        console.log("mount");
        document.addEventListener('keydown', closeModalByESC);
        document.addEventListener("click", closeModalByOutsideClick);
        return () => {
            console.log("unmount");
            document.removeEventListener('keydown', closeModalByESC);
            document.removeEventListener("click", closeModalByOutsideClick);
        };
    }, [closeModalByESC, closeModalByOutsideClick]);
      
    return(
        <div className={styles.modal_background}>
            <div className={styles.loginModal} ref={modalRef}>
                로그인모오달
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default LoginModal;