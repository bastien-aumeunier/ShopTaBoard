import { useState } from 'react'
import '../../Assets/Style/Components/AddressForm.style.css'
import { useAtom } from 'jotai'
import { JWTAtom } from '../../Utils/atom.utils'
import { addAddress } from '../../Request/address.request'

const AddressForm = props => {
  const [jwt] = useAtom(JWTAtom)
  const [addressName, setAddressName] = useState('')
  const [civility, setCivility] = useState('Mr')
  const [userFirstName, setUserFirstName] = useState('')
  const [userName, setUserName] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [tel, setTel] = useState('')

  const submitForm = async e => {
    e.preventDefault()
    const resp = await addAddress(
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
    )
    props.update(resp.id)
  }

  const handleRadioChange = event => {
    setCivility(event.target.value)
  }

  return (
    <div>
      <form id='form' onSubmit={submitForm}>
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder="Nom de l'adresse"
          value={addressName}
          onChange={e => setAddressName(e.target.value)}
        />
        <div id='Address-Form-Radios'>
          <label>
            <span>Mr</span>
            <input
              type='radio'
              className='Address-Form-Radio'
              value='Mr'
              checked={civility === 'Mr'}
              onChange={handleRadioChange}
            />
          </label>
          <label>
            <span>Mme</span>
            <input
              type='radio'
              className='Address-Form-Radio'
              value='Ms'
              checked={civility === 'Ms'}
              onChange={handleRadioChange}
            />
          </label>
        </div>
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Prénom'
          value={userFirstName}
          onChange={e => setUserFirstName(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Nom'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Numéro'
          value={addressNumber}
          onChange={e => setAddressNumber(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Adresse'
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Code postal'
          value={postalCode}
          onChange={e => setPostalCode(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Ville'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Pays'
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <input
          className='Address-Form-Input'
          required
          type='text'
          placeholder='Téléphone'
          value={tel}
          onChange={e => setTel(e.target.value)}
        />
        <button id='Address-Form-Button' type='submit'>
          Ajouter
        </button>
      </form>
    </div>
  )
}

export default AddressForm
