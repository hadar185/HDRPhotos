import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes, User,
} from "@react-native-google-signin/google-signin";

import * as Google from "expo-auth-session/providers/google"

import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";

const GoogleAuthentication = () => {
    const [error, setError] = useState<any>();
    const [userInfo, setUserInfo] = useState<User>();

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: "774843979323-nnqdf2mtkufj9dvb05mnjd5ri3dr7pqh.apps.googleusercontent.com",
        androidClientId: "774843979323-qncto5ped1p0o0mul672988kkf474kbo.apps.googleusercontent.com"
    });

    useEffect(() => {
        handleSignInWithGoogle()
    }, [response]);

    async function handleSignInWithGoogle() {
        if (response?.type === "success")
            console.log(response?.authentication?.accessToken);
    }

    //
    // const signIn = async () => {
    //     console.log("Pressed sign in");
    //
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         setUserInfo(userInfo);
    //         setError(undefined);
    //     } catch (e) {
    //         setError(e);
    //     }
    // };
    //
    // const logout = () => {
    //     setUserInfo(undefined);
    //     GoogleSignin.revokeAccess();
    //     GoogleSignin.signOut();
    // };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => (promptAsync({showInRecents: false}))}><Text>Sign in with Google</Text></Pressable>
            {/*<Text>{JSON.stringify(error)}</Text>*/}
            {/*{userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}*/}
            {/*{userInfo ? (*/}
            {/*    <Button title="Logout" onPress={logout} />*/}
            {/*) : (*/}
            {/*    <GoogleSigninButton*/}
            {/*        size={GoogleSigninButton.Size.Standard}*/}
            {/*        color={GoogleSigninButton.Color.Dark}*/}
            {/*        onPress={signIn}*/}
            {/*    />*/}
            {/*)}*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default GoogleAuthentication;