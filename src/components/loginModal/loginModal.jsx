import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
            console.log(user.uid);
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
                로그인모오달
                <button onClick={closeModal}>닫기</button>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder='이메일' onChange={handleChange}/>
                    <input type="password" name="password" placeholder='비밀번호' onChange={handleChange}/>
                    <button>로그인</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;