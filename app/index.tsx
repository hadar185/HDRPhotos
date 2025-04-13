import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Gallery from "@/gallery/Gallery";

export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Gallery />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});