export const MakeStudentValidator=(data:{
    rollNo:string,
})=>{
if(!data.rollNo || data.rollNo.trim().length<3){
    return{
        valid:false,
        message:"rollNo length must be atleast 3 characters"
    };
}
return{
    valid:true,
}
}