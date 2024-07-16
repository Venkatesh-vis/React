import { useEffect, useMemo, useState } from "react"
import Child from "./Chi"

const Mem = () => {
    const[c,setC]= useState(0)
    // const[todo,setTodo]=useState([])

    // const inc = ()=>{
    //     setC((c)=>c+1)
    // }

    // const to = ()=>{
    //     setTodo((t)=>[...t,"newtodo"])
    // }

    // const expcal = (n)=>{
    //     for(let i=0;i<=100000000;i++){
    //         n+=1
    //     }
    //     return n
    // }

    // const calc = useMemo(()=>{
    //     expcal(c)
    // },[c])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setC((c)=>c+1)
        },1000)

        return()=>clearTimeout(timer)

    },[])


    return(
        <>
        {/* <Child val={todo} func={to}/>
        <div>
            <p>{c}</p>
            <button onClick={inc}>increase</button>
        </div>
        <p>{calc}</p> */}
        </>
    )
}
export default Mem