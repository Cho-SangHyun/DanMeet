import React, {useState} from 'react';

const SignUpPage = ({authService}) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.signup(userInput.email, userInput.password1, userInput.password2);
    };

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