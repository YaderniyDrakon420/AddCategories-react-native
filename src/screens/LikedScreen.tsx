import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Product } from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";

interface LikedScreenProps {
  products: Product[];
}

export default function LikedScreen({ products }: LikedScreenProps) {
  const likedProducts = products.filter((product) => product.isLiked);

  return (
    <View style={styles.container}>
      {likedProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={50} color="#9E9E9E" />
          <Text style={styles.emptyText}>
            Поки немає улюблених товарів
          </Text>
        </View>
      ) : (
        <View style={styles.productsGrid}>
          {likedProducts.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.favoriteButton}>
                <Ionicons
                  name="heart"
                  size={20}
                  color="#ff4d4f"
                />
              </View>

              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="contain"
              />

              <Text style={styles.productTitle} numberOfLines={1}>
                {product.title}
              </Text>

              <Text style={styles.productPrice}>
                {product.price}{" "}
                <Text style={styles.productUnit}>
                  {product.unit}
                </Text>
              </Text>

              <View style={styles.productFooter}>
                <View style={styles.ratingContainer}>
                  <Ionicons
                    name="star"
                    size={14}
                    color="#FFB300"
                  />

                  <Text style={styles.ratingText}>
                    {product.rating}{" "}
                    <Text style={styles.reviewsText}>
                      ({product.reviews})
                    </Text>
                  </Text>
                </View>

                <TouchableOpacity style={styles.addButton}>
                  <Ionicons
                    name="cart-outline"
                    size={16}
                    color="#FFFFFF"
                  />

                  <Text style={styles.addButtonText}>
                    Додати
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },

  productCard: {
    width: "48%",
    borderRadius: 16,
    padding: 12,
    position: "relative",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#FAFAFA",
  },

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },

  productImage: {
    width: "100%",
    height: 90,
    marginVertical: 8,
  },

  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#212121",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#212121",
  },

  productUnit: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#757575",
  },

  productFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 2,
    color: "#212121",
  },

  reviewsText: {
    fontSize: 11,
    color: "#9E9E9E",
    fontWeight: "normal",
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
    marginLeft: 4,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyText: {
    marginTop: 10,
    fontSize: 15,
    color: "#757575",
  },
});
