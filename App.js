import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Todos from "./components/Todos.js"
import ContextProvider, { useContexto } from "./components/ContextProvider.js"
import { useEffect } from 'react';
const Stack = createStackNavigator()

export default function App() {
  return (
    <ContextProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Todos' component={Todos} options={{headerShown: false,}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
