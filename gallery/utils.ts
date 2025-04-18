import * as ImagePicker from "expo-image-picker"

export function hasUninitializedValue(array: any) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'undefined') {
            return true;
        }
    }
    return false;
}

export async function pickImageAsync() {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled) {
        console.log(result);
        return result;
    }
}

export default hasUninitializedValue;
