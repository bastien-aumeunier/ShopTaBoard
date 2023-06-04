import { useAtom } from 'jotai'
import Image from '../Image'
import { removeFromCart } from '../../Request/cart.request'
import { JWTAtom } from '../../Utils/atom.utils'
import RemoveIcon from '../../Assets/Image/Icons/delete.png'
import '../../Assets/Style/Components/ProductOnCart.style.css'
import Price from '../Price'

const ProductOnCart = props => {
  const [jwt] = useAtom(JWTAtom)

  const removeProduct = async () => {
    const resp = await removeFromCart(jwt, props.product.id)
    props.update(resp)
  }

  return (
    <div id='Card'>
      <div id='Card-Image'>
        <Image url={props.product.image} alt='product' height={100} width={100} />
      </div>
      <div id='Card-Text'>
        <Price price={props.product.price} reduction={props.product.reduction} />
        <div id='Card-Name'> {props.product.name}</div>
      </div>
      <div id='Card-Quantity'>x {props.product.quantity}</div>
      <div id='Card-Icon-Remove'>
        <button id='Card-Icon-Remove-Button' onClick={removeProduct}>
          <Image url={RemoveIcon} alt='remove' height={25} width={25} />
        </button>
      </div>
    </div>
  )
}

export default ProductOnCart
