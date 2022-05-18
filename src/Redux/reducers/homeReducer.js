import * as action from '../constant/constant';

const intialState = {
    userTotal:3,
    orderTotal:10,
    paymentTotal:100.000
}

export const homeReducer = (state = intialState, {type, payload}) => {
    switch(type){
        case action.HOMETOTAL:
            return {
                ...state,
                userTotal:payload

            }
        default :
        return state;
    }
}