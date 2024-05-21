import { BrowserRouter, Route, Routes } from "react-router-dom"
import Prods from "../home/home"
import About from "../about/about"
import Contact from "../Contact/contact"
import EachProd from "../eachproduct/eachproduct"
import Cart from "../Cart/cart"
import { createContext, useState } from "react"


export const Item = createContext()

const Navs = ()=>{

    const[eachitem,updateEachItem]=useState({})

    return(
        <>
        <Item.Provider value={eachitem}>
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Prods}/>
            <Route path='/About' Component={About}/>
            <Route path="/Contact" Component={Contact}/>
            <Route path="/:Product/:id" Component={EachProd}/>
            <Route path='/Cart' Component={Cart}></Route>

        </Routes>
        </BrowserRouter>
        </Item.Provider>
        </>
    )
}
export default Navs