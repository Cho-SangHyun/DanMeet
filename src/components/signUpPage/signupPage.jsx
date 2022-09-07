import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";
import styles from './signUpPage.module.css';

const SignUpPage = ({authService, database}) => {
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        email: '',
        password1: '',
        password2: '',
        nickname: '',
        classOf: null,
        major: null
    });

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
        const user = await authService.signup(
            userInput.email, 
            userInput.password1, 
            userInput.password2,
        );
        if(user){
            await database.storeUserInfo(
                user.uid,
                userInput.nickname,
                parseInt(userInput.classOf),
                userInput.major
            );
            navigate("/", {
                state: {
                    userId: user.uid,
                },
            });
        }
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                navigate("/");
            };
        });
    });

    return(
        <div className={styles.signUpPage}>
            <form className={styles.signUpForm} onSubmit={handleSubmit}>
                <span className={styles.homeButton} onClick={() => {navigate("/")}}><FaHome /></span>
                <img className={styles.logo} src={logo} alt="로고" />
                <h2 className={styles.title}>회원가입</h2>
                <p className={styles.description}>단밋에 들어와 친해지고 싶은 사람들을 만나보세요!</p>
                <input className={styles.signUpInput} type="email" name="email" placeholder='이메일' onChange={handleChange}/>
                <input className={styles.signUpInput} type="password" name="password1" placeholder='비밀번호' onChange={handleChange}/>
                <input className={styles.signUpInput} type="password" name="password2" placeholder='비밀번호 확인' onChange={handleChange}/>
                <input className={styles.signUpInput} type="text" name="nickname" placeholder='닉네임' onChange={handleChange}/>
                <input className={styles.signUpInput} type="number" name="classOf" placeholder='학번' onChange={handleChange}/>
                <input className={styles.signUpInput} type="text" name="major" placeholder='학과' onChange={handleChange}/>
                <button className={styles.signUpButton}>회원가입</button>
            </form>
        </div>
    )
}

export default SignUpPage;