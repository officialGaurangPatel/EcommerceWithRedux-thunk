import { ActionTypes } from "../constants/actions-type"


export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
}
export const selectedProduct = (products) => {
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    };
}
// export const setProducts = (products) => {
//     return {
//         type:ActionTypes.SET_PRODUCTS,
//         payload:products
//     };
// }