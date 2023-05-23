import { useState } from "react";
import { updatePassWord } from "../../Request/user.request";
import '../../Assets/Style/Components/PassWordForm.style.css'


const PassWordForm = (props) => {

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const submit = async (event) => {
        setError("")
        event.preventDefault();
        if (oldPassword === "" || password === "" || confirmPassword === "") {
            setError("Veuillez remplir tous les champs")
        } else{
            if (password !== confirmPassword) {
                setError("Les mots de passe ne correspondent pas")
            } else {
                const resp = await updatePassWord(props.jwt, oldPassword, password, confirmPassword)
                if (resp.status === 201){
                    props.visibility(false)
                } else {
                    setError("Ancien mot de passe incorrect")
                }
            }
        }
    }

    return (
        <div id="Modal">
            <div id="Modal-Content">
                <div id="Form-Header">
                    <button id="Modal-Close" onClick={()=> props.visibility(false)}>X</button>
                    <div id="Form-Title">Changer de mot de passe</div>
                    <div></div>
                </div>
                <form onSubmit={submit} id="Form">
                    <input className="Form-Input" type="password" placeholder="Ancien Mot de passe" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
                    <input className="Form-Input" type="password" placeholder="Nouveau Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input className="Form-Input" type="password" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {error !== "" && <div id="Form-Error">{error}</div>}
                    <button id="Form-Button" type="submit"> Changer le mot de passe</button>
                </form>
            </div>
        </div>
    )

}

export default PassWordForm;