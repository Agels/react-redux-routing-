import * as action from '../constant/constant';


export const userloadng = () => ({
   
        type:action.USERLOADING
    
})

export const userList = (users) => ({
    type:action.USER,
    payload: users
    
})