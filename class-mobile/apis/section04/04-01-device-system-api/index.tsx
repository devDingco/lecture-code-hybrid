import { Platform } from 'react-native'
import Constants from 'expo-constants'
import * as Device from 'expo-device'

export const useApis = (webviewRef) => {
    const isAndroid = Platform.OS === "android"
    const isIos = Platform.OS === "ios"

    const onResponse = (result) => {
        webviewRef.current?.postMessage(JSON.stringify(result))
    }

    const onRequest = (query) => {
        switch(query){
            case "fetchDeviceSystemForAppSet": {
                onResponse({ 
                    fetchDeviceSystemForAppSet: { 
                        appVersion: 
                            (isAndroid && Constants.expoConfig?.android?.versionCode) ||
                            (isIos && Constants.expoConfig?.ios?.buildNumber)

                    }
                })
                break;
            }
    
            case "fetchDeviceSystemForPlatformSet": {
                onResponse({ 
                    fetchDeviceSystemForPlatformSet: { 
                        os: Platform.OS,
                        osVersion: Device.osVersion, // IOS 10.3
                        modelName: Device.modelName // iPhone 7 Plus
                    }
                })
                break;
            }
    
            case "fetchDeviceLocationForLatLngSet": {
                onResponse({ fetchDeviceLocationForLatLngSet: { lat: 37, lng: 128 }})
                break;
            }
        }
    }

    return {
        onResponse,
        onRequest
    }
}