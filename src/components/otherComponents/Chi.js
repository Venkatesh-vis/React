import { memo } from "react"


const Child = ({val,func}) => {
    console.log("child");
    return(
        <>
        {
            val.map((a)=>{
                return(
                    <>
                    <p>{a}</p>
                    </>
                )
            })
        }
        <button onClick={func}>add todo</button>
        </>
    )
}
export default memo(Child)