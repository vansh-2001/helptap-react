import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { signIn, signUp } from "../services/authService";
import { getCampList } from '../services/campService';
import { getCampStart, getCampSuccess, getCampFailure } from './campSlice'

//login user
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await signIn(user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};

//register user
export const register = async (user) => {
    // dispatch(loginStart());
    try {
        const res = await signUp(user);
        // dispatch(loginSuccess(res.data));
    } catch (error) {
        console.log("Error", error)
        // dispatch(loginFailure());
    }
};


//get camp List
export const getAllCamps = async (dispatch) => {
    dispatch(getCampStart());
    try {
        const res = await getCampList();
        dispatch(getCampSuccess(res.data));
    } catch (error) {
        console.log("Error", error)
        dispatch(getCampFailure());
    }
};