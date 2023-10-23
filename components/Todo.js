import { Text, View } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContexto } from './ContextProvider';

const Todo = ({todo}) => {
    const {setTodos, todos, userId} = useContexto()
    
    const deleteDB = async () => {
        const request = await fetch(`https://todo-app-server-4qkl.onrender.com/delete/${userId}/${todo.title}`, {
            method: "DELETE"
        })
    }

    const deleteTodo = () => {
        const newTodos = todos.filter((item) => item.title !== todo.title) 
        deleteDB()
        setTodos(newTodos)
    }

    return (
    <View style = {{justifyContent: "space-between", marginTop: 15,paddingVertical: 12, marginHorizontal: 20, backgroundColor: "#f5f5f5", flexDirection: "row", borderRadius: 10, paddingHorizontal: 20}}>
        <Text style = {{fontWeight: 400, fontSize: 22, color: "gray"}} >{todo.title}</Text>
        <TouchableOpacity onPress={()=>{deleteTodo()}} activeOpacity={0.7} style = {{paddingHorizontal: 15, paddingVertical: 5}}>
            <MaterialCommunityIcons name="delete" size={24} color="#fa4349" />
        </TouchableOpacity>    
    </View>
  )
}

export default Todo
