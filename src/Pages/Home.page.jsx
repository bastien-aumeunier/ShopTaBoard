import { useEffect, useState } from "react";
import { getCategory, getProductByCategory } from "../Request/product.request";
import RowProduct from "../Components/RowProduct";
import NavBar from "../Components/NavBar/NavBar.jsx";
import '../Assets/Style/Global.style.css'
import '../Assets/Style/Pages/Home.style.css'
import Loader from "./Loader.page";


const HomePage = () => {
    const [ListCat, setListCat] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllCategory = async () => {
        const resp =await getCategory()
        resp.map(async (category)  => {
          const products = await getProductByCategory(category.id)
            setListCat((data) => [
               ...data,
               { 
                 id: category.id,
                 name: category.name,
                 products: products
               }
             ]);
           });
    }

    useEffect(() => {
      if(ListCat.length === 0) {
        getAllCategory()
      } else {
        setIsLoading(false)
      }
      },[ListCat, isLoading])

      if(isLoading){
        return(
          <div>
            <NavBar />
            <Loader />
          </div>
        )
      } else {
        return(
        <div>
          <NavBar />
          <div id="Home">
            {ListCat.map((element) => {
              return (
                <RowProduct key={element.id} category={element} />
              )
            })};
          </div>
        </div>
        )
      }    
}

export default HomePage;