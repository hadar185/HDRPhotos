function hasUninitializedValue(array: any) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'undefined') {
            return true;
        }
    }
    return false;
}

export default hasUninitializedValue;