import { 나의요청중인API들 } from "."

declare const window: Window & {
    ReactNativeWebView: {
        postMessage: (message: string) => void
    }
}

export const useDeviceSettingBackAndExit = () => {

    const fetchApp = async ({ query, variables = {} }) => {
        const result = await new Promise((resolve) => {
            나의요청중인API들[query] = resolve
            window.ReactNativeWebView.postMessage(
                JSON.stringify({ query, variables })
            )
        })
        return result
    }

    return {
        fetchApp
    }
}