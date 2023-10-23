import {Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContexto } from './ContextProvider'
const Header = () => {
    const {setAddToggle, addToggle} = useContexto()
    return (
        <View style = {{paddingHorizontal: 30, paddingTop: 60, justifyContent: "space-between", flexDirection: "row", alignItems: 'center'}}>
            <Text style = {{fontWeight: "600", fontFamily: "System", fontSize: 30}}>Todo List</Text>
            <TouchableOpacity onPress={()=>{setAddToggle(prev => !prev)}}>
                {
                   !addToggle ? (<Entypo name="plus" size={30} color="black" />) : 
                   (<Entypo name="minus" size={30} color="black" />)
                }
            </TouchableOpacity>
        </View>
    )
}


export default Header