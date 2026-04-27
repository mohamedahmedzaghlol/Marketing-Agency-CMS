import info from "../assets/Background (1).png"
import imag from "../assets/Background (2).png"
import image2 from "../assets/Background.png"
import imag3 from "../assets/Background (3).png"
import imag4 from "../assets/Text.png"
import imag5 from "../assets/(4).png"
function Page22() {
    return (
        <>
        <div className="container">
           <div>
            <h3>Dashboard Overview</h3>
            <p>Welcome back. Here is a summary of your content metrics.</p>
           </div> 
           <div>
        </div>
       <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 border-1 shadow-sm p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="rounded p-2" style={{ backgroundColor: '#e7f0ff', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={imag} style={{ width: '22px' }} alt="..." />
        </div>
        <span className="badge bg-light text-secondary fw-normal border" style={{ fontSize: '0.75rem' }}>+12% this week</span>
      </div>
      
      <div className="mt-4">
        <p className=" text-secondary " >Total Posts</p>
        <h2 >1,284</h2>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 border-1 shadow-sm p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="rounded p-2" style={{ backgroundColor: '#e8f5e9', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={info} style={{ width: '22px' }} alt="..." />
        </div>
        <span className="badge bg-light text-secondary fw-normal border" style={{ fontSize: '0.75rem' }}>Live</span>
      </div>
      
      <div className="mt-4">
        <p className=" text-secondary " >Published</p>
        <h2 >942</h2>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 border-1 shadow-sm p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="rounded p-2" style={{ backgroundColor: '#f0f4f4', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={image2} style={{ width: '22px' }} alt="..." />
        </div>
        <span className="badge bg-light text-secondary fw-normal border" style={{ fontSize: '0.75rem' }}>Needs Review</span>
      </div>
      
      <div className="mt-4">
        <p className=" text-secondary" >Drafts</p>
        <h2 >342</h2>
      </div>
    </div>
  </div>
</div>





         </div>


         
        </>
    )
}
export default Page22;