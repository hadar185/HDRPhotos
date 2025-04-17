import axios from "axios";
import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import Photo from "./Photo";
import uuid from 'react-native-uuid';

const Gallery = () => {
    const [urls, setCollectionUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchCollectionUrls() {
        await axios.get(
        `http://10.100.102.3:8000/collection/2`
        ).then(async (response) => {
            setCollectionUrls(await response.data);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchCollectionUrls();
    },[]);

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center"}}>
            <ScrollView contentContainerStyle={{flexDirection:'row', flexWrap: 'wrap', justifyContent: "flex-start", padding: 5}}>
                {!loading && Object.values(urls).map((photo: string[]) => (
                    <Photo part_urls={photo} key={uuid.v4()}/>
                ))}
            </ScrollView>
        </View>
    );
};
export default Gallery;