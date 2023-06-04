import LoaderGIF from '../Assets/Image/skate-loader.gif'
import Image from '../Components/Image'
import '../Assets/Style/Pages/Loader.style.css'

const Loader = () => (
	<div id='Loader'>
		<Image url={LoaderGIF} alt='logo' height={300} width={300} />
	</div>
)

export default Loader
