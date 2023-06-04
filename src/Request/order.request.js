import axios from 'axios'

export const createPayment = async (jwt, cartID, addressID) => {
	const url = `${process.env.REACT_APP_API_URL}/orders/start-checkout`
	const headers = { Authorization: `Bearer ${jwt}` }
	const resp = await axios.post(url, { jwt, cartID, addressID }, { headers })
	return resp.data
}

export const getAllOrders = async jwt => {
	const url = `${process.env.REACT_APP_API_URL}/orders/my-orders`
	const headers = { Authorization: `Bearer ${jwt}` }
	const resp = await axios.get(url, { headers })
	return resp.data
}
