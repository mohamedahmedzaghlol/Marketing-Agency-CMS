import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/public/HomePage';
import PostDetailPage from './pages/public/PostDetailPage';
import AboutPage from './pages/public/AboutPage';
import LoginPage from './pages/admin/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/admin/login" element={<LoginPage />} />

      
        <Route path="/" element={<><Navbar /><main className="main-content"><HomePage /></main><Footer /></>} />
        <Route path="/post/:id" element={<><Navbar /><main className="main-content"><PostDetailPage /></main><Footer /></>} />
        <Route path="/about" element={<><Navbar /><main className="main-content"><AboutPage /></main><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;