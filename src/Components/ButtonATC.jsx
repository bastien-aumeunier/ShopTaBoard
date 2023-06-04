import '../Assets/Style/Components/ButtonATC.style.css'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { JWTAtom, CartAtom } from '../Utils/atom.utils'
import { addToMyCart } from '../Request/cart.request'

const ATCButton = props => {
  const [jwt] = useAtom(JWTAtom)
  const [, setCart] = useAtom(CartAtom)

  const navigate = useNavigate()

  const addToCart = async () => {
    if (jwt === '') {
      navigate('/login')
    } else {
      const resp = await addToMyCart(jwt, props.id)
      setCart(resp)
    }
  }

  if (props.stock === 0) {
    return (
      <button id='Button-OOS' disabled>
        Rupture de Stock
      </button>
    )
  }
  return (
    <button id='Button' onClick={addToCart}>
      Ajouter au panier
    </button>
  )
}

export default ATCButton
