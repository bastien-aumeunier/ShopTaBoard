import '../Assets/Style/Components/RowProduct.style.css'
import ProductCard from './ProductCard'

const RowProduct = (props) => {
    return (
        <div id="Row">
            <div id="title-category">
                <div> {props.category.name}</div>
            </div>
            <div id="horizontal-list">
                {props.category.products.map((element)=> {
                    return (
                        <ProductCard key={element.id} product={element}/>
                    )
                })}
            </div>
        </div>
    )
}

export default RowProduct;