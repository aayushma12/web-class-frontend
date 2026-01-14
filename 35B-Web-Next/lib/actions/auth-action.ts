//server side processing

"use server";

import { register } from "../api/auth";

export const handleRegister = async (formData: any) => {
    try{
        //how data sent from coomponent to backend api
        const res= await register(formData);
        //component return logic
        if(res.success){
            return {
                success:true,
                data: res.data,
                message: "Registration successful"
            };
        }
        return { success:false, message: res.message || "Registration failed" };
    }catch(err: Error | any){
        return {
            success:false,
            message: err.message || "Registration failed"
        };
    }
}