import { Button, Flex, Typography } from "antd";
import Layout from "../components/Layout/Layout";




export default function NotFound() {
  return (
    <Layout>
        <Flex vertical gap={16} align="center" justify="center" >
        <Typography.Title level={2}>Oops! The page you're looking for doesn't exist.</Typography.Title>
        <Typography.Text>The page you are looking for does not exist.</Typography.Text>
        <Button variant="solid" color="purple" href="/">
          Go to Home
        </Button>
      </Flex>
    </Layout>
  )
}