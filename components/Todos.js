import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Todo from "./Todo"
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from "./Header.js"
import AddTodo from './AddTodo';
import { useContexto } from './ContextProvider';
import getRandomValues from 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todos = ({navigation}) => {
    const {setTodos, todos, setUserId, userId} = useContexto()

    function generarNumeroAleatorio() {
        const numeroAleatorio = Math.random();
        const numeroEnRango = Math.floor(numeroAleatorio * 100000000) + 1;
        return numeroEnRango.toString();
      }
    const storeData = async () => {
        try {
          await AsyncStorage.setItem("userId", generarNumeroAleatorio());
          console.log('Datos almacenados con éxito.');
        } catch (error) {
          console.error('Error al almacenar datos:', error);
        }
      };
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("userId");
        if (value !== null) {
            setUserId(value)
        } else {
            storeData()
        }
      } catch (error) {
        console.error('Error al recuperar datos:', error);
      }
    };  
    const getTodos = async () => {
      console.log("Ejecutada")
        const request = await fetch(`http://10.0.2.2:3000/todos/30844772`, {
          method: "GET"
      })
      const data = await request.json()
      console.log(data)
      setTodos(data)
  }  
  useEffect(()=>{
      getData()
      getTodos()
  },[])  
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