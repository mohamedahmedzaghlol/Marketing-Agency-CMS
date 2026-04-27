import logo from "../../../assets/Background+Border.png"
function Navbar(){
    return(
<>
<nav className=" container navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    <div>
        <h4 className="position-absolute start-50 translate-middle-x fw-bold">
          CMS Admin
          </h4>
          <div className="d-flex align-items-center gap-3">
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-gear"></i>

        <img 
            src={logo}alt="Logo" style={{width:"30px"}}/>
        </div>

    </div>
  </div>
</nav>

</>
    )
}
export default Navbar;