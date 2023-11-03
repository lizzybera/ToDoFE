import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { registerApi } from "../../api/authApi"
import Swal from "sweetalert2"


const Register = () => {
    const navigate = useNavigate()
  
    const model = yup.object({
      userName : yup.string().required(),
      email : yup.string().required(),
      password : yup.string().required()
    })
  
    const { 
      handleSubmit, register, formState : {errors} } = useForm({
      resolver : yupResolver(model)
    })

  
    const onhandleSubmit = handleSubmit((data : any)=>{
      const {email, password, userName} = data
  
      registerApi({email, password, userName}).then((res : any)=>{
          if(res){
              Swal.fire({
                  icon : 'success',
                  title: `Registered Successfully` ,
                  showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate("/sign-in")
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!, un-able to Register',
            })
            navigate("/reg")
          }
        
      })
  
    })
  return (
    <div className="w-full flex justify-center items-center h-[100vh] bg-green-900">
        <div className="w-[450px] items-center justify-center rounded-lg mobile:w-[250px]">
            <div className="w-full bg-green-700 py-9 justify-center items-center flex text-[35px] font-[700] text-white rounded-t-lg duration-300 mobile:text-[20px] mobile:py-4">
                Sign Up
            </div>

            <form className="w-full px-9 mobile:px-4 py-3 bg-white rounded-b-lg" onSubmit={onhandleSubmit}> 
                {/* name */}
                <div className="my-3">
        <div className="flex h-[45px] mobile:h-[40px]  w-full items-center border-[1px] border-green-600 rounded-md">
            <div className="w-[80px] mobile:w-[65px] mobile:font-[500] font-[700] text-white bg-green-600 h-full items-center justify-center flex rounded-l-sm mobile:text-[15px]">name</div>
            <input type="text" placeholder="userName" className="w-full h-full px-5 mobile:px-3 bg-none rounded-md outline-0" {...register("userName")}/>
        </div>
        {
            errors.userName?.message && <div className="text-end text-rose-600 mobile:text-[15px]">error</div>
        }
        </div>
                {/* email */}
                <div className="my-3">
        <div className="flex h-[45px] mobile:h-[40px]  w-full items-center border-[1px] border-green-600 rounded-md">
            <div className="w-[80px] mobile:w-[65px] mobile:font-[500] font-[700] text-white bg-green-600 h-full items-center justify-center flex rounded-l-sm mobile:text-[15px]">email</div>
            <input type="text" placeholder="email" className="w-full h-full px-5 mobile:px-3 bg-none rounded-md outline-0" {...register("email")} />
        </div>
        {
            errors.email?.message && <div className="text-end text-rose-600 mobile:text-[15px]">error</div>
        }
        </div>
                {/* password */}
                <div className="my-3">
        <div className="flex h-[45px] mobile:h-[40px]  w-full items-center border-[1px] border-green-600 rounded-md">
            <div className="w-[80px] mobile:w-[65px] mobile:font-[500] font-[700] text-white bg-green-600 h-full items-center justify-center flex rounded-l-sm mobile:text-[15px]">password</div>
            <input type="text" placeholder="password" className="w-full h-full px-5 mobile:px-3 bg-none rounded-md outline-0" {...register("password")} />
        </div>
        {
            errors.password?.message && <div className="text-end text-rose-600 mobile:text-[15px]">error</div>
        }
        </div>

        <button type="submit" className="w-full bg-green-500 h-[40px] rounded-2xl text-white text-[20px] cursor-pointer font-[500] justify-center items-center flex">
            register
        </button>

        <div className="w-full flex justify-center items-center my-3 text-green-700">
            have an Account? <Link to="/sign-in">
            <span className="ml-2 cursor-pointer"> signIn</span></Link>
        </div>
           
  
            </form>
        </div>
    </div>
  )
}

export default Register