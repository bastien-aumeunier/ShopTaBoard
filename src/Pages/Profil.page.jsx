import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import Loader from './Loader.page'
import { JWTAtom } from '../Utils/atom.utils'
import '../Assets/Style/Pages/Profile.style.css'
import { getAccount } from '../Request/user.request'
import PassWordForm from '../Components/Form/PassWord.form'
import { getAllOrders } from '../Request/order.request'
import CommandeCard from '../Components/CommandeCard'

const ProfilePage = () => {
  const [jwt, setJwt] = useAtom(JWTAtom)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [changePasswordVisibility, setChangePasswordVisibility] = useState(false)
  const [commandes] = useState([])
  const navigate = useNavigate()

  const getUser = async () => {
    const respCommandes = await getAllOrders(jwt)
    for (let i = respCommandes.length; i >= 0; i -= 1) {
      const element = respCommandes[i]
      if (element !== undefined && commandes.length < 9) {
        commandes.push(element)
      }
    }
    const resp = await getAccount(jwt)
    setUser(resp)
    setIsLoading(false)
  }

  const changePassword = async () => {
    setChangePasswordVisibility(!changePasswordVisibility)
  }
  const logout = () => {
    setJwt('')
    navigate('/')
  }

  useEffect(() => {
    if (jwt === '') {
      setIsLoading(false)
      navigate('/login')
    } else if (user == null) {
      getUser()
    } else {
      setIsLoading(false)
    }
  }, [user])

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div>
      <div id='Profile'>
        <div id='Profile-Title'>Bonjour {user.firstname}</div>
        <div id='Profile-Content'>
          <div id='Left'>
            <div id='Profile-Info'>
              <div id='Profile-Info-Title'>Info</div>
              <div>
                {' '}
                <strong> Nom: </strong>
                {user.name}
              </div>
              <div>
                <strong> Prénom: </strong>
                {user.firstname}
              </div>
              <div>
                <strong> Email: </strong>
                {user.email}
              </div>
            </div>
            <div id='Profile-Securite'>
              <div id='Profile-Info-Title'>Sécurité</div>
              <div>Voulez vous changer votre mot de passe ?</div>
              <button id='Button-Change' onClick={changePassword}>
                Changer de mot de passe
              </button>
              {changePasswordVisibility ? <PassWordForm jwt={jwt} visibility={changePassword} /> : null}
              <button id='Button-Logout' onClick={logout}>
                Se déconnecter
              </button>
            </div>
          </div>
          <div id='Right'>
            <div id='Profile-Info-Title'>Dernieres Commandes</div>
            {commandes.length > 0 ? (
              commandes.map(commande => <CommandeCard key={commande.id} commande={commande} />)
            ) : (
              <div>Vous n&apos;avez pas encore de commandes</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
