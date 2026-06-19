import { useContext, useState, useEffect, createContext } from 'react'

const AuthContext = createContext()

export default function authProvider({ children, value }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            // Aqui você poderia decodificar o token para pegar o role
            setUser({ loggedIn: true }) 
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext)
}