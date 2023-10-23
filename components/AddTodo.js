import { StyleSheet, Text, View, TextInput, Touchable } from 'react-native'
import React, {useState} from 'react'
import { useContexto } from './ContextProvider'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Alert } from 'react-native'
const AddTodo = ({toggle, setToggle}) => {
    const [inputTodo, setInputTodo] = useState("")
    const {setAddToggle, addToggle, setTodos, todos, userId} = useContexto()
    
    const pushTodo = async () => {
        const request = await fetch("https://todo-app-server-4qkl.onrender.com/newTodo", {
            method: "POST",
            body: JSON.stringify({
                title: inputTodo,
                userId
            }),
            headers: {
                "content-type" : "application/json"
            }
        })
    }

    const addTodo = () => {
        const coincidencias = todos.filter((todo)=> todo.title === inputTodo)
        if (coincidencias.length === 0){
            setTodos(prev=> [...prev, {title: inputTodo}])
            pushTodo()
        }    
        else 
            Alert.alert("Este título de todo ya existe")
    }

    return (
    <View style = {{width: "100%"}}>
      {
          addToggle ? (
            <View style = {{alignItems: "center"}}>
                <TextInput style = {{padding: 20, width: "100%"}} placeholder='Add todo' value = {inputTodo} onChangeText={(text)=>setInputTodo(text)}/>
                <View style = {{flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                    <TouchableOpacity onPress={()=>{if (inputTodo.length !== 0) {setAddToggle(prev => !prev);addTodo(); setInputTodo("")} else Alert.alert("Error", "Escribe un todo")}} style = {{borderRadius: 10, backgroundColor: "#2b81b3", padding: 8, paddingHorizontal: 40, width: 150, alignItems: "center"}}>
                    <Text style = {{fontWeight: "bold", fontSize: 14, color: "white"}}>Add Todo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setAddToggle(prev => !prev)}} style = {{borderRadius: 10, backgroundColor: "#cc0634", padding: 8, paddingHorizontal: 40, width: 150, alignItems: "center"}}>
                    <Text style = {{fontWeight: "bold", fontSize: 15, color: "white"}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
          ) : (<></>)
      }  
    </View>
  )
}

export default AddTodo
