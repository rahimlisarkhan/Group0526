import { Button, Flex, Input, Form,notification, Typography } from "antd";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createBlog, updateBlog } from "../../api/blog.api";
import { useFormik } from "formik";
import { useGlobal } from "../../store/global/useGlobal";
import { useCallback, useEffect } from "react";

export default function Create() {

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const blogId = searchParams.get("id")

  const {actions, blogs} = useGlobal()

  const handleSubmit = useCallback(async (values, { resetForm }) => {

      const payload = {
          title: values.title,
          body: values.body,
        }

      const response = blogId ? await updateBlog(blogId, payload) : await createBlog(payload);

      actions.setBlogs([response.data, ...blogs]);

      notification.success({
          title: blogId ? 'Blog Updated' : 'Blog Created',
          description: blogId ? 'Your blog has been updated successfully.' : 'Your blog has been created successfully.',
        })

        resetForm();
        navigate(-1);

  }, [blogId, navigate, actions, blogs]);


  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit:handleSubmit,
  });


  useEffect(() => {
    if (blogId) {
      const blogToEdit = blogs.find((blog) => blog.id === parseInt(blogId));
      if (blogToEdit) {
        formik.setValues({
          title: blogToEdit.title,
          body: blogToEdit.body,
        });
      }
    }
  }, [blogId, blogs]);

  return (
    <Layout>
      <Form
        layout="vertical"
        onFinish={formik.handleSubmit}
        style={{ maxWidth: 500, margin: "0 auto" }}
      > 
      <Typography.Title level={2} style={{ textAlign: "center" }}>
          {blogId ? "Edit Blog" : "Create New Blog"}
        </Typography.Title>

        <Form.Item label="Title" required>
          <Input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter blog title"
          />
        </Form.Item>
        <Form.Item label="Body" required>
          <Input.TextArea
            name="body"
            value={formik.values.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter blog content"
            rows={6}
          />
        </Form.Item>
        <Form.Item>
          <Flex gap={12}>
         <Button onClick={() => navigate(-1)}>Back</Button>
          <Button variant="solid" color="purple" htmlType="submit" loading={formik.isSubmitting}>
           {blogId ? "Update Blog" : "Create Blog"}
          </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Layout>
  );
}