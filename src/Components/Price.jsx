import { useEffect, useState } from 'react'
import '../Assets/Style/Components/Price.style.css'

const Price = props => {
  const [priceWithReduc, setPriceWithReduc] = useState(0)

  const getNewPrice = (old, reduc) => {
    const percent = (parseFloat(old) * reduc) / 100
    const newPrice = parseFloat(old) - percent
    setPriceWithReduc(newPrice.toFixed(2))
  }

  useEffect(() => {
    if (props.reduc !== 0) {
      getNewPrice(props.price, props.reduction)
    }
  }, [])

  if (props.reduction === 0) {
    return (
      <div id='Prices'>
        <div>{props.price}€</div>
      </div>
    )
  }
  return (
    <div id='Prices'>
      <div id='Prices-OldPrice'>{props.price}€</div>
      <div id='Prices-NewPrice'>{priceWithReduc}€</div>
    </div>
  )
}

export default Price
