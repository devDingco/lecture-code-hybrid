import { Platform, Linking, AppState } from 'react-native'
import Constants from 'expo-constants'
import * as Device from 'expo-device'

export const useDeviceSystem2 = (onResponse) => {
    const isAndroid = Platform.OS === "android"
    const isIos = Platform.OS === "ios"

    const fetchDeviceSystemForAppSet = () => {
        onResponse({ 
            fetchDeviceSystemForAppSet: { 
                appVersion: 
                    (isAndroid && Constants.expoConfig?.android?.versionCode) ||
                    (isIos && Constants.expoConfig?.ios?.buildNumber)

            }
        })
    }

    const fetchDeviceSystemForPlatformSet = () => {
        onResponse({ 
            fetchDeviceSystemForPlatformSet: { 
                os: Platform.OS,
                osVersion: Device.osVersion, // IOS 10.3
                modelName: Device.modelName // iPhone 7 Plus
            }
        })
    }

    // 06-01-open-settings => 셋팅 화면으로 이동(열기)
    const openDeviceSystemForSettingSet = async () => {
        await Linking.openSettings()
        onResponse({
            openDeviceSystemForSettingSet: {
                message: "이동완료"
            }
        })
    }
    
    // 06-01-open-settings => AppState 조회
    const fetchDeviceSystemForAppStateSet = () => {
        const isForeground = AppState.currentState === "active"
        onResponse({
            fetchDeviceSystemForAppStateSet: {
                isForeground
            }
        })
    }

    return {
        fetchDeviceSystemForAppSet,
        fetchDeviceSystemForPlatformSet,
        openDeviceSystemForSettingSet,
        fetchDeviceSystemForAppStateSet
    }
}