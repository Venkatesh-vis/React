

const emp = {
    profile:{
        name:"abc",
        id:45125,
        mail:"abc@gmail.com",
        mobile:98745
    }
}

const ProfileReducer = (state=emp,action) => {
    switch(action.type){
        case "UPDATE_PROFILE":
            return {...state,profile:action.payload}
        default:
            return state
    }
}

export default ProfileReducer