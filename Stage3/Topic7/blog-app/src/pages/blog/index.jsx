import { useNavigate } from "react-router-dom"
import { ROUTER } from "../../constants/router";
import Layout from "../../components/Layout/Layout";
import {Flex,Typography,Button} from "antd"
import { useCallback, useEffect, useMemo } from "react";
import { getBlogs } from "../../api/blog.api";
import { useGlobal } from "../../store/global/useGlobal";
import BlogCard from "../../components/BlogCard";
import { Loading } from "../../components/Loading";


export default function Blog() {

  const navigate = useNavigate();

  const {actions,loading,blogs} = useGlobal()

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


  // Functions
  const fetchData = useCallback(async () => {

    if(blogs.length) return;

    actions.setLoading(true);

    const response = await getBlogs();

    actions.setBlogs(response.data);

    actions.setLoading(false);
  }, [actions, blogs.length]);


  // Effects
  useEffect(()=>{
    fetchData()
  }, [fetchData])


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

        <Flex gap={12}>
        <Button size="default" variant="solid"  onClick={fetchData} >
          Refresh
        </Button>

        <Button color="purple" variant="solid" onClick={()=> navigate(ROUTER.ACTIONS.BLOG_CREATE)} >
          Create 
        </Button>
        </Flex>
      </Flex>
    {/* BLOG CARDS */}
    <div className="blog-cards">
      {renderBlogs}
    </div>

    </Layout>
  )
}