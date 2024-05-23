import axios from "axios";
import {Buffer} from "buffer";
import uuid from 'react-native-uuid';
import React, {useEffect, useState} from "react";
import {ActivityIndicator, Image, View, StyleSheet} from "react-native";

import hasUninitializedValue from "./utils";


interface Props {
    urls: string[];
}

const Photo: React.FC<Props> = ({urls}) => {
    const [loading, setLoading] = useState(true);
    const [photoBuffer, setPhotoBuffer] = useState("");

    const handleLoadEnd = () => {
        console.log('Test');
        setLoading(false);
    };


    useEffect(() => {
        const addImagePart = (parts: Buffer[], reader: FileReader, index: number) => {
            let result = String(reader.result);

            const prefix = result.substring(0, result.indexOf(";base64,") + 8);
            result = result.substring(result.indexOf(";base64,") + 8);
            parts[index] = Buffer.from(result, 'base64');

            if (parts.length === urls.length && !hasUninitializedValue(parts)) {
                setPhotoBuffer(prefix + Buffer.concat(parts).toString('base64'));
            }
        }

        const fetchImage = async () => {
            let parts: Buffer[] = [];

            await Promise.all(
                urls.map(async(url: string, index: number) => {
                    await axios.get(url,{responseType: 'blob'}
                    ).then(async (response) => {
                        let reader = new FileReader();
                        reader.readAsDataURL(await response.data);
                        reader.onloadend = () => addImagePart(parts, reader, index);
                    })
                })
            );
        }

        fetchImage();
    },[]);

    return (
        <View style={{width: 120, height: 120, margin: 1}}>
            {loading && (
                <View style={styles.container}>
                    <ActivityIndicator  size="small" />
                </View>
            )}
            {photoBuffer !== "" && (
                <Image source={{uri: photoBuffer, cache: 'only-if-cached'}}
                        style={{width: 120, height: 120, margin: 1}}
                        key={String(uuid.v4())}
                        onLoadEnd={handleLoadEnd}
                />
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
    }
});
export default Photo;