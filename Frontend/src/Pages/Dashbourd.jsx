import Navbar from "../componts/Dashbourd/Navbar/Navbar";
import Page22 from "../componts/Dashbourd/pages2/Page";
import Sidebar from "../componts/Dashbourd/Sidbar/Sidbar";
import Login from "../componts/Dashbourd/login/Login";
function Dashbourd(){
    return(
        <>
        <Sidebar />      
         <Page22/>
         <ManagePosts />
         <Login />
        
         
</>
    )
}
export default Dashbourd;