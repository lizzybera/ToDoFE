import { useState } from "react"
import "./HeaderStyling.css"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import useUser from "../../global/jotai"
import { Link } from "react-router-dom"

const Header = () => {
    const [user, setUser] = useUser()
    console.log(user);
    

    const [toggle, setToggle] = useState<boolean>(false)

    const onToogle = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className="w-full h-[70px] bg-green-300 justify-center items-center flex " >
        <div className="w-[90%] h-full justify-between flex items-center">
    <div className="">Logo</div>
    <div>userName</div>
    <div className="menu"> 
    {
        toggle? 
        <AiOutlineClose onClick={()=>{
            onToogle()
        }} />
        :  <AiOutlineMenu onClick={()=>{
            onToogle()
        }} /> 
    }
    </div>
    <div className="logout">
        <div className="h-[40px] w-[100px] flex justify-center items-center bg-white rounded-lg text-green-500 font-[500] cursor-pointer"
        onClick={()=>{
            setUser(null)
        }}
        >LogOut</div>
    </div>


    
        </div>

        {
            toggle?
             <div className="w-full absolute h-[80px] bg-white border top-[70px] z-40">
            <Link to="/task">
            <div className="w-full border-b h-[40px] flex items-center px-3 text-green-400 font-[500]">
                Task
            </div></Link>
            <Link to="/progress">
            <div className="w-full h-[40px] flex items-center px-3 text-green-400 font-[500]">
                Progress
            </div>
            </Link >
            <Link to="/done">
            <div className="w-full border-b h-[40px] flex items-center px-3 text-green-400 font-[500]">
                Done
            </div>
            </Link>

            <div className="w-full border-b h-[40px] flex items-center px-3 text-green-400 font-[500]"
            onClick={()=>{
                setUser(null)
            }}
            >
                LogOut
            </div>
                </div> : null
        }

    </div>
  )
}

export default Header