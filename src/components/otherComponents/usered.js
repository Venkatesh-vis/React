import { useReducer } from "react"


const Usered = () => {

    const user ={
        name:"abc",
        mobile:123,
        age:20
    }

    const reducer = (state,action) => {
        switch(action.type){
            case "UPD":
                return{...state,age:state.age=0}
            default:
                return state
        }
    }

    const [usr,dispatch] = useReducer(reducer,user)

    const update = () => {
        dispatch({type:"UPD"})
    }

    return(
        <>
        <button onClick={update}>click</button>
        <h1>{usr.age}</h1>
        </>
    )
}
export default Usered