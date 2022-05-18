import * as action from '../constant/constant';

const intialState = {
    user : [],
    loading:false
}
export const userReducer = (state = intialState, { type, payload}) => {
    switch(type) {

        case action.USERLOADING:
            return {
                ...state,
                loading:true
            }
        case action.USER:
            return {
                ...state,
                user: payload,
                loading:false
            }
        default :
        return state;
    }
}