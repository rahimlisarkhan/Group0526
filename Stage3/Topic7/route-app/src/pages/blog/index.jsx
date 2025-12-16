import { useNavigate } from "react-router-dom"
import Header from "../../components/Header";
import { ROUTER } from "../../constants/router";


export default function Blog() {

  const navigate = useNavigate();

  return (
    <div>
      <Header/>
    <h1>Blog Page</h1>

    {/* BLOG CARDS */}
    <div className="blog-cards">
      <div className="blog-card">
        <h2>Blog Post 1</h2>
        <p>This is a summary of blog post 1.</p>
        <button className="blog-btn" onClick={()=> navigate(ROUTER.ACTIONS.BLOG_ID + '1')} >Read More</button>
      </div>
      <div className="blog-card">
        <h2>Blog Post 2</h2>
        <p>This is a summary of blog post 2.</p>
        <button className="blog-btn" onClick={()=> navigate(ROUTER.ACTIONS.BLOG_ID + '2')} >Read More</button>
      </div>
        <div className="blog-card">
          <h2>Blog Post 3</h2>
          <p>This is a summary of blog post 3.</p>
          <button className="blog-btn" onClick={()=>navigate(ROUTER.ACTIONS.BLOG_ID + '3')} >Read More</button>
        </div>  
     </div>  

    </div>
  )
}