import { useDeviceSystem } from "./01-use-device-system"
import { useDeviceSystem2 } from "./01-use-device-system2"
import { useDeviceLocation } from "./02-use-device-location"
// import { useDeviceNotifications } from "./03-use-device-notifications"
import { useDeviceNotifications2 } from "./03-use-device-notifications2"
// import { useDeviceLayout } from "./04-use-device-layout"
import { useDeviceLayout2 } from "./04-use-device-layout2"
import { useDeviceRouting } from "./05-use-device-routing"
import { useDeviceRouting2 } from "./05-use-device-routing2"
import { useDeviceAuth } from "./06-use-device-auth"
import { useDeviceCache } from "./07-use-device-cache"

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
        useDeviceSystem2, //
        useDeviceLocation, 
        useDeviceNotifications2,
        useDeviceLayout2,
        useDeviceRouting2,
        useDeviceAuth,
        useDeviceCache,
    ].forEach((el) => {
        APIS = { ...APIS, ...el(onResponse) }
    })

    return {
        onResponse,
        onRequest,
        layout: APIS.layout
    }
}