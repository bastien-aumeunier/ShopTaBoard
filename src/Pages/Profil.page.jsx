import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.page";
import { useAtom } from "jotai";
import { JWTAtom } from "../Utils/atom.utils";
import NavBar from "../Components/NavBar/NavBar.jsx";
import '../Assets/Style/Pages/Profile.style.css'


const ProfilePage = () => {
    const [jwt, ] = useAtom(JWTAtom)
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(jwt === '') {
            setIsLoading(false)
            navigate('/login')
        } else {
            setIsLoading(false)
        }
    },[])

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