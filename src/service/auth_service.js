import app from './firebase';
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


class AuthService{
    constructor(){
        this.auth = getAuth();
        this.database = getDatabase();
    }
    // 회원가입
    async signup(email, password1, password2, nickname, classOf, major){
        // 유효성 검사
        if(password1 !== password2){
            alert("비밀번호를 확인해주세요");
            return;
        }
        if(password1.length < 6){
            alert("비밀번호는 6글자 이상으로 설정해주세요");
            return;
        }
        if(!nickname){
            alert("닉네임을 입력해주세요");
            return;
        }
        if(!classOf){
            alert("학번을 입력해주세요");
            return;
        }
        if(!major){
            alert("학과를 입력해주세요");
            return;
        }
        console.log(typeof classOf);
        try{
            const userCredential = await createUserWithEmailAndPassword(
                this.auth, 
                email, 
                password1
            );
            set(ref(this.database, 'users/' + userCredential.user.uid), {
                nickname,
                classOf,
                major
            });
            return userCredential.user;
        }catch(error){
            alert("에러 발생!");
        }
    }
    // 로그인
    async login(email, password){
        try{
            const userCredential = await signInWithEmailAndPassword(
                this.auth, 
                email, 
                password
            );
            return userCredential.user;
        }catch(error){
            alert("에러 발생!!");
        }
    }
    // 로그아웃
    async logout(callback){
        try{
            await signOut(this.auth);
            callback();
        }catch(error){
            alert("에러 발생!");
        }
    }
    // 로그인돼있는지 상태 관찰하는 함수
    onAuthChange(callback){
        onAuthStateChanged(this.auth, callback); 
    };
}

export default AuthService;