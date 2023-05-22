import Image from "./Image";
import '../Assets/Style/Components/ProductCard.style.css'
import ATCButton from "./ButtonATC"
import Price from "./Price"
import { Link } from "react-router-dom";

const ProductCard = (props) => {
        return(
            <div id="Card2">
                <Link id="Card-Link" to={`/product/${props.product.id}`}>
                    <Image url={props.product.image} name={props.product.name} width={'200'} height={'250'}/>
                    <div id="Card-Text">
                        <div id="Card-Text-Name">
                            {props.product.category} {props.product.brand} {props.product.size}"
                         </div>
                        <Price price={props.product.price} reduction={props.product.reduction}/>
                    </div>
                </Link>
                <div id="Card-Button">
                    <ATCButton id={props.product.id} stock={props.product.stock}/>
                </div>
            </div>
        )
}

export default ProductCard;