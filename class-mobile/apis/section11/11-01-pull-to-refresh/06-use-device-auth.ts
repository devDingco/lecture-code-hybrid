import { useState } from "react"
// import { AsyncStorage } from 'react-native' => 옛날 방식(지금 삭제됨)
// import AsyncStorage from '@react-native-async-storage/async-storage' => 요즘 방식
import * as SecureStore from 'expo-secure-store'

export const useDeviceAuth = (onResponse) => {
    const [accessToken, setAccessToken] = useState("")

    const updateDeviceAuthForAccessTokenSet = (variables) => {
        setAccessToken(variables.accessToken)
        onResponse({
            updateDeviceAuthForAccessTokenSet: {
                message: "저장 완료!!"
            }
        })
    }

    const updateDeviceAuthForRefreshTokenSet = async (variables) => {
        // 1. AsyncStorage => 앱의 로컬스토리지
        // AsyncStorage.setItem("refreshToken", variables.refreshToken)

        // 2. SecureStore => 암호화된 스토리지
        //    2-1) 안드로이드: SharedPreferences 저장소(keystore로 암호화하여 저장됨)
        //    2-2) IOS: keychain 저장소(keychain으로 암호화하여 저장됨)
        await SecureStore.setItemAsync("refreshToken", variables.refreshToken)

        onResponse({
            updateDeviceAuthForRefreshTokenSet: {
                message: "저장 완료!"
            }
        })
    }

    const fetchDeviceAuthForAccessTokenSet = () => {
        onResponse({
            fetchDeviceAuthForAccessTokenSet: {
                accessToken
            }
        })
    }

    const fetchDeviceAuthForRefreshTokenSet = async () => {
        const refreshToken = await SecureStore.getItemAsync("refreshToken")
        onResponse({
            fetchDeviceAuthForRefreshTokenSet: {
                refreshToken
            }
        })
    }

    return {
        updateDeviceAuthForAccessTokenSet,
        updateDeviceAuthForRefreshTokenSet,
        fetchDeviceAuthForAccessTokenSet,
        fetchDeviceAuthForRefreshTokenSet
    }
}