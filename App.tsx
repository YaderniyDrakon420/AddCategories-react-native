import { StatusBar } from "expo-status-bar";
import { ImageBackground, Platform, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import MyFlatList from "./src/ui/MyFlatList";
import { BasicComponents } from "./src/ui/BasicComponents";
import { Inputs } from "./src/ui/Inputs";
import { MyKeyboard } from "./src/ui/MyKeybord";
import { LayoutExample } from "./src/ui/LayoutExample";
import CategoryScreen from "./src/screens/CategoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { TestScreen } from "./src/screens/TestScreen";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import ProductList from "./src/components/ProductList";
import AdaptationScreen from "./src/screens/AdaptationScreen";
import LikedScreen from "./src/screens/LikedScreen";
import { useState } from "react";
import { Product } from "./src/screens/HomeScreen";

export default function App() {
  const { width, height } = useWindowDimensions()
      console.log(`${width} ${height}`)
      console.log(Platform.OS)
  const [products, setProducts] = useState<Product[]>([]);
  return (
    // <LayoutExample />
    <SafeAreaProvider>
      <View style={styles.container}>
      {/* <ImageBackground
        source={{ uri: "https://picsum.photos/800/600" }}
        style={{ flex: 1, justifyContent: "center" }}
      > */}
        {/* <Text style={styles.text}>
          Ласкаво прошу до нашого додатку на React Native!
        </Text>
        <MyFlatList /> */}
        {/* <Inputs/> */}
        {/* <MyKeyboard/> */}
        {/* <CategoryScreen/> */}
        <HomeScreen/>
        <StatusBar style="auto" />
        {/* <TestScreen/> */}
        {/* <AdaptationScreen/> */}
        <StatusBar style="auto" />
        {/* <View style={[styles.item, {backgroundColor: "yellow"}]}></View>
        <View style={[styles.item, {backgroundColor: "green", alignSelf: "flex-start" }]}></View>
        <View style={[styles.item, {backgroundColor: "purple"}]}></View>
        <View style={[styles.item, {backgroundColor: "lime"}]}></View> */}
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    // container: {
    //   flexDirection: "row",
    //   flex:1,
    //   backgroundColor:"orange",
    //   width: "100%",
    //   height: "100%",
    //   justifyContent: "space-between",
    //   flexWrap: "wrap",
    //   alignItems: "center"
    // },
    // item: {
    //   height: "10%",
    //   width: "15%"
    // }

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center", // центрує вміст по вертикалі
  },
  text: {
    textAlign: "center", // центрує текст залежно від ширини екрана
    fontSize: 20,
    fontWeight: "bold",
  },
  flatListContainer: {
    flexGrow: 0, // не дає FlatList займати весь вертикальний екран
    marginVertical: 20, //відступ зверху та знизу
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "center", // центрує елементи FlatList по горизонталі
    alignItems: "center", // центрує елементи FlatList по вертикалі
    borderWidth: 1, // додає рамку навколо FlatList
    borderColor: "black",
  },
  item: {
    marginHorizontal: 10,
  },
});
