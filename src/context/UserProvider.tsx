import { ReactNode, createContext, useState } from "react";

interface UserContextProps {
    user: string;
    email: string;
    logout: () => void;
    login: () => void;
    onChangeUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const userContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem('user') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
  
    const login = () => {
        localStorage.setItem('user', user);
        localStorage.setItem('email', email);
    }
  
    const logout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('email');
    };

    const onChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
  

    return (
        <userContext.Provider value={{user,email,login,logout,onChangeUser,onChangeEmail}}>
            {children}
        </userContext.Provider>
    );
}

export { UserProvider, userContext }