import { useAtom } from "jotai";
import { JWTAtom } from "../../Utils/atom.utils";
import { useState } from "react";
import { userRegister } from "../../Request/user.request";
import '../../Assets/Style/Components/RegisterForm.style.css'

const RegisterForm = () => {
    const [jwt,setJwt] = useAtom(JWTAtom)
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [mail, setMail] = useState("");
    const [password, setPassWord] = useState("")
    const [passwordConfirm, setPassWordConfirm] = useState("")
    const [error, setError] = useState("")

    const register = async (event) => {
        event.preventDefault();
        setError("")
        if (prenom === "" || nom === "" || mail === "" || password === "" || passwordConfirm === "") {
            setError("Veuillez remplir tous les champs")
        } else {
            if (password === passwordConfirm) {
                if (password.length < 8) {
                    setError("Le mot de passe doit contenir au moins 8 caractères")
                } else {
                    const resp = await userRegister(mail, password, passwordConfirm, nom, prenom)
                    if (resp.status === 201) {
                        setJwt(resp.data.jwt)
                    } else if (resp.status === 400) {
                        setError('Veuillez remplir tous les champs')
                    } else if (resp.status === 403) {
                        setError('Cet email est déjà utilisé')
                    }
                }
            } else {
                setError("Les mots de passes ne sont pas identiques")
            }
        }
    }
    return (
        <form onSubmit={register} id="RegisterForm">
            <input className="Page-Form-Input" type="text" placeholder="Prenom" value={prenom} onChange={(e)=> setPrenom(e.target.value)}/>
            <input className="Page-Form-Input" type="text" placeholder="Nom" value={nom} onChange={(e)=> setNom(e.target.value)}/>
            <input className="Page-Form-Input" type="email" placeholder="Email" value={mail} onChange={(e)=> setMail(e.target.value)}/>
            <input className="Page-Form-Input" type="password" placeholder="PassWord" value={password} onChange={(e)=> setPassWord(e.target.value)}/>
            <input className="Page-Form-Input" type="password" placeholder="PassWord Confirm" value={passwordConfirm} onChange={(e)=> setPassWordConfirm(e.target.value)}/>
            {error !== "" && <div id="Page-Form-Error">{error}</div>}
            <button id="Page-Form-Button" type="submit"> Register</button>
        </form>
    )
}

export default RegisterForm;