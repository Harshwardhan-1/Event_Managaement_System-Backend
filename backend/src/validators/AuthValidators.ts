import { validatePhone } from "../utils/validatePhone";

export const signUpValidator=(data:{
    name:string,
    password:string,
})=>{
    if(!data.name || data.name.trim().length<3){
        return{
            valid:false,
            message:"name must have at least 3 characters",
        };
    }   
    if(!data.password || data.password.trim().length<3){
        return{
            valid:false,
            message:"password must have atleast 3 character",
        };
    }
    return {
        valid:true,
    };
}