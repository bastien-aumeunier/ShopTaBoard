import axios from 'axios'

export const addAddress = async (
	jwt,
	addressName,
	civility,
	userFirstName,
	userName,
	addressNumber,
	address,
	postalCode,
	city,
	country,
	tel
) => {
	const url = `${process.env.REACT_APP_API_URL}/address/new-address`
	const headers = { Authorization: `Bearer ${jwt}` }
	const resp = await axios.post(
		url,
		{
			jwt,
			addressName,
			civility,
			userFirstName,
			userName,
			addressNumber,
			address,
			postalCode,
			city,
			country,
			tel
		},
		{ headers }
	)
	return resp.data
}
