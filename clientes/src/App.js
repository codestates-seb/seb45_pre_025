import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Header from './components/Header';
import HeaderOn from './components/HeaderOn';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Questions from './pages/Questions';
import QuestionsAsk from './pages/QuestionsAsk';
import QuestionsId from './pages/QuestionsId';
import Home from './pages/Home';
import Users from './pages/Users';
// import { RequireToken } from "../Login/Auth";

function App() {
  const location = useLocation();
  const showFooterPaths = [
    '/',
    '/home',
    '/questions',
    '/questions/ask',
    '/questions/view',
    '/users',
  ];
  // 현재 경로가 showFooterPaths에 속하는지 확인하는 함수
  const showFooter = () => showFooterPaths.includes(location.pathname);

  // 로그인 상태에 따라 Header 컴포넌트를 교체
  const logIn = localStorage.getItem('accessToken');
  const HeaderComponent = logIn ? HeaderOn : Header;

  return (
    <div className="w-full">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/questions/ask" element={<QuestionsAsk />}></Route>
        <Route path="/questions/view" element={<QuestionsId />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        {/* <Route
          path="/users"
          element={
            <RequireToken>
              <Users />
            </RequireToken>
          }
        ></Route> */}
      </Routes>
      {showFooter() && <Footer />}
    </div>
  );
}

export default App;
