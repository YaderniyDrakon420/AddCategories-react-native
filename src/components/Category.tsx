import { View, Text, StyleSheet } from "react-native";

export interface CategoryProps {
    id?: string | number;
    title:string;
    icon:string;
    color:string;
}

function Category({title, icon, color}: CategoryProps) {
    return (
            <View style={styles.category}>
                    <View
                        style={[
                            styles.iconContainer,
                        { backgroundColor: color }
                            ]}
                            >
                    <Text style={styles.icon}>
                        {icon}
                    </Text>
                </View>
            
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    category: {
        alignItems: "center",
        width: 65,
    },
    iconContainer: {
        width: 65,
        height: 65,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        fontSize: 32,
    },
    title: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 13,
        fontWeight: "500",
        lineHeight: 16,
    },
});

export default Category;