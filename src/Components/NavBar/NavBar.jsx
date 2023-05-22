import Image from "../Image";
import ShopTaBoard from '../../Assets/Image/ShopTaBoard_nobg.png'
import '../../Assets/Style/Components/NavBar.style.css'
import { Link} from "react-router-dom";
import CartIcon from '../../Assets/Image/Icons/cart.png'
import ProfileIcon from '../../Assets/Image/Icons/profile.png'
import NavBarIcon from "./NavBarIcon";

const NavBar = () => {
    return (
        <div id="NavBar">
            <div id="NavBar-Logo">
                <Link to="/">
                    <Image url={ShopTaBoard} alt='logo' height={70} width={70}/>
                </Link>
            </div>
            <div id="NavBar-Search">
                <input id="NavBar-Search-Input" type="text" placeholder="Rechercher un produit"/>
            </div>
            <div id="NavBar-Item">
                <div id="NavBar-Cart">
                    <NavBarIcon image={CartIcon} link="cart"/>
                </div>
                <div id="NavBar-Profile">
                    <NavBarIcon image={ProfileIcon} link="profile"/>
                </div>
            </div>
        </div>
    )

}
export default NavBar;