import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../constants/router";
import Layout from "../../components/Layout/Layout";
import {Flex,Typography,Button} from "antd"


export default function Blog() {

  const navigate = useNavigate();

  return (
    <Layout>
      <Flex justify="space-between" align="center" style={{marginBottom: '20px'}}>
        <Typography.Title level={2}>Blog Page</Typography.Title>
        <Button color="purple" variant="solid" onClick={()=> navigate(ROUTER.ACTIONS.BLOG_CREATE)} >
          Create 
        </Button>
      </Flex>
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

    </Layout>
  )
}