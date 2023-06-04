import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { JWTAtom, AddressIdAtom, CartAtom } from '../Utils/atom.utils'
import Loader from './Loader.page'
import AddressForm from '../Components/Form/Address.form'
import '../Assets/Style/Pages/Checkout.style.css'
import HeaderCheckout from '../Components/Checkout/HeaderCheckout'
import Image from '../Components/Image'
import Check from '../Assets/Image/check.png'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const [jwt] = useAtom(JWTAtom)
  const [cart] = useAtom(CartAtom)

  const [addressId, setAddressId] = useAtom(AddressIdAtom)
  const [haveAddress, setHaveAddress] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const formSend = cartId => {
    setAddressId(cartId)
    setHaveAddress(true)
  }

  useEffect(() => {
    if (jwt === '' || cart.id === '') {
      navigate('/')
    } else if (addressId !== '') {
      setHaveAddress(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div id='Address'>
      <HeaderCheckout haveAddress={haveAddress} />
      {addressId === '' ? (
        <AddressForm update={formSend} />
      ) : (
        <div id='Address-Valid'>
          <div id='Address-Valid-Image'>
            <Image url={Check} alt='Check' width={100} height={100} />
          </div>
          <div id='Address-Valid-Text'>Adresse Créée</div>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
