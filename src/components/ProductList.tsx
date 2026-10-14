import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import Product from "./Product";

function ProductList () {
    const products = [
        {id: 1, title: "Банани", price: "59грн/кг", rating: "⭐ 4.8(12)", icon: require("../../assets/b.jpg")},
        {id: 2, title: "Помідори", price: "89грн/кг", rating: "⭐ 4.6(98)", icon: require("../../assets/p.jpg")},
        {id:3, title: "Хліб бородинський", price: "28 грн/шт", rating: "⭐ 4.1(83)", icon: require("../../assets/bread.png")},
        {id:4, title: "Молоко Селянське", price: "48 грн/шт", rating: "⭐ 4.3(77)", icon: require("../../assets/m.avif")}
    ];
    const { width, height } = useWindowDimensions()
    const isMobile = width < 600;

    return (
      <View style={styles.container}>
      <FlatList
        key={isMobile ? "mobile-list" : "desktop-list"}
        horizontal={!isMobile}
        data={products}
        renderItem={({ item }) => (
          <Product 
            title={item.title} 
            price={item.price} 
            rating={item.rating} 
            icon={item.icon} 
          />
        )} 
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
        </View>
            )
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  listContainer: {
    paddingHorizontal: 15, 
    paddingVertical: 10,
  },
});

export default ProductList;