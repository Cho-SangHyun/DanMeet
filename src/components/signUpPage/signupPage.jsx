import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = ({authService}) => {
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        email: '',
        password1: '',
        password2: ''
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
            userInput.password2
        );
        if(user){
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
        <div>회원가입
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='이메일' onChange={handleChange}/>
                <input type="password" name="password1" placeholder='비밀번호' onChange={handleChange}/>
                <input type="password" name="password2" placeholder='비밀번호 확인' onChange={handleChange}/>
                <button>회원가입</button>
            </form>
        </div>
    )
}

export default SignUpPage;