import { StyleSheet, View, Pressable, Text } from 'react-native';
import {Ionicons} from "@expo/vector-icons";

type Props = {
    label?: string;
    icon?: string;
    buttonContainerStyle?: StyleSheet;
    buttonStyle?: StyleSheet;
    labelStyle?: StyleSheet;
    onPress?: () => void;
};

export default function Button({ label, buttonContainerStyle, buttonStyle, labelStyle, icon, onPress }: Props) {
    return (
        <View style={buttonContainerStyle || styles.buttonContainer}>
            <Pressable style={buttonStyle || styles.button} onPress={onPress}>
                {label && <Text style={labelStyle || styles.buttonLabel}>{label}</Text>}
                {icon && <Ionicons
                    name={icon}
                    size={30}
                />}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 30,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
