import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'

// Pages
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import NotFound from "./pages/not_found";
// import Blog from "./pages/blog";
// import Detail from "./pages/blog/detail";
// import SettingRoute from "./pages/settings";


import { ROUTER } from "./constants/router";
import Conversation from "./pages/chat/conversation";
import  { Suspense,lazy } from "react";
// import { useFetchData } from "./hooks/useFetchData";
// import { getProfile } from "./services/auth";
import { GlobalStore } from "./store/global/globalProvider";


const Login =  lazy(() => import( "./pages/auth/login"));
const SignUp =  lazy(() => import( "./pages/auth/signup"));

const Home =  lazy(() => import( "./pages/home"));
const About =  lazy(() => import( "./pages/about"));
const Contact =  lazy(() => import( "./pages/contact"));
const NotFound =  lazy(() => import( "./pages/not_found"));
const Blog =  lazy(() => import( "./pages/blog"));
const Detail =  lazy(() => import( "./pages/blog/detail"));
const SettingRoute =  lazy(() => import( "./pages/settings"));


function App() {

  // const { data } = useFetchData(getProfile, null);

  // console.log("data",data);
  
  return (
    <BrowserRouter>
      <GlobalStore>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path={ROUTER.SCREENS.AUTH.LOGIN} element={<Login />} />
              <Route path={ROUTER.SCREENS.AUTH.SIGNUP} element={<SignUp />} />
              <Route path={ROUTER.SCREENS.HOME} element={<Home />} />
              <Route path={ROUTER.SCREENS.ABOUT} element={<About />} />

              <Route path={ROUTER.SCREENS.CONTACT} element={<Contact />} />

              <Route path={ROUTER.SCREENS.BLOG} element={<Blog />} />
              <Route path={ROUTER.SCREENS.BLOG_DETAIL} element={<Detail />} />

              {/* <Route path="chat/:room/:conversation_id" element={<Conversation />} /> */}
              <Route path="chat/:num1/:operator/:num2" element={<Conversation />} />

              <Route path={ROUTER.SCREENS.SETTINGS.BASE} element={<SettingRoute />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="*" element={<Navigate to={data ? ROUTER.SCREENS.HOME : ROUTER.SCREENS.AUTH.LOGIN} />} /> */}
          </Routes>
        </Suspense>
      </GlobalStore>
    </BrowserRouter>
  )
}

export default App



//? 