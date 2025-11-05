import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";

export default function CharacterListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0729e9ff" />
        <Text>Carregando personagens...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("CharacterDetails", { character: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#727171ff",
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#0729e9ff",
    borderColor:"#ffffffff",
    borderWidth: 4, 
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 15,
    color: "#ffffffff"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffffff"
  },
  species: {
    fontSize: 14,
    color: "#ffffffff",
  },
});
