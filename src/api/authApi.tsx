import axios from "axios"

const url : string = "https://todobe-x7ru.onrender.com/api"

export const registerApi = async (data : any) =>{
    return await axios.post(`${url}/reg`, data).then((res : any)=>{
        return res.data.data
    })
}

export const signApi = async (data : any) =>{
    return await axios.post(`${url}/sign`, data).then((res : any)=>{
        return res.data.data
    })
}