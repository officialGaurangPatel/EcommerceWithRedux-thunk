import fakestoreapi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../constants/actions-type"


export const fetchProducts = () => {
    return async function (dispatch,getState){
        const res = await fakestoreapi.get("/products")
        dispatch({
                type:ActionTypes.FETCH_PRODUCTS,
                payload:res.data
            })
    }
}

export const fetchProduct = (id) => {
    return async function (dispatch,getState){
        const res = await fakestoreapi.get(`/products/${id}`)
        dispatch({
                type:ActionTypes.SELECTED_PRODUCTS,
                payload:res.data
            })
    }
}
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
export const removeSelectedProduct = () => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
}