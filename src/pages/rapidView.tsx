import React, { useState, useEffect } from "react"
import { rapidApi } from "../api/rapidTestApi"

const rapidView = () => {
    const [state, setState] = useState<Array<{}>>([])

    useEffect(()=>{
        rapidApi().then((res : any)=>{
            setState(res?.items)
        })
    }, [])

    console.log(state);
    
  return (
    <div>
        <div>
            {
                state?.map((props: any)=>(
                <div>
                    {/* <rapids key={props.id.videoId} 
                props={props} /> */}
                </div>
                )
                    )

             }
            
        </div>
    </div>
  )
}

export default rapidView



interface iprops {
    props : any
}
export const rapids: React.FC<iprops> = ({props}) => {
  return (
    <div>
        <div>
        <img src={props.snippet.thumbnails.high.url} />
        </div>
    </div>
  )
}