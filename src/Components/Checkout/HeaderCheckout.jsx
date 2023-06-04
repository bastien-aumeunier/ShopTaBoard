import { useNavigate } from 'react-router-dom'
import Image from '../Image'
import BackArrow from '../../Assets/Image/Icons/back-arrow.png'
import '../../Assets/Style/Components/HeaderCheckout.style.css'

const HeaderCheckout = props => {
	const navigate = useNavigate()

	return (
		<div id='Address-Header'>
			<div id='Address-Top'>
				<button id='Address-Top-Button' onClick={() => navigate(-1)}>
					<Image url={BackArrow} alt='BackArrow' width={30} height={30} />
				</button>
				<div id='Address-Top-Title'>Veuillez entrer votre adresse de livraison</div>
				<div id='Address-Top-NextStep'>
					{props.haveAddress === true ? (
						<button id='Address-Top-NextStep-Button' onClick={() => navigate('/checkout-payment')}>
							Passer au paiement
						</button>
					) : (
						<button id='Address-Top-NextStep-Button-Disable' disabled>
							Passer au paiement
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default HeaderCheckout
