import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Todo from "./Todo"
import Header from "./Header.js"
import AddTodo from './AddTodo';
import { useContexto } from './ContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todos = ({navigation}) => {
    const {setTodos, todos, setUserId, userId} = useContexto() 
    function generarNumeroAleatorio() {
        const numeroAleatorio = Math.random();
        const numeroEnRango = Math.floor(numeroAleatorio * 100000000) + 1;
        return numeroEnRango.toString();
      }

    const getData = async () => {
        try {
          let value = await AsyncStorage.getItem("userId");
          const datos = JSON.parse(value);
          if (value !== null) {
            return datos
          } else {
            storeData()
          }
        } catch (error) {
          console.error('Error al recuperar datos:', error);
        }
      }; 
      const storeData = async () => {
        try {
          const datos = JSON.stringify(generarNumeroAleatorio().toString())
          await AsyncStorage.setItem("userId", datos);
          getData()
          console.log('Datos almacenados con éxito.');
        } catch (error) {
          console.error('Error al almacenar datos:', error);
        }
      };
    const getTodos = async () => {
        const userIdd = await getData()
        setUserId(userIdd)
        const request = await fetch(`https://todo-app-server-4qkl.onrender.com/todos/${userIdd.toString()}`, {
          method: "GET"
      })
      console.log(request.status)
      if (request.status === 200){
        const data = await request.json()
        setTodos(data)
        console.log(data)
      }
  } 
  useEffect(()=>{
    getTodos()
  }, [])
  return (
      <View style = {styles.container}>
      <Header /> 
      <AddTodo />
      <View style = {{width: "100%", marginTop: 30}}>
        {
          todos && todos.map((todo, index)=> (<Todo key={index} todo = {todo}/>))
        }
      </View>
      <View style = {{width: "100%", backgroundColor: "red"}}>
      </View>
    </View>
  )
}

export default Todos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})