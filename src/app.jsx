import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from './components/home/home';
import Main from './components/main/main';
import MyPage from './components/myPage/myPage';
import SelectCondition from './components/selectCondition/selectCondition';
import SignUpPage from './components/signUpPage/signupPage';

function App({authService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main authService={authService}/>}/>
        <Route path="home" element={<Home authService={authService}/>}/>
        <Route path="signup" element={<SignUpPage authService={authService}/>}/>
        <Route path="senior" element={<SelectCondition opponent={'senior'} authService={authService}/>}/>
        <Route path="junior" element={<SelectCondition opponent={'junior'} authService={authService}/>}/>
        <Route path="friend" element={<SelectCondition opponent={'friend'} authService={authService}/>}/>
        <Route path="mypage" element={<MyPage authService={authService}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
