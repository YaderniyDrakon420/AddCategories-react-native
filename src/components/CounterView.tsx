import { View, Text } from "react-native";
import { useCounterStore } from "../store/useCounterStore";

const CounterView = () => {
    const CounterView = useCounterStore((state) => state.count)

    return (
    <View>
        <Text>Counter View Component {CounterView}</Text>
    </View>)
}
export default CounterView;