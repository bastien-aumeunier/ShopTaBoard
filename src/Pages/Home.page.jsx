import { useEffect, useState } from 'react'
import { getProductByCategory } from '../Request/product.request'
import RowProduct from '../Components/RowProduct'
import NavBar from '../Components/NavBar/NavBar.jsx'
import '../Assets/Style/Global.style.css'
import '../Assets/Style/Pages/Home.style.css'
import Loader from './Loader.page'

const HomePage = () => {
	const [ListCat, setListCat] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const getAllCategory = async () => {
		const resp = await getProductByCategory()
		setListCat(resp)
	}

	useEffect(() => {
		if (ListCat.length === 0) {
			getAllCategory()
		} else {
			setIsLoading(false)
		}
	}, [ListCat, isLoading])

	if (isLoading) {
		return (
			<div>
				<NavBar />
				<Loader />
			</div>
		)
	}
	return (
		<div>
			<NavBar />
			<div id='Home'>
				{ListCat.map(element => (
					<RowProduct key={element.id} category={element} />
				))}
				;
			</div>
		</div>
	)
}

export default HomePage
