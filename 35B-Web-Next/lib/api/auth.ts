//Actual backend API calls
import axios from "axios"; //Important: axios instance with  base URL
import { API } from "./endpoints"; //backend routes

export const register = async (registerData: any) => {
    try {
        const response = await axios.post(API.AUTH.REGISTER, registerData);
        return response.data; //response ko body(what backend returns)
    } catch (err: Error | any) {
        throw new Error(
            err.response?.data?.message //backend error message
            || err.message //axios error message
            || "Registration failed"
        )
    }
}