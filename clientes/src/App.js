import { Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
