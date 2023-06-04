import Image from '../Components/Image'
import ErrorGIF from '../Assets/Image/error.gif'
import '../Assets/Style/Pages/Error.style.css'

const ErrorPage = () => (
  <div id='ErrorPage'>
    <Image url={ErrorGIF} alt='logo' height={300} width={300} />
    <div id='Text'>ERREUR 404 PAGE INTROUVABLE</div>
  </div>
)

export default ErrorPage
