import { FAB } from "react-native-paper";

export default function FabAddTranaction({navigation}) {

    return <FAB
        style={{
            borderColor: "black",
            margin: 16,
            right: 0,
            bottom: 0,
            borderWidth: 2,
            position: 'absolute',
        }}
        icon="plus"
        onPress={() => navigation.navigate('AddTransaction')}
    />
}
