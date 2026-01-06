import { useEffect } from "react";
import { authGetProfile } from "../api/auth.api";
import { useGlobal } from "../store/global/useGlobal";
import { TYPES } from "../store/global/types";


export const useProfile = () => {

    const {dispatch, state} = useGlobal()
    
      useEffect(() => {
        const fetchProfile = async () => {
          try {
            dispatch({ type: TYPES.SET_LOADING, payload: true });
    
            const response = await authGetProfile();
              
            dispatch({ type: TYPES.SET_PROFILE, payload: response.data.data });
            dispatch({ type: TYPES.SET_LOADING, payload: false });
    
          } catch (error) {
            console.log("Error fetching profile:", error);
          }
        };
    
        fetchProfile();
      }, [dispatch]);
    
    
      const isAuthenticated = !!state.profile;

    return {isAuthenticated, profile: state.profile, loading: state.loading};

    }