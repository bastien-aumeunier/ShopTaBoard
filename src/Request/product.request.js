import axios from "axios";



export const getAllProduct = async () => {
    const url = process.env.REACT_APP_API_URL+'/products';
    const response = await axios.get(url);
    return response.data;
}

export const getProductById = async (id) => {
    const url = process.env.REACT_APP_API_URL+`/products/${id}`;
    const response = await axios.get(url);
    return response.data;
}

export const getProductByCategory = async (id) => {
    const url = process.env.REACT_APP_API_URL+`/products/category/${id}`;
    const response = await axios.get(url);
    return response.data;
}

export const getCategory = async () => {
    const url = process.env.REACT_APP_API_URL+`/categories`;
    const response = await axios.get(url);
    return response.data;
}