import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="blog/:id" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
