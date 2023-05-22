import axios from "axios";



export const userLogin = async (email, password) => {
    try {
        const url = process.env.REACT_APP_API_URL+'/users/login';
        const response = await axios.post(url, {email, password})
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return {
            status: error.response.status,
            data: error.response.data
        }
    }
}

export const userRegister = async (email,password, confirmpassword, name, firstname) => {
    try {
        const url =  process.env.REACT_APP_API_URL+'/users/register';
        const response = await axios.post(url, {email,password, confirmpassword, name, firstname})
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return {
            status: error.response.status,
            data: error.response.data
        }
    }
}

export const getAccount = async (jwt) =>{
    const url =  process.env.REACT_APP_API_URL+'/users/account';
    const headers = {Authorization: `Bearer ${jwt}`};
    const response = await axios.get(url, {headers});
    return response.data
}
