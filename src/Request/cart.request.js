import axios from "axios";

export const getMyCart = async (jwt) => {
    const headers = {Authorization: `Bearer ${jwt}`}
    const url = process.env.REACT_APP_API_URL+'/carts/my-cart';
    const response = await axios.get(url, {headers});
    return response.data;
}

export const addToMyCart = async (jwt, productId) => {
    const headers = {Authorization: `Bearer ${jwt}`}
    const url = process.env.REACT_APP_API_URL+'/carts/add-to-cart';
    const response = await axios.post(url, {productId}, {headers});
    return response.data;
}

export const removeFromCart = async (jwt, productId) => {
    const headers = {Authorization: `Bearer ${jwt}`}
    const data= {productId}
    const url = process.env.REACT_APP_API_URL+'/carts/remove-to-cart';
    const response = await axios.delete(url, {data, headers} );
    return response.data;
}