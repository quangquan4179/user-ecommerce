import { createContext, useState } from 'react'

export const AuthContext = createContext<{ auth: any; setAuth: any }>({
	auth: null,
	setAuth: null,
})

type props = {
	children: React.ReactNode
}

export const AuthProvider = ({ children }: props) => {
	const [auth, setAuth] = useState()

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}
