import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../constants/router";
import Layout from "../../components/Layout/Layout";
import {Flex,Typography,Button, Spin} from "antd"
import { useEffect, useMemo } from "react";
import { getBlogs } from "../../api/blog.api";
import { useGlobal } from "../../store/global/useGlobal";
import BlogCard from "../../components/BlogCard";
import { Loading } from "../../components/Loading";


export default function Blog() {

  const navigate = useNavigate();

  const {actions,loading,blogs} = useGlobal()


  console.log("blogs",blogs);


  // Values
  const renderBlogs = useMemo(() => {
    return blogs.map(blog => (
      <BlogCard
        key={`blog-${blog.id}`}
        title={blog.title}
        summary={blog.body}
        onReadMore={() => navigate(ROUTER.ACTIONS.BLOG_ID + blog.id)}
      />
    ));
  }, [blogs, navigate]);



  // Effects
  useEffect(()=>{

    async function fetchData() {

      actions.setLoading(true);

      const res = await getBlogs()
      actions.setBlogs(res.data);

      actions.setLoading(false);
    }
    fetchData()
  }, [])


  if (loading) {
    return (
      <Layout>
        <Loading/>
      </Layout>
    );
  }


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
      {renderBlogs}
    </div>

    </Layout>
  )
}