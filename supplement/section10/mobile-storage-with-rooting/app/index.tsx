import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text } from "react-native"
import * as SecureStore from 'expo-secure-store'

export default function 나의시작화면() {

    useEffect(() => {
        // 1. AsyncStorage에 저장하기 => 루팅시 탈취 가능
        AsyncStorage.setItem("accessToken", "aslkjfklqwjefklasjf129129038")

        // 2. SecureStore에 저장하기 => 루팅시 탈취되어도 암호화되어있음!!
        SecureStore.setItemAsync("accessToken222", "1230981290309128391")
    }, [])

    return <Text>안녕하세요 실행 완료되었습니다</Text>
}