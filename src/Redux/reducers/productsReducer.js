import * as action from '../constant/constant';

const intialState = {
    product :[],
    productDetail:[],
    loading:false
}

export const productReducer = (state = intialState, {type, payload}) => {

    switch(type){
       case action.PRODUCTLOADING :
           return {
               ...state,
               loading:true
           }
        case action.PRODUCT:
            return {
                ...state,
                product:payload,
                loading:false
            }
        case action.PRODUCTDETAIL:
            return {
                ...state,
                productDetail:payload,
                loading:false
            }
        default :
        return state;
    }
}