import { BrowserRouter, Route, Routes } from "react-router-dom"
import Prods from "../home/home"
import About from "../about/about"
import Contact from "../Contact/contact"

const Navs = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Prods}/>
            <Route path='/About' Component={About}/>
            <Route path="/Contact" Component={Contact}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Navs