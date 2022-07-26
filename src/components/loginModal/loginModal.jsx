import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from "./loginModal.module.css";

const LoginModal = ({closeModal}) => {
    const modalRef = useRef();

    const [userInput, setUserInput] = useState({
        id: '',
        pw: ''
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInput);
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
                로그인모오달
                <button onClick={closeModal}>닫기</button>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="id" placeholder='아이디' onChange={handleChange}/>
                    <input type="password" name="pw" placeholder='비밀번호' onChange={handleChange}/>
                    <button>로그인</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;