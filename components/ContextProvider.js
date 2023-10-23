import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useContext, useEffect, useState} from 'react' 
import AsyncStorage from '@react-native-async-storage/async-storage';


const Context = createContext(null)

export const useContexto = () => {
    return useContext(Context)
}

const ContextProvider = ({children}) => {
    const [addToggle,setAddToggle] = useState(false) 
    const [todos,setTodos] = useState([])
    const [userId,setUserId] = useState("")

    return (
    <Context.Provider value = {{addToggle, setAddToggle,todos, setTodos, setUserId, userId}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider

const styles = StyleSheet.create({})