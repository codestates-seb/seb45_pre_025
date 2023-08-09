import { Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
