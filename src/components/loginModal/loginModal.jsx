import React, { useEffect } from 'react';
import { useCallback } from 'react';
import styles from "./loginModal.module.css";

const LoginModal = ({closeModal}) => {
    const closeModalByESC = useCallback((e) => {
        if(e.key === 'Escape'){
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
        document.addEventListener('keydown', closeModalByESC);
        return () => {
            document.removeEventListener('keydown', closeModalByESC);
        };
    }, [closeModalByESC])

    const handleKeyDown = (e) => {
        console.log("down");
        console.log(e);
    }
      
    return(
        <div onKeyDown={handleKeyDown} className={styles.modal_background}>
            <div className={styles.loginModal}>
                로그인모오달
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    )
}

export default LoginModal;