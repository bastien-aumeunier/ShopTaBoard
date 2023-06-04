import { useAtom } from 'jotai'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { JWTAtom } from '../Utils/atom.utils'
import RegisterForm from '../Components/Form/Register.form'
import Image from '../Components/Image'
import ShopTaBoard from '../Assets/Image/ShopTaBoard_nobg.png'
import '../Assets/Style/Pages/Register.style.css'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [jwt] = useAtom(JWTAtom)

  useEffect(() => {
    if (jwt !== '') {
      navigate(-1)
    }
  })

  return (
    <div id='Register'>
      <div id='Register-Title'>
        <Image url={ShopTaBoard} alt='logo' height={200} width={200} />
      </div>
      <div id='Register-Text'>
        <div id='Register-Title-Text'>Pour continuer veuillez vous inscrire</div>
        <div id='Register-Text-Form'>
          <RegisterForm />
        </div>
        <div id='Register-Bottom'>
          <div id='Register-Bottom-Text'>Vous avez déjà un compte ?</div>
          <Link to='/login'>
            <button id='Register-Bottom-Button'>Se connecter</button>
          </Link>
        </div>
        <div id='Register-Back'>
          <button id='Register-Button-Back' onClick={() => navigate(-1)}>
            Revenir à la page précedente
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
