import AsyncStorage from '@react-native-community/async-storage';

class Storage {

    async getData() {
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys();
            return keys;
        } catch (e) {
            console.log(e);
        }

        console.log(keys)
    };

    async storeData(key, value) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log(e);
        }
    };

    async logData() {
        console.log(await this.getData());
    };

    async deleteData() {
        const keys = await this.getData();
        try {
            await AsyncStorage.multiRemove(keys);
        } catch (e) {
            console.log(e);
        };

        console.log('done');
    };

    async getItemData(item) {
        try {
            const jsonValue = await AsyncStorage.getItem(item);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    }

    async mountObject() {
        let object = []
        try {
            const keys = await this.getData();
            keys.map(async (item) => {
                object.push(await this.getItemData(item));
            })
            return object;
        } catch (e) {
            console.log(e);
        };
    };

};

export default new Storage;