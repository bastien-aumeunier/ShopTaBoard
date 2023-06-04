import { useState } from 'react'
import { useAtom } from 'jotai'
import { JWTAtom } from '../../Utils/atom.utils'
import { userLogin } from '../../Request/user.request'
import '../../Assets/Style/Components/LoginForm.style.css'

const LoginForm = () => {
	const [mail, setMail] = useState('')
	const [password, setPassWord] = useState('')
	const [, setJwt] = useAtom(JWTAtom)
	const [error, setError] = useState('')

	const login = async event => {
		event.preventDefault()
		setError('')
		if (mail === '' || password === '') {
			setError('Veuillez remplir tous les champs')
		} else {
			const resp = await userLogin(mail, password)
			if (resp.status === 400) {
				setError('Veuillez remplir tous les champs')
			} else if (resp.status === 403) {
				setError('Email ou mot de passe incorrect')
			} else if (resp.status === 201) {
				setJwt(resp.data.jwt)
			}
		}
	}

	return (
		<form onSubmit={login}>
			<input
				className='Page-Form-Input'
				type='email'
				placeholder='Email'
				value={mail}
				onChange={e => setMail(e.target.value)}
			/>
			<input
				className='Page-Form-Input'
				type='password'
				placeholder='PassWord'
				value={password}
				onChange={e => setPassWord(e.target.value)}
			/>
			<button id='Page-Form-Button' type='submit'>
				{' '}
				Login
			</button>
			{error !== '' && <div id='Page-Form-Error'>{error}</div>}
		</form>
	)
}

export default LoginForm
