import axios from "axios";
export const getCart=async (user)=>{
    const res=await axios.get(`http://localhost:8080/api/getCart/${user._id}`);

    const data=await res.data;

    return data;
}