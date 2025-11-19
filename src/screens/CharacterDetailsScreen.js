import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function CharacterDetailsScreen({ route }) {
  const { character } = route.params;

  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "#55CC44";
      case "Dead":
        return "#D63D2E";
      default:
        return "#9E9E9E";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.name}>{character.name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.label}>Status</Text>
          <View style={styles.statusRow}>
            <View style={[styles.statusDot, { backgroundColor: getStatusColor(character.status) }]} />
            <Text style={styles.value}>{character.status}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Espécie</Text>
          <Text style={styles.value}>{character.species}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Gênero</Text>
          <Text style={styles.value}>{character.gender}</Text>
        </View>

        {character.type && (
          <View style={styles.infoCard}>
            <Text style={styles.label}>Tipo</Text>
            <Text style={styles.value}>{character.type}</Text>
          </View>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.label}>Origem</Text>
          <Text style={styles.value}>{character.origin.name}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Localização</Text>
          <Text style={styles.value}>{character.location.name}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Episódios</Text>
          <Text style={styles.value}>{character.episode.length} episódios</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202329",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#3C3E44",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "#97CE4C",
    borderWidth: 4,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  infoContainer: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: "#3C3E44",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#97CE4C",
  },
  label: {
    fontSize: 14,
    color: "#9E9E9E",
    marginBottom: 4,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  value: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
});
