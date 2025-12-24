import { useNavigate, useParams } from "react-router-dom"
import Layout from "../../components/Layout/Layout";
import { useEffect } from "react";
import { useGlobal } from "../../store/global/useGlobal";
import { deleteBlog, getBlogId } from "../../api/blog.api";
import { Loading } from "../../components/Loading";
import {Typography, Button, Flex, notification} from "antd"
import { ROUTER } from "../../constants/router";



export default function Detail() {

  const { id } = useParams();
  const navigate = useNavigate();


  const {actions, loading, blog,blogs} = useGlobal()




  const handleRemove = async () => {

   try {
      await deleteBlog(id);

      notification.success({
        message: 'Blog Deleted',
        description: 'The blog has been deleted successfully.',
      });
      
      const updatedBlogs = blogs.filter(b => b.id.toString() != id);
      actions.setBlogs(updatedBlogs);
      navigate(-1);
    } catch (error) {

      notification.error({
        message: 'Error',
        description: error?.message ?? 'There was an error deleting the blog.',
      });
    }
  }
  


   // Effects
   useEffect(()=>{
 
     async function fetchData() {
      if(!id) return;
 
       actions.setLoading(true);
 
       const data = await getBlogId(id)

       actions.setBlog(data);
 
       actions.setLoading(false);
     }
 
     fetchData()
     
   }, [id])


     if (loading) {
       return (
         <Layout>
           <Loading/>
         </Layout>
       );
     }

  return (
    <Layout>
      <Flex gap={12} vertical align="start">
        <Flex gap={8}>
          <Button size="small" onClick={()=> navigate(-1)}>Go Back</Button>
          <Button size="small" variant="solid" color="danger" onClick={handleRemove}>Remove</Button>
          <Button size="small"  variant="solid" color="green" onClick={()=> navigate(`/blog/create?id=${id}`)}>Edit</Button>

        </Flex>
      <Typography.Title level={3}>#{id} {blog?.title}</Typography.Title>
      <Typography.Text>{blog?.body}</Typography.Text>
      </Flex>

      
      {/* <Link to="/blogs" className="blog-btn" >Back to Blogs</Link> */}
    </Layout>
  )
}