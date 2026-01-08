export const validatePhone=(phone:String)=>{
if(!phone){
    return false;
}
const cleaned=phone.trim();
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(cleaned);
}