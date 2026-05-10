import { Routes, Route } from 'react-router-dom';
import Sidebar from './componts/Dashbourd/Sidbar/Sidbar';
import Dashbourd from './Pages/Dashbourd';
import ManagePosts from './componts/Dashbourd/ManagePosts/ManagePosts';
import Page22 from './componts/Dashbourd/pages2/Page';
import Navbar from './componts/Dashbourd/Navbar/Navbar';
import Login from './componts/Dashbourd/login/Login';
function App() {
  return (
    <div className="admin-container">
      <Sidebar />
     
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/dashboard" element={<Page22/>} />
          <Route path="/ManagePosts" element={<ManagePosts />} />
          <Route path="/new-post" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;