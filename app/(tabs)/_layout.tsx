import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function RootLayout() {
  return (
      <Tabs
        screenOptions={{
            headerTitleAlign: "center"
        }}>
        <Tabs.Screen
            name="index"
            options={{
                headerTitle: "Home",
                tabBarIcon: ({color, focused}) => (
                    <Ionicons
                        name={focused ? "home-sharp" : "home-outline"}
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
