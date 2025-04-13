import axios from "axios";
import {useEffect, useState} from "react";
import {ScrollView} from "react-native";
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
        <ScrollView contentContainerStyle={{flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 500}}>
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}
            {!loading && Object.values(urls).map((photo: string[]) => (
                <Photo part_urls={photo} key={String(uuid.v4())}/>
            ))}

        </ScrollView>
    );
};
export default Gallery;