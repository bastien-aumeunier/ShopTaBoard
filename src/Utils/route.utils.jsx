import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/Home.page'
import LoginPage from '../Pages/Login.page'
import ErrorPage from '../Pages/Error.page'
import ProfilePage from '../Pages/Profil.page'
import DetailPage from '../Pages/Detail.page'
import CartPage from '../Pages/Cart.page'
import CheckoutPage from '../Pages/Checkout.page'
import PaymentPage from '../Pages/Payment.page'
import RegisterPage from '../Pages/Register.page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />
	},
	{
		path: '/product/:id',
		element: <DetailPage />
	},
	{
		path: '/login',
		element: <LoginPage />
	},
	{
		path: '/register',
		element: <RegisterPage />
	},
	{
		path: '/profile',
		element: <ProfilePage />
	},
	{
		path: '/cart',
		element: <CartPage />
	},
	{
		path: '/checkout-address',
		element: <CheckoutPage />
	},
	{
		path: '/checkout-payment',
		element: <PaymentPage />
	}
])

export default router
