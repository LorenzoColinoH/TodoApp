import {Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContexto } from './ContextProvider'
const Header = () => {
    const {setAddToggle, addToggle} = useContexto()
    return (
        <View style = {{paddingHorizontal: 30, paddingTop: 40, justifyContent: "space-between", flexDirection: "row", alignItems: 'center'}}>
            <Text style = {{fontWeight: "bold", fontFamily: "System", fontSize: 30}}>Todo List</Text>
            <TouchableOpacity onPress={()=>{setAddToggle(prev => !prev)}}>
                {
                   !addToggle ? (<Entypo name="plus" size={24} color="black" />) : 
                   (<Entypo name="minus" size={24} color="black" />)
                }
            </TouchableOpacity>
        </View>
    )
}


export default Header