import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Loader from "./Loader.page";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../Request/product.request";
import Image from "../Components/Image";
import '../Assets/Style/Pages/Detail.style.css'
import BackArrow from '../Assets/Image/Icons/back-arrow.png'
import ATCButton from "../Components/ButtonATC";
import Price from "../Components/Price";


const DetailPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [, setPriceWithReduc] = useState(0)

    const getProduct = async () => {
        const resp = await getProductById(id)
        setProduct(resp)
        if (resp.reduction !== 0) {
            const percent = parseFloat(resp.price)*resp.reduction/100
            const newPrice = parseFloat(resp.price)-percent
            setPriceWithReduc(newPrice.toFixed(2))
        }
        setLoading(false)
    }

    useEffect(() => {
        if(product === null){
            getProduct()
        } else {
            setLoading(false)
        }
    },[])

    if(isLoading){
        return (
            <div>
                <NavBar />
                <Loader />
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <div id="Header">
                <button id='Panier-Top-Button' onClick={()=> navigate(-1)}>
                        <Image url={BackArrow} alt="BackArrow" width={30} height={30}/>
                    </button>
                </div>
                <div id="Detail">
                    <div id="Detail-Image">
                        <Image url={product.image} name={product.name} width="500" height="500" />
                    </div>
                    <div id="Detail-Info">
                        <h1>{product.name}</h1>
                        <p>Taille {product.size}'</p>
                        <p>{product.description}</p>
                        <Price price={product.price} reduction={product.reduction}/>
                        <div id="Detail-Info-Stock">
                            {product.stock <10 && product.stock > 0 ?
                                <p id="Detail-Info-Price-Stock">Plus que {product.stock} articles en stock !</p>  
                            :
                                <div></div>  
                            }
                        </div>
                        <ATCButton id={product.id} stock={product.stock}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailPage;