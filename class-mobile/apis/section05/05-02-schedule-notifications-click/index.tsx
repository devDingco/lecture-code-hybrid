import { useDeviceSystem } from "./01-use-device-system"
import { useDeviceLocation } from "./02-use-device-location"
// import { useDeviceNotifications } from "./03-use-device-notifications"
import { useDeviceNotifications2 } from "./03-use-device-notifications2"

export const useApis = (webviewRef) => {
    let APIS = {}

    const onResponse = (result) => {
        webviewRef.current?.postMessage(JSON.stringify(result))
    }

    const onRequest = (query, variables) => {
        APIS[query](variables)
    }

    // APIS = {
    //     ...useDeviceSystem(onResponse),
    //     ...useDeviceLocation(onResponse),
    //     ...useDeviceNotifications2(onResponse)
    // }

    // 한방에 주입하기(리팩토링)
    [
        useDeviceSystem, //
        useDeviceLocation, 
        useDeviceNotifications2
    ].forEach((el) => {
        APIS = { ...APIS, ...el(onResponse) }
    })

    return {
        onResponse,
        onRequest
    }
}