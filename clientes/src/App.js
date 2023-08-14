import { Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Questions from './pages/Questions';
import Ask from './pages/Ask';
import Question from './pages/Question';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/questions/ask" element={<Ask />}></Route>
        <Route path="/questions/id" element={<Question />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
