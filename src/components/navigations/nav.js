import { BrowserRouter, Route, Routes } from "react-router-dom"
import Prods from "../home/home"
import About from "../about/about"
import Contact from "../Contact/contact"
import EachProd from "../eachproduct/eachproduct"

const Navs = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Prods}/>
            <Route path='/About' Component={About}/>
            <Route path="/Contact" Component={Contact}/>
            <Route path="/:Product/:id" Component={EachProd}/>

        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Navs