import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import Image from '../Image'
import { JWTAtom, CartAtom } from '../../Utils/atom.utils'
import '../../Assets/Style/Components/NavBarIcon.style.css'

const NavBarIcon = props => {
  const navigate = useNavigate()
  const [jwt] = useAtom(JWTAtom)
  const [cart] = useAtom(CartAtom)

  const click = () => {
    if (jwt === '') {
      navigate('/login')
    } else {
      navigate(`/${props.link}`)
    }
  }

  if (props.link === 'cart') {
    return (
      <button id='NavBar-Button' onClick={click}>
        <Image url={props.image} alt='profile' height={25} width={25} />
        {cart !== null && cart.products.length ? <div id='NavBar-Cart-Quantity'>{cart.products.length}</div> : null}
      </button>
    )
  }
  return (
    <button id='NavBar-Button' onClick={click}>
      <Image url={props.image} alt='profile' height={25} width={25} />
    </button>
  )
}

export default NavBarIcon
