import axios from "axios"

const url : string = "https://todobe-x7ru.onrender.com/api"

export const taskApi = async (userID : any, data : any) =>{
    return await axios.post(`${url}/${userID}/todo`, {task : data}).then((res : any)=>{
        return res.data.data
    })
}

export const progressApi = async (userID : any, data : any) =>{
    return await axios.post(`${url}/${userID}/progress`, {task : data}).then((res : any)=>{
        return res.data.data
    })
}

export const viewApi = async () =>{
    return await axios.get(`${url}/all-todo`).then((res : any)=>{
        return res.data.data
    })
}