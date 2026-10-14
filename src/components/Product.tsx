import { ImageSourcePropType, View, Image, Text, Pressable, StyleSheet } from 'react-native';

interface ProductProps {
    title: string;
    price: string;
    rating: string;
    icon: ImageSourcePropType;
}

function Product ({title,price,rating,icon}: ProductProps) {
    return (
            <View style = {styles.product}>
                <Text style={styles.like}>♡</Text>
                <Image source={icon} style={styles.iconImage}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
                <View style={styles.footer}>
                    <Text style={styles.rating}>{rating}</Text>
                    <Pressable style={styles.pressable}>
                    <Text style={styles.btnText}>🛒 Додати</Text>
                    </Pressable>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
  product: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  iconImage: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  like: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 18,
    color: '#8E8E93',
    zIndex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 12,
  },
    footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
    rating: {
    fontSize: 11,
    color: '#8E8E93',
    fontWeight: '500',
    position: 'absolute',
    left: 0,
  },
    pressable: {
    backgroundColor: '#0D8A48',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default Product;