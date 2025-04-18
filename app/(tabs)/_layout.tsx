import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import Button from "@/components/Button";
import {pickImageAsync} from "@/gallery/utils";
import axios from "axios/index";
import {Platform} from "react-native";

export default function RootLayout() {
    const uploadImage = async () => {
        let pickedImage = (await pickImageAsync()).assets[0];

        let filename = pickedImage.uri.split('/').pop() || "";
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        const formData = new FormData();
        formData.append('file', Platform.OS === "web"
            ? pickedImage.file
            : { uri: pickedImage.uri, name: filename, type: type });

        console.log(formData);

        await fetch("http://10.100.102.3:8000/upload/", {
            method: "POST",
            body: formData,
        });
    };

    return (
        <Tabs
        screenOptions={{
            headerTitleAlign: "center",
            headerRight: () => (
                <Button onPress={uploadImage} labelStyle={{color: "black", fontSize: 20}} icon={"add-circle-outline"} />
            )
        }}>
        <Tabs.Screen
            name="index"
            options={{
                headerTitle: "HDRPhotos",
                tabBarLabel: "Photos",
                tabBarIcon: ({color, focused}) => (
                    <Ionicons
                        name={focused ? "image-sharp" : "image-outline"}
                        color={color}
                        size={30}
                    />
                )
            }}
        />
        <Tabs.Screen
            name="catalog"
            options={{
                headerTitle: "Catalog",
                tabBarLabel: "Catalog",
                tabBarIcon: ({color, focused}) => (
                    <Ionicons
                        name={focused ? "albums-sharp" : "albums-outline"}
                        color={color}
                        size={30}
                    />
                )
            }}
        />
        </Tabs>
    );
}
