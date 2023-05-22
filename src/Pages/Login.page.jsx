import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../Components/Image";
import ShopTaBoard from '../Assets/Image/ShopTaBoard_nobg.png'
import '../Assets/Style/Pages/Login.style.css'
import { useAtom } from "jotai";
import { JWTAtom } from "../Utils/atom.utils";
import LoginForm from "../Components/Form/Login.form";

const LoginPage = () => {
    const navigate = useNavigate();

    const [jwt,] = useAtom(JWTAtom)


useEffect(() => {
    if(jwt !== ""){
        navigate(-1)
    }
})

return (
    <div id="Page">
        <div id="Page-Image">
            <Image url={ShopTaBoard} alt='logo' height={200} width={200}/>
        </div>
        <div id="Page-Title">
            Pour continuer veuillez vous connecter
        </div>
        <div id="Page-Form">
            <LoginForm/>
        </div>
        <div id="Page-Bottom">
            <div id="Page-Bottom-Text">Vous n'avez pas de compte ?</div>
            <Link to="/register">
                <button id="Page-Bottom-Button">Créer un compte</button>
            </Link>
        </div>
        <div id="Page-Back">
            <button id="Page-Button-Back" onClick={() => navigate(-1)}>
                Revenir à la page précedente
            </button>
        </div>
    </div>
)
}

export default LoginPage;