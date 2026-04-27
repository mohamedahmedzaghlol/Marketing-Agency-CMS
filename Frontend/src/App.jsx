import React from 'react';
import './App.css';
import Sidebar from './component/Layout/Sidebar';
import Navbar from './component/Layout/Navbar';
import Dashboard from "./Pages/Dashboard"
import Categories from './pages/Categories';
function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-content">
        <Navbar />
        <main className="app-main">
         <Categories/>
         <Dashboard/>
        </main>
      </div>
    </div>
    
  );
}
 
export default App;