import { View, Dimensions, Text, useWindowDimensions, StyleSheet } from "react-native"

export const TestScreen = () => {
    // const { width, height } = Dimensions.get("window")
    const { width, height } = useWindowDimensions()
    console.log(`${width} ${height}`)
    return (
        <View style={styles.container}>
           <Text>Hello</Text>
        </View> )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"orange",
    },
})