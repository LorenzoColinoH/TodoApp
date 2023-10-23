import { Text, View } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContexto } from './ContextProvider';

const Todo = ({todo}) => {
    const {setTodos, todos, userId} = useContexto()
    
    const deleteDB = async () => {
        const request = await fetch(`http://10.0.2.2:3000/delete/${userId}/${todo.title}`, {
            method: "DELETE"
        })
    }

    const deleteTodo = () => {
        const newTodos = todos.filter((item) => item.title !== todo.title) 
        deleteDB()
        setTodos(newTodos)
    }

    return (
    <View style = {{justifyContent: "space-between", marginTop: 15,paddingVertical: 4, marginHorizontal: 20, backgroundColor: "lightgray", flexDirection: "row", borderRadius: 10, paddingHorizontal: 10}}>
        <Text style = {{fontWeight: 400, fontSize: 20}} >{todo.title}</Text>
        <TouchableOpacity onPress={()=>{deleteTodo()}} activeOpacity={0.7}>
            <MaterialCommunityIcons name="delete" size={24} color="#fa4349" />
        </TouchableOpacity>    
    </View>
  )
}

export default Todo
