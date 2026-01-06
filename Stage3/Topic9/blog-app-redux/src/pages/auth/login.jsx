
import Layout from "../../components/Layout/Layout";
import { useFormik } from "formik";
import { Input, Button, Typography, notification } from "antd";
import "antd/dist/reset.css";
import { authSignin } from "../../api/auth.api";
import { useGlobal } from "../../store/global/useGlobal";
import { TYPES } from "../../store/global/types";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constants/router";

export default function Login() {

  const {dispatch} = useGlobal()

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await authSignin(values);

        localStorage.setItem("access_token", response.data.data.tokens.access_token);
        
        dispatch({ type: TYPES.SET_PROFILE, payload: response.data.data.profile });

        navigate(ROUTER.SCREENS.BLOG);

        notification.success({
          message: "Sign in successful",
          description: "You have successfully signed in.",
        });
      } catch (error) {

        console.log("error",error);
        

        notification.error({
          message: "Sign in failed",
          description: "There was an error signing in. Please try again.",
        });
      }
    },
  });

  return (
    <Layout>
      <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        Sign In
      </Typography.Title>
      <form onSubmit={formik.handleSubmit} style={{ maxWidth: 350, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="email"
            size="large"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input.Password
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="current-password"
            size="large"
          />
        </div>
        <Button variant="solid" color="purple" htmlType="submit" size="large" block>
          Sign In
        </Button>
      </form>
    </Layout>
  );
}