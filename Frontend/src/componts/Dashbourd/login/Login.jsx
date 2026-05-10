import Styles from "./Login.module.css"
function Login () {
    return (
<div className="d-flex align-items-center justify-content-center  ">
  <div className={`${Styles.dourder} p-4 bg-white  rounded-5 shadow`}>
    
 <div className="d-flex flex-column align-items-center text-center justify-content-center">
  <div>
    <i className="fa-solid fa-tower-broadcast text-danger"></i>
  </div>

  <h2>Agency CMS</h2>

  <span>Admin Login</span>
</div>

   <div className={`${Styles.form} container-fluid`}>
     <span>Email Address</span>
     
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-envelope"></i></span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
   </div>
<div className={`${Styles.form} container-fluid`}>  
   <span>password</span>
     <form >
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form></div>

          <button className={`${Styles.bottoun} btn w-100 rounded-pill py-2 fw-bold text-white `} >
          <i className="fa-solid fa-right-to-bracket me-2"></i>
          Login to Admin
 </button>
  </div>
</div>

    )
}
export default Login;