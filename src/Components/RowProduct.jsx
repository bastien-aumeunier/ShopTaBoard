import '../Assets/Style/Components/RowProduct.style.css'
import ProductCard from './ProductCard'

const RowProduct = props => (
	<div id='Row'>
		<div id='title-category'>
			<div> {props.category.name}</div>
		</div>
		<div id='horizontal-list'>
			{props.category.products.map(element => (
				<ProductCard key={element.id} product={element} />
			))}
		</div>
	</div>
)

export default RowProduct
