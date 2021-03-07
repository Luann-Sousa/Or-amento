
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orcamento from './Pages/Orcamento/index'


const Stack = createStackNavigator();

function App() {
    const screenOptionStyle = {
        headerStyle:{
            backgroundColor: "#050C3D"
        },
        headerTintColor:"#FFF",
        headerBackTitle:" Voltar "
    }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen 
        name="Orcamento" 
        component={Orcamento}
        options={{
            headerTitle: "Orçamento"
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;