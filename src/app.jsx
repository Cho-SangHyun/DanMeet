import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from './components/home/home';
import Main from './components/main/main';
import SignUpPage from './components/signUpPage/signupPage';

function App({authService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main authService={authService}/>}/>
        <Route path="home" element={<Home authService={authService}/>}/>
        <Route path="signup" element={<SignUpPage authService={authService}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
