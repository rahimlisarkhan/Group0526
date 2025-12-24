import { Button, Flex } from "antd";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";



export default function Create() {

  const navigate = useNavigate()

  return (
    <Layout>
        <Flex gap={12} align="center" >

        <Button onClick={() => navigate(-1)} >
          Back
        </Button>
          <h1>Create a New Blog Post</h1>
        </Flex>
      {/* Form elements for creating a blog post would go here */}
    </Layout>
  )
}