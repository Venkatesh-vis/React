import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import Button from 'react-bootstrap/Button';



const Prod = ()=>{

    const[items,setItems]=useState([])
    const[item,setItem]=useState({})

    useEffect(()=>{
        fetchdata()
    },[])

    useEffect(()=>{
        fetchitem()
    },[item])

    const fetchitem = async (id)=>{
        const itm = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setItem(itm.data)
    }

    const fetchdata= async ()=>{
        const dta = await axios.get(`https://fakestoreapi.com/products`)
        setItems(dta.data)
    }


    return(
        <>
        <h1>{item.title}</h1>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"}}>
        {
            items.map((item)=>{
                return(
                    <React.Fragment key={item.id}>
                    <Button onClick={fetchitem(item.id)} variant="warning">{item.id}</Button>
                    </React.Fragment>
                )
            })
        }
        </div>

        </>
    )
}

export default Prod