import { useState } from "react"
import { taskApi } from "../../api/taskApi"
import useUser from "../../global/jotai"
import { useViewtask } from "../../hooks/useHooks"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useAutoAnimate} from "@formkit/auto-animate/react"
// import { useNavigate } from "react-router-dom"


const Task = () => {
    const [user, setUser] = useUser()
    const {tasks} = useViewtask()

    // const userID = user

    const [parent] = useAutoAnimate()

    console.log(setUser)
    console.log(user);
    
    const [add, addSet] = useState<boolean>(false)
    // const [tasked, setTasked] = useState<string>("")


    const onSet = () =>{
        addSet(!add)
    }

    // const navigate = useNavigate()
  
    const model = yup.object({
      task : yup.string().required()
    })
  
    const { 
      handleSubmit, register, 
    //   formState : {errors} 
    } = useForm({
      resolver : yupResolver(model)
    })

  
    const onhandleSubmit = handleSubmit((data : any)=>{
      const {task} = data
  
      taskApi(user, task).then(()=>{
        // onSet()
      })
  
    })
    
  return (
    <div className=' w-[300px] justify-center flex  h-[200px]  mt-4 mr-4 '>
        <div className="w-[300px]">
            <div className="px-5 flex justify-between items-center h-[50px] bg-yellow-400 w-full">
            <div>tasks</div>
            <div className="cursor-pointer"
            onClick={()=>{
                onSet()
            }}
            >Add</div>
            </div>

            {
                add? <form onSubmit={onhandleSubmit} className="w-full h-full border-b duration-[350ms] flex flex-col justify-center mt-[-8px]">
                <div className="px-4 mb-2">input task</div>

                <input className=" px-8 w-full h-[50px] outline-0 border" placeholder="input task" 
                // value={tasked}
                // onChange={(e:any)=>{
                //     setTasked(e.target.value)
                // }}
                {...register("task")}
                />

                <button type="submit" className="p-2 mx-2 flex justify-center items-center cursor-pointer bg-green-600 mt-2 rounded-md hover:bg-green-600 duration-150"
                // onClick={()=>{
                //     taskApi(user, tasked).then((res : any)=>{
                //         console.log(res);
                        
                //     })
                // }}
                >create Task</button>
            </form> : null
            }

            <div ref={parent}>
            {
                tasks?.map((props : any)=>(
                    <div key={props._id}>
                        <div className=" px-5 py-4  flex items-center justify-between bg-white border-b-2">
                <div className="p-3">{props.task}</div>
                <div className="">
                <div className="p-2 flex justify-center items-center bg-green-600 mt-2 rounded-md cursor-pointer hover:bg-green-400 duration-150">progress</div>
                <div className="p-2 flex justify-center items-center cursor-pointer bg-green-600 mt-2 rounded-md hover:bg-green-600 duration-150">done</div>
                </div>
            </div>
                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default Task