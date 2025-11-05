import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CharacterDetailsScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.text}>Espécie: {character.species}</Text>
      <Text style={styles.text}>Status: {character.status}</Text>
      <Text style={styles.text}>Gênero: {character.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0729e9ff",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderColor:"#000000ff",
    borderWidth: 4,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
