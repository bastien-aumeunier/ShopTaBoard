import { useNavigate } from 'react-router-dom'
import Image from '../Image'
import BackArrow from '../../Assets/Image/Icons/back-arrow.png'
import '../../Assets/Style/Components/CartHeader.style.css'

const CartHeader = props => {
	const navigate = useNavigate()

	return (
		<div id='Cart-Header'>
			<div id='Panier-Top'>
				<button id='Panier-Top-Button' onClick={() => navigate(-1)}>
					<Image url={BackArrow} alt='BackArrow' width={30} height={30} />
				</button>
				<div id='Panier-Top-Price'>
					<div id='Panier-Top-Price-Text'>Prix total : {props.price}€</div>
				</div>
				<div id='Panier-Top-NextStep'>
					{props.quantity > 0 ? (
						<button id='Panier-Top-NextStep-Button' onClick={() => navigate('/checkout-address')}>
							Passer à l&apos;étape suivante
						</button>
					) : (
						<button id='Panier-Top-NextStep-Button-Disable' disabled>
							Passer à l&apos;étape suivante
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default CartHeader
