import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.page";
import { useAtom } from "jotai";
import { JWTAtom } from "../Utils/atom.utils";
import NavBar from "../Components/NavBar/NavBar.jsx";
import '../Assets/Style/Pages/Profile.style.css'
import { getAccount } from "../Request/user.request";


const ProfilePage = () => {
    const [jwt, ] = useAtom(JWTAtom)
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const getUser = async () => {
        const resp = await getAccount(jwt)
        setUser(resp)
        setIsLoading(false)
    }

    useEffect(() => {
        if(jwt === '') {
            setIsLoading(false)
            navigate('/login')
        } else if (user == null) {
            getUser()
        } else {
            setIsLoading(false)
        }
    },[user])

    if(isLoading){
        return(
            <div>
                <NavBar />
                <Loader />
            </div>
        )
      } else {
        return (
            <div>
                <NavBar />
                <div id="Profile">
                </div>
            </div>
        )
      }

}

export default ProfilePage;