import Cookies from 'js-cookie';
import React, { createContext,useContext,useState} from 'react'
import api from 'src/helpers/sendsay';

const LoginContex = createContext()


export const LoginProvider =({children}) => {

    const initialData = JSON.parse(localStorage.getItem('loginData'))
    
    const [loginData, setContextLoginData] = useState({
        loading: false,
        ...initialData
    })

    const setLoginData = (values) => {
        setContextLoginData((prevData)=>({
            ...prevData,
            ...values
        }))
    }

    const login = (values) => {   
        document.cookie = `sendsay_session=${api.sendsay.session}`;
        const sessionKey = api.sendsay.session;
        const {login, sublogin} = values

        window.localStorage
            .setItem('loginData', JSON.stringify({login,sublogin,sessionKey}))

        setContextLoginData((prevData)=>({
            ...prevData,
            ...values,
            sessionKey
        }))
    }

    const logout = () => {
        setContextLoginData((prevData)=>({
            ...prevData,
            login: "",
            sublogin: "",
            sessionKey: ""
        }))
        Cookies.remove('sendsay_session')
        window.localStorage.removeItem('loginData')
        window.localStorage.removeItem('consoleData')
    }

    return <LoginContex.Provider value = {{loginData, setLoginData,login, logout}} >{children}</LoginContex.Provider>
}

export const useLoginContext = () => useContext(LoginContex)