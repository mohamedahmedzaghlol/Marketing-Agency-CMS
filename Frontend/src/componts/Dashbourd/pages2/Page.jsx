

import styles from "./Page.module.css"
import { Link } from "react-router-dom";
function Page22() {
    return (
        <>
        <div className="">
      <div className="d-flex justify-content-between align-items-center">
  <h3 className="mb-0">Dashboard Overview</h3>
  <div>
   <Link to="/new-post" className="btn btn-warning text-dark fw-bold">
  + New post
</Link>
  </div>
</div>
<div className="row g-4 mb-4">
  <div className="col-md-4 ">
    <div className={`${styles.button} border-0 shadow-sm text-white p-3`}>
      <p className="mb-0 text-uppercase small fw-bold opacity-75">
        Total Posts
      </p>
      <h2 className="mb-0 fw-bold">12</h2>
    </div>
  </div>

  <div className="col-md-4">
    <div className={`${styles.buttonn} border-0 shadow-sm text-white p-3`}>
      
      <p className="mb-0 text-uppercase small fw-bold opacity-75">
        Published
      </p>
      <h2 className="mb-0 fw-bold">10</h2>
    </div>
  </div>

  <div className="col-md-4">
    <div className={`${styles.buttonnn} border-0 shadow-sm text-white p-3`}>
      
      <p className="mb-0 text-uppercase small fw-bold opacity-75">
        Drafts
      </p>
      <h2 className="mb-0 fw-bold">2</h2>
    </div>
  </div>

</div>

         </div>
<div className=" my-4">
  <div>

    <div className="d-flex justify-content-between align-items-center mb-3  shadow-sm border-0 p-3">
      <h6 className="mb-0 fw-bold">Recent Posts</h6>
      <button className="btn btn-sm btn-outline-secondary">
        View All →
      </button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">TITLE</th>
          <th scope="col">CAEOORY</th>
          <th scope="col">STATUS</th>
          <th scope="col">DATA</th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hyndaia 120</td>
          <td>Hatchback care</td>
          <td><span className="badge bg-success">Published</span></td>
          <td>5/5/2026</td>
          <td><button className="btn btn-sm btn-outline-primary">
                    <i className="fa-solid fa-pencil"></i>
                  </button>   
                 </td>          
        </tr>
        <tr> 
          <td>Ford focus</td>
         <td>Hatchback care</td>
           <td><span className="badge bg-success">Published</span></td>
           <td>5/5/2026</td>
          <td><button className="btn btn-sm btn-outline-primary">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  </td>
        </tr>
        <tr>
          <td>Hatchback care</td>
          <td>Hatchback care</td>
           <td><span className="badge bg-success">Published</span></td>
          <td>5/5/2026</td>
          <td><button className="btn btn-sm btn-outline-primary">
                    <i className="fa-solid fa-pencil"></i>
                  </button>   
                  </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </>
    )
}
export default Page22;