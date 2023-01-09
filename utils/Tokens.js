import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
    try {
        let value = await AsyncStorage.getItem('@storage_Key')
        console.log(value,"3")
        return value
       
    } catch (e) {

    }
}

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('@storage_Key',token)
       
    } catch (e) {

    }
}


export const clear = async () => {
    try {
        await AsyncStorage.clear()

    } catch (e) {

    }
}


export const removeToken = async (key) => {
    try {
        await AsyncStorage.removeItem(key)

    } catch (e) {

    }
}


