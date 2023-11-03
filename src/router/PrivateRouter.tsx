import React, { PropsWithChildren } from 'react'
import useUser from '../global/jotai'
import { Navigate } from 'react-router-dom'

const PrivateRouter: React.FC<PropsWithChildren> = ({children}) => {
    const [self, useSelf] = useUser()
    console.log("state", useSelf);
    
  return (
    <div>
        {
            self ? <div>{children}</div> : <Navigate to="/sign-in" /> 
        }
    </div>
  )
}

export default PrivateRouter