import axios from "axios";
import {Buffer} from "buffer";
import uuid from 'react-native-uuid';
import React, {useEffect, useState} from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import { Image } from 'expo-image';

import hasUninitializedValue from "./utils";


interface Props {
    part_urls: string[];
}

const Photo: React.FC<Props> = ({part_urls}) => {
    const [loading, setLoading] = useState(true);
    const [photoBuffer, setPhotoBuffer] = useState("");


    useEffect(() => {
        const addImagePart = (parts: Buffer[], reader: FileReader, index: number) => {
            let result = String(reader.result);

            const prefix = result.substring(0, result.indexOf(";base64,") + 8);
            result = result.substring(result.indexOf(";base64,") + 8);
            parts[index] = Buffer.from(result, 'base64');

            if (parts.length === part_urls.length && !hasUninitializedValue(parts)) {
                setPhotoBuffer(prefix + Buffer.concat(parts).toString('base64'));
                setLoading(false);
            }
        }

        const fetchImage = async () => {
            let parts: Buffer[] = [];

            await Promise.all(
                part_urls.map(async(url: string, index: number) => {
                    await axios.get(url,{responseType: 'blob'}
                    ).then(async (response) => {
                        let reader = new FileReader();
                        reader.readAsDataURL(await response.data);
                        reader.onloadend = () => addImagePart(parts, reader, index);
                    });
                })
            );
        }

        fetchImage();
    },[]);

    if (loading) {
        return (
            <View style={{width: 125, height: 125, margin: 1}}>
                <View style={styles.container}>
                    <ActivityIndicator  size="small" />
                </View>
            </View>
        )
    }
    else {
        return (<View style={{width: 125, height: 125, margin: 1}}>
            {photoBuffer !== "" && (
                <Image
                    style={{width: 125, height: 125, margin: 1}}
                    source={{uri: photoBuffer}}
                    contentFit="cover"
                    transition={1000}
                    key={uuid.v4()}
                />
            )}
        </View>)
    }

    // return (
    //     <View style={{width: 120, height: 120, margin: 1}}>
    //         {loading && (
    //             <View style={styles.container}>
    //                 <ActivityIndicator  size="small" />
    //             </View>
    //         )}
    //         {photoBuffer !== "" && (
    //             <Image
    //                 style={{width: 120, height: 120, margin: 1}}
    //                 source={{uri: photoBuffer}}
    //                 contentFit="cover"
    //                 transition={1000}
    //                 onLoad={handleLoadEnd}
    //                 key={uuid.v4()}
    //             />
    //         )}
    //     </View>
    // );
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