import { View, Text, Button } from "react-native";
import { useCounterStore } from "../store/useCounterStore";

const Counter = () => {
    const Counter = useCounterStore((state) => state.count)
    const upHandler = useCounterStore((state) => state.up)
    const downHandler = useCounterStore((state) => state.down)
    const resetHandler = useCounterStore((state) => state.reset)

    return (
    <View>
        <Text>{Counter}</Text>
        <Button title="Up (+1)" onPress={() => upHandler(1)} />
        <Button title="Up (+5)" onPress={() => upHandler(5)} />
        <Button title="Down (-1)" onPress={() => downHandler(1)} />
        <Button title="Down (-5)" onPress={() => downHandler(5)} />
        <Button title = "Reset" onPress = {resetHandler}/>
    </View>)
}
export default Counter;