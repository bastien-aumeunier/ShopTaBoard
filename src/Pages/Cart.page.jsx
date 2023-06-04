import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { JWTAtom, CartAtom } from '../Utils/atom.utils'
import { getMyCart } from '../Request/cart.request'
import Loader from './Loader.page'
import NavBar from '../Components/NavBar/NavBar.jsx'
import ProductOnCart from '../Components/Cart/ProductOnCart'
import '../Assets/Style/Pages/Cart.style.css'
import CartHeader from '../Components/Cart/CartHeader'

const CartPage = () => {
	const [jwt] = useAtom(JWTAtom)
	const [cart, setCart] = useAtom(CartAtom)
	const [isLoading, setIsLoading] = useState(true)
	const navigate = useNavigate()

	const getCart = async () => {
		const resp = await getMyCart(jwt)
		setCart(resp)
		setIsLoading(false)
	}

	const updateCart = newCart => {
		setCart(newCart)
	}

	useEffect(() => {
		if (jwt === '') {
			setIsLoading(false)
			navigate('/login')
		} else {
			getCart()
		}
	}, [])

	if (isLoading) {
		return (
			<div>
				<NavBar />
				<Loader />
			</div>
		)
	}
	return (
		<div>
			<NavBar />
			<div id='Panier'>
				<CartHeader price={cart.price} quantity={cart.products.length} />
				<div id='Panier-List'>
					{cart.products.map(element => (
						<ProductOnCart key={element.id} product={element} update={updateCart} />
					))}
				</div>
			</div>
		</div>
	)
}

export default CartPage
