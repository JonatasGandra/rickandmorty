// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CharacterListScreen from "./src/screens/CharacterListScreen";
import CharacterDetailsScreen from "./src/screens/CharacterDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharacterList">
        <Stack.Screen
          name="CharacterList"
          component={CharacterListScreen}
          options={{ title: "Rick and Morty - Personagens" }}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetailsScreen}
          options={{ title: "Detalhes do Personagem" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
