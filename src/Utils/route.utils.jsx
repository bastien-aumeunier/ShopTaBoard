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
import LayoutPage from '../Pages/LayoutPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <HomePage />
			},
			{
				path: '/product/:id',
				element: <DetailPage />
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
			}
		]
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
		path: '/checkout-payment',
		element: <PaymentPage />
	}
])

export default router
