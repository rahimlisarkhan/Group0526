import { Route, Routes } from "react-router-dom";
import './App.css'

import { ROUTER } from "./constants/router";
import  { Suspense,lazy } from "react";
import { Loading } from "./components/Loading";
import Layout from "./components/Layout/Layout";
import { useProfile } from "./hooks/useProfile";


const Login =  lazy(() => import( "./pages/auth/login"));
const SignUp =  lazy(() => import( "./pages/auth/signup"));

const Home =  lazy(() => import( "./pages/home"));
const About =  lazy(() => import( "./pages/about"));
const Contact =  lazy(() => import( "./pages/contact"));
const NotFound =  lazy(() => import( "./pages/not_found"));
const Blog =  lazy(() => import( "./pages/blog"));
const Detail =  lazy(() => import( "./pages/blog/detail"));
const Create =  lazy(() => import( "./pages/blog/create"));
const SettingRoute =  lazy(() => import( "./pages/settings"));


function App() {
  const { isAuthenticated } = useProfile()

  return (
        <Suspense
          fallback={
            <Layout>
              <Loading />
            </Layout>
          }
        >
          <Routes>
            {!isAuthenticated ? 
            <>
              <Route path={ROUTER.SCREENS.AUTH.LOGIN} element={<Login />} />
              <Route path={ROUTER.SCREENS.AUTH.SIGNUP} element={<SignUp />} />
            </>
            :
            <>
              <Route path={ROUTER.SCREENS.HOME} element={<Home />} />
              <Route path={ROUTER.SCREENS.ABOUT} element={<About />} />
              <Route path={ROUTER.SCREENS.CONTACT} element={<Contact />} />
              <Route path={ROUTER.SCREENS.BLOG} element={<Blog />} />
              <Route path={ROUTER.SCREENS.BLOG_DETAIL} element={<Detail />} />
              <Route path={ROUTER.SCREENS.BLOG_CREATE} element={<Create />} />
              <Route path={ROUTER.SCREENS.SETTINGS.BASE} element={<SettingRoute />} />
            </>
            }
            <Route path="*" element={<NotFound />} />
       
          </Routes> 
        </Suspense>
  );
}

export default App



//? 


