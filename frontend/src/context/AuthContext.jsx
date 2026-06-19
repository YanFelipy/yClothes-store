import { useContext, useState, useEffect, createContext } from 'react'
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext()

export default function authProvider({ children, value }) {
    const [user, setUser] = useState(null)

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);

        }
    }, []);


    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setUser(decoded);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext)
}