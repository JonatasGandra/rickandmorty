import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, TextInput } from "react-native";
import axios from "axios";

export default function CharacterListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchCharacters(true);
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  async function fetchCharacters(isNewSearch = false) {
    try {
      if (isNewSearch) {
        setLoading(true);
        setCharacters([]);
      }

      const url = searchQuery
        ? `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
        : "https://rickandmortyapi.com/api/character";

      const response = await axios.get(url);
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
    } catch (error) {
      if (error.response?.status === 404) {
        setCharacters([]);
        setNextPage(null);
      } else {
        console.error("Erro ao buscar personagens:", error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function loadMoreCharacters() {
    if (!nextPage || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await axios.get(nextPage);
      const newCharacters = response.data.results;

      // Evita duplicação verificando IDs existentes
      setCharacters((prev) => {
        const existingIds = new Set(prev.map(char => char.id));
        const uniqueNewCharacters = newCharacters.filter(char => !existingIds.has(char.id));
        return [...prev, ...uniqueNewCharacters];
      });

      setNextPage(response.data.info.next);
    } catch (error) {
      console.error("Erro ao carregar mais personagens:", error);
    } finally {
      setLoadingMore(false);
    }
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
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: item.status === "Alive" ? "#55CC44" : item.status === "Dead" ? "#D63D2E" : "#9E9E9E" }]} />
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#97CE4C" />
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.center}>
      <Text style={styles.emptyText}>Nenhum personagem encontrado</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#97CE4C" />
        <Text style={styles.loadingText}>Carregando personagens...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar personagem..."
          placeholderTextColor="#9E9E9E"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202329",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202329",
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#202329",
  },
  searchInput: {
    backgroundColor: "#3C3E44",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#97CE4C",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#3C3E44",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  species: {
    fontSize: 14,
    color: "#9E9E9E",
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  status: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#97CE4C",
  },
  emptyText: {
    fontSize: 16,
    color: "#9E9E9E",
  },
});
