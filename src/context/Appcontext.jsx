import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

 const AppContext = createContext()
 export const AppContextProvider =({ Children })=>{
    const navigate =useNavigate()
    const [user,setUser]=useState(null)
    const [chats,setChats]=useState([])
    const [selectedChat , setSelectedChat]=useState(null)
    const[theme,setTheme]=useState(localStorage.getItem('theme') || 'light')
    const fetchUser =async()=>{
        setUser(dummyUserData)
    }
    const fetchUserChats =async()=>{
        setChats(dummychats)
        setSelectedChat(dummychats[0])
    }
    useEffect(()=>{
        if(theme ==='dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])
    const value ={ navigate, user,setUser ,chats , setChats , fetchUser,selectedChat,setSelectedChat,theme}
    return (
        <AppContext.Provider value={value}>
            {Children}
        </AppContext.Provider>
    )
 }
 export const useAppContext=()=> useContext(AppContext)