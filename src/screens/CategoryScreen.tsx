import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native"
import CategoryType from "../types/CategoryType"
import { useState, useEffect } from "react"
import CategoryList from "../components/CategoryList";
import { CategoryProps } from "../components/Category";

export default function CategoryScreen() {
  const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;
  const URL = `${API_BASE_URL}/categories`;

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState<Omit<CategoryProps, "id">>({
    title: "",
    icon: "",
    color: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error("Не вдалося завантажити дані");
      }

      const data = await res.json();
      setCategories(data);
    } catch (err: any) {
      console.error(err);
      setError("Помилка підключення до сервера");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCategory = async () => {
    if (!category.title || !category.icon || !category.color) {
      Alert.alert("Помилка", "Заповніть усі поля!");
      return;
    }

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
      });

      if (!res.ok) {
        throw new Error("Не вдалося додати категорію");
      }

      const createdCategory: CategoryProps = await res.json();

      setCategories((prev) => [...prev, createdCategory]);
      setCategory({ title: "", icon: "", color: "" });
    } catch (err: any) {
      console.error(err);
      Alert.alert("Помилка", err.message || "Щось пішло не так");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Screen</Text>

      <TextInput
        value={category.title}
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setCategory({ ...category, title: text })}
      />

      <TextInput
        value={category.icon}
        style={styles.input}
        placeholder="Icon"
        onChangeText={(text) => setCategory({ ...category, icon: text })}
      />

      <TextInput
        value={category.color}
        style={styles.input}
        placeholder="Color"
        onChangeText={(text) => setCategory({ ...category, color: text })}
      />

      <Button title="Add" onPress={handleAddCategory} />

      <Text style={{ textAlign: "center" }}>
        {category.title} {category.icon} {category.color}
      </Text>

      <CategoryList categories={categories} loading={loading} error={error} />
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    input:{
        borderColor: "black",
        borderWidth: 1,
        width: "80%",

    },
    container:{
        flexGrow: 0,
        alignItems: "center",
        gap: 20
    }
})