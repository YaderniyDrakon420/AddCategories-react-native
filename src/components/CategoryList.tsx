import { View, FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";
import Category from "./Category";
import { useState, useEffect } from "react";
import { CategoryProps } from "./Category";

interface CategoryListProps {
  categories: CategoryProps[];
  loading: boolean;
  error: string | null;
}

function CategoryList({ categories, loading, error }: CategoryListProps) {
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <Category title={item.title} icon={item.icon} color={item.color} />
        )}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});

export default CategoryList;