import React, { createContext,useContext,useState} from 'react'

const ConsoleContex = createContext()

export const ConsoleProvider =({children}) => {

    const initialData = JSON.parse(localStorage.getItem('consoleData'))
    
    const [requestInputValue,setRequestInputValue] = useState("")
    const [needSubmit,setNeedSubmit] = useState(false)

    const [consoleData, setContextConsoleData] = useState({      
        requests:[],
        ...initialData ,
        loading: false,
        currentRequest: null,
    })

    const setConsoleData = (values) => {
        setContextConsoleData((prevData)=>({
            ...prevData,
            ...values
        }))
    }
    
    const copyRequest = (name) => {
        const copiedReq = consoleData.requests.find(r => r.name === name)
        navigator.clipboard.writeText(JSON.stringify(copiedReq.request , null,'\t'))
    }

    const doRequest = (name) => {
        const findedRequest = consoleData.requests.find(r => r.name === name)
        setRequestInputValue(JSON.stringify(findedRequest.request, null,'\t'))
        setNeedSubmit(true)
    }

    const deleteHistory = () => {
        setContextConsoleData((prevData)=>({
            ...prevData,
            requests: []
        }))
        localStorage.setItem('consoleData',JSON.stringify({requests: []}))
    }

    const addRequest = (value) => {
        const newRequest = {
            name: value.request.action,
            request: value.request,
            response: value.response,
            success: value.success
        }

        let newHistory = consoleData.requests.filter(r => r.name !== newRequest.name)
        if (newHistory.length > 15){
            newHistory.splice(15) 
        }
        newHistory.unshift(newRequest)

        setContextConsoleData((prevData)=>({
            ...prevData,
            requests: [...newHistory]
        }))

        localStorage.setItem('consoleData',JSON.stringify({requests: [...newHistory]}))
    }

    const deleteRequest = (name) => {
        console.log('here')
        const newHistory = consoleData.requests.filter(r => r.name !== name)
        setContextConsoleData({requests: newHistory})
        localStorage.setItem('consoleData',JSON.stringify({requests: [...newHistory]}))
    }

    
    return <ConsoleContex.Provider value = {{consoleData,
                                            requestInputValue,
                                            needSubmit,
                                            setNeedSubmit,
                                            setRequestInputValue,
                                            setConsoleData, 
                                            deleteRequest,
                                            copyRequest,
                                            deleteHistory,
                                            doRequest,
                                            addRequest}} >{children}</ConsoleContex.Provider>
}

export const useConsoleContext = () => useContext(ConsoleContex)