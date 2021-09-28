import AsyncStorage from '@react-native-async-storage/async-storage';

export class MyAsyncStorage {
  public static async getObject<T>(key: string, defaultValue: T): Promise<T> {
    return JSON.parse(await this.getString(key, JSON.stringify(defaultValue)));
  }

  public static async getNumber(
    key: string,
    defaultValue: number,
  ): Promise<number> {
    return Number(await this.getString(key, defaultValue.toString()));
  }

  public static async getString(
    key: string,
    defaultValue: string,
  ): Promise<string> {
    try {
      return Promise.resolve((await AsyncStorage.getItem(key)) ?? defaultValue);
    } catch (e) {
      console.error(e);
      return Promise.resolve(defaultValue);
    }
  }

  public static async getBool(
    key: string,
    defaultValue: boolean,
  ): Promise<boolean> {
    return Boolean(await this.getString(key, defaultValue.toString()));
  }

  public static async setObject<T>(
    key: string,
    value: T,
    onError?: (error?: Error) => void,
  ): Promise<void> {
    return await this.setString(key, JSON.stringify(value), onError);
  }

  public static async setNumber(
    key: string,
    value: number,
    onError?: (error?: Error) => void,
  ): Promise<void> {
    return await this.setString(key, value.toString(), onError);
  }

  public static async setBool(
    key: string,
    value: boolean,
    onError?: (error?: Error) => void,
  ): Promise<void> {
    return await this.setString(key, value.toString(), onError);
  }

  public static async setString(
    key: string,
    value: string,
    onError?: (error?: Error) => void,
  ): Promise<void> {
    try {
      return await AsyncStorage.setItem(key, value, onError);
    } catch (e) {
      console.error(e);
      if (onError != null) {
        onError(e);
      }
      return Promise.resolve();
    }
  }

  public static async remove(
    key: string,
    onError?: (error?: Error) => void,
  ): Promise<void> {
    try {
      return await AsyncStorage.removeItem(key, onError);
    } catch (e) {
      console.error(e);
      if (onError != null) {
        onError(e);
      }
      return Promise.resolve();
    }
  }
}
