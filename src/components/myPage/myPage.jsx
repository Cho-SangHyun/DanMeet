import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NicknameCard from '../nicknameCard/nicknameCard';
import UserInfoCard from '../userInfoCard/userInfoCard';
import styles from "./myPage.module.css";

const MyPage = ({authService, database}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        userId: location.state?.userId,
        classOf: '',
        major: '',
        nickname: ''
    });
    
    const logout = () => {
        authService.logout(() => {
            navigate("/home");
        });
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                database.getUserInfo(user.uid, setUserInfo);
            }
            else{
                navigate("/home");
            }
        });
    }, [authService, navigate, database]);

    return(
        <div className={styles.myPage}>
            <Navbar contents={[
                {type: "button", onClick: logout, text: "로그아웃"},
                {type: "button", onClick: () => {navigate("/mypage")}, text: "마이페이지"},
            ]}/>
            <section className={styles.main_section}>
                <NicknameCard nickname={userInfo.nickname}/>
                <UserInfoCard classOf={userInfo.classOf} major={userInfo.major}/>
            </section>
        </div>
    )
}

export default MyPage;