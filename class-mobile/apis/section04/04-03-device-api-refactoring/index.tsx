import { useDeviceSystem } from "./01-use-device-system"
import { useDeviceLocation } from "./02-use-device-location"



export const useApis = (webviewRef) => {
    const APIS = {
        ...useDeviceSystem(),
        ...useDeviceLocation()
    }

    const onResponse = (result) => {
        webviewRef.current?.postMessage(JSON.stringify(result))
    }

    const onRequest = async (query) => {
        const result = await APIS[query]()
        onResponse(result)
    }

    return {
        onResponse,
        onRequest
    }
}