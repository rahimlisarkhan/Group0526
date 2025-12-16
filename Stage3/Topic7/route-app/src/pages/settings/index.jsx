import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./profile";
import Password from "./password";
import Notification from "./notification";
import Header from "../../components/Header";
import { ROUTER } from "../../constants/router";





export default function SettingRoute(){

    const navigate = useNavigate();

    return(
        <div>
            <Header/>
            <div className="setting-bar">
                <h1>Settings Bar</h1>
                <div>
                    <button onClick={() => navigate(ROUTER.ACTIONS.SETTINGS_PROFILE)}>Profile</button>
                    <button onClick={() => navigate(ROUTER.ACTIONS.SETTINGS_PASSWORD)}>Password</button>
                    <button onClick={() => navigate(ROUTER.ACTIONS.SETTINGS_NOTIFICATION)}>Notification</button>
                </div>
            </div>
            <div className="setting-content">
            <Routes>
                <Route path={"profile"} element={<Profile />} />
                <Route path={"password"} element={<Password />} />
                <Route path={"notification"} element={<Notification />} />
            </Routes>
            </div>
        </div>
)} 