import * as action from '../constant/constant';

export const productloading = () => ({
    type:action.PRODUCTLOADING
});

export const productList = (products) => ({
    type:action.PRODUCT,
    payload:products
})

export const productDetail = (productsDetail) => ({
    type:action.PRODUCTDETAIL,
    payload:productsDetail
})