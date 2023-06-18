import AsyncStorage from "@react-native-async-storage/async-storage";

export default class SharedPrefs {
  static #instance;
  static getInstance = () => {
    if (this.#instance == null) {
      this.#instance = new SharedPrefs();
    }
    return this.#instance;
  };
  getAllKeys = async function () {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }

    console.log(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };
  storeValue = async function (key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  storeObject = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  getValue = async function (key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? value : null;
    } catch (e) {
      // error reading value
      return null;
    }
  };

  getObject = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
}
