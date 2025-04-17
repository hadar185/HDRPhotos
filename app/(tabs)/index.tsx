import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Gallery from "@/gallery/Gallery";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Gallery />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});