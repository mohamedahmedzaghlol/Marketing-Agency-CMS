import logo from "../../../assets/png-clipart-red-audi-sedan-audi-rs-transport-cars.png";
import imag from "../../../assets/png-transparent-audi-a3-car-audi-q3-audi-quattro-audi-a3-compact-car-sedan-car-thumbnail.png"
import image from "../../../assets/2018-audi-a3-audi-sportback-concept-car-audi-s3-png-favpng-uhZ6k25V2pmbiySAbm1bY97vD.jpg"
import './ManagePosts.modules.css';
 function ManagePosts(){
    return(
        <>
              <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Manege posts</h3>
               <div>
             <a href="#" className="btn bg-warning">
             + New post
             </a>
             </div>
               </div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">IMADE</th>
      <th scope="col">TITLE</th>
      <th scope="col">CAEOORY</th>
      <th scope="col">STATUS</th>
      <th scope="col">DATA</th>
      <th scope="col">ACTION</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> <img 
                       src={logo}alt="Logo" style={{width:"33px"}}/></th>
      <td>Hyndaia 120</td>
      <td><span className="badge bg-warning">Hatchback care</span></td>
      <td><span className="badge bg-success">Published</span></td>
      <td>5/5/2026</td>
      <td><button className="btn btn-sm btn-outline-primary">
                <i className="fa-solid fa-pencil"></i>

              </button>
              <button className="btn btn-sm btn-outline-danger ms-2">
                <i class="fa-regular fa-trash-can"></i>

              </button>
              </td>
              
    </tr>
    <tr>
      <th scope="row"> <img 
                       src={imag}alt="Logo" style={{width:"33px"}}/></th>
      <td>Ford focus</td>
      <td><span className="badge bg-warning">Hatchback care</span></td>
       <td><span className="badge bg-success">Published</span></td>
       <td>5/5/2026</td>
      <td><button className="btn btn-sm btn-outline-primary">
                <i className="fa-solid fa-pencil"></i>

              </button>
              <button className="btn btn-sm btn-outline-danger ms-2">
                <i class="fa-regular fa-trash-can"></i>

              </button>
              </td>
    </tr>
    <tr>
      <th scope="row"><img 
                       src={image}alt="Logo" style={{width:"33px"}}/></th>
      <td>Hatchback care</td>
      <td><span className="badge bg-warning">Hatchback care</span></td>
       <td><span className="badge bg-success">Published</span></td>
      <td>5/5/2026</td>
      <td><button className="btn btn-sm btn-outline-primary">
                <i className="fa-solid fa-pencil"></i>

              </button>
              <button className="btn btn-sm btn-outline-danger ms-2">
                <i class="fa-regular fa-trash-can"></i>

              </button>
              </td>
    </tr>
    
    
    
  </tbody>
</table>
        </>
    )
}
export default ManagePosts;