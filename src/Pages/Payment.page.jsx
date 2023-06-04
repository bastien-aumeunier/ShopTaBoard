import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { AddressIdAtom, JWTAtom, CartAtom } from '../Utils/atom.utils'
import Loader from './Loader.page'
import NavBar from '../Components/NavBar/NavBar'
import { createPayment } from '../Request/order.request'
import PaymentForm from '../Components/Form/Payment.form'
import '../Assets/Style/Components/PaymentForm.style.css'

const PaymentPage = () => {
	const navigate = useNavigate()
	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

	const [jwt] = useAtom(JWTAtom)
	const [cart] = useAtom(CartAtom)

	const [addressId] = useAtom(AddressIdAtom)
	const [isLoading, setLoading] = useState(true)
	const [StripeToken, setStripeToken] = useState('')

	const getStripeToken = async () => {
		const resp = await createPayment(jwt, cart.id, addressId)
		setStripeToken(resp.clientSecret)
		setLoading(false)
	}

	const appearance = {
		theme: 'stripe'
	}

	const options = {
		clientSecret: StripeToken,
		appearance
	}

	useEffect(() => {
		if (jwt === '' || cart.id === '' || addressId === '') {
			navigate('/')
		} else if (StripeToken === '') {
			getStripeToken()
		} else {
			setLoading(false)
		}
	}, [])

	if (isLoading || StripeToken === '') {
		return (
			<div>
				<NavBar />
				<Loader />
			</div>
		)
	}
	return (
		<div id='Paiement'>
			<Elements options={options} stripe={stripePromise}>
				<PaymentForm />
			</Elements>
		</div>
	)
}

export default PaymentPage
