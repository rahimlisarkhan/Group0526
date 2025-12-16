import { Link, useNavigate, useParams } from "react-router-dom"




export default function Detail() {

    const { id } = useParams();
    const navigate = useNavigate();

  return (
    <div>
      <h1>Blog Detail Page:{id}</h1>
      {/* <Link to="/blogs" className="blog-btn" >Back to Blogs</Link> */}
      <button className="blog-btn" onClick={()=> navigate(-1)} >Go Back</button>
    </div>
  )
}