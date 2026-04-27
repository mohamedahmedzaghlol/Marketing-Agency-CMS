import Style from "./hero.module.css";
function Hero(){
    return(
  <div className="container mt-4">
  <div className="row justify-content-between">
    <div className="col-12 col-md-7">
      <div className="card shadow-sm border-0 p-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold m-0">Recent Activity</h5>
        <span className="text-primary ">View All</span>        
        </div>

        <div className="d-flex mb-4">
        
          <div className="ms-3 w-100">
            <div className="d-flex align-items-center gap-2 mb-1">
                <i class="fa-solid fa-circle-check"></i>
             <h5>Sarah Jenkins published a new pos</h5>
            
              <small className="text-muted">2 hours ago</small>
            </div>
            <p className="text-primary small mb-0">"10 Trends in B2B Marketing for 2024"</p>
          </div>
        </div>

        <div className="d-flex mb-3">
         
          <div className="ms-3 w-100">
            <div className="d-flex align-items-center gap-2 mb-1">
                <i class="fa-solid fa-thumbtack"></i>
              <h5>System uploaded 5 new media assets</h5>
              <small className="text-muted">5 hours ago</small>
            </div>
            <p className="text-muted small">"Q3 Financial Report Summary"</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 mb-1">
            <i class="fa-solid fa-image ms-3"></i>
           <h5>System uploaded 5 new media assets</h5>
           <small className="text-muted">Yesterday</small>
          
          </div>
           <div className="d-flex align-items-center gap-2 mb-1 ms-5">
           <i class="fa-solid fa-image"></i>
           <i class="fa-solid fa-image"></i>
          
          </div>
      </div>
    </div>

   

    

    <div className="col-12 col-md-4">
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h6 className="fw-bold mb-3">Quick Actions</h6>
        <button className="btn btn-primary w-100 mb-2" style={{ backgroundColor: '#005f8d' }}>
          + Create New Post
        </button>
        <button className="btn btn-outline-secondary w-100">
          Upload Media
        </button>
      </div>

      <div className="card shadow-sm border-0 p-4">
        
        <h6 className="fw-bold mb-3">System Status</h6>

        <div className="d-flex gap-2 align-items-center mb-2 small">
            <i class="fa-solid fa-circle text-success"></i>
          <span className="text-muted">Operational</span>
        </div>

       <div className="d-flex gap-2 align-items-center mb-2 small">
            <i class="fa-solid fa-circle text-success"></i>
          <span className="text-muted">CDN Delivery</span>
        </div>

        <div className="d-flex gap-2 align-items-center mb-2 small">
            <i class="fa-solid fa-circle text-warning"></i>
          <span className="text-muted">Background Jobs</span>
        </div>

      </div>
    </div>
  </div>
</div>
    )

}
export default Hero;