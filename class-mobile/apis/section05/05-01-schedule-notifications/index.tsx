import { useDeviceSystem } from "./01-use-device-system"
import { useDeviceLocation } from "./02-use-device-location"
import { useDeviceNotifications } from "./03-use-device-notifications"

export const useApis = (webviewRef) => {
    const APIS = {
        ...useDeviceSystem(),
        ...useDeviceLocation(),
        ...useDeviceNotifications(),
    }

    const onResponse = (result) => {
        webviewRef.current?.postMessage(JSON.stringify(result))
    }

    const onRequest = async (query, variables) => {
        const result = await APIS[query](variables)
        onResponse(result)
    }

    return {
        onResponse,
        onRequest
    }
}