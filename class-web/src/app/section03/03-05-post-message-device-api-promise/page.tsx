"use client"

declare const window: Window & {
    ReactNativeWebView: {
        postMessage: (message: string) => void
    }
}

import { useEffect } from "react"

const 나의요청중인API들 = {
    // fetchDeviceSystemForAppSet: null => API 요청시에 null 대신에 resolve가 들어옴
    // ...
    // ...
    // ...

    // fetchDeviceSystemForAppSet: resolve111,
    // fetchDeviceSystemForPlatformSet: resolve222,
    // fetchDeviceLocationForLatLngSet: resolve333  => 각 요청한 API별로 resolve가 다름
}

export default function PostMessageDeviceApiPromisePage() {

    useEffect(() => {

        // 1. 안드로이드에서 수신 대기
        document.addEventListener("message", (message: any) => {
            const response = JSON.parse(message.data)
            const query = Object.keys(response)[0] // fetchDeviceLocationForLatLngSet
            const resolve = 나의요청중인API들[query] // resolve333
            resolve({ data: response })
            delete 나의요청중인API들[query]
        })

        // 2. IOS에서 수신 대기
        window.addEventListener("message", (message: any) => {
            const response = JSON.parse(message.data)
            const query = Object.keys(response)[0] // fetchDeviceLocationForLatLngSet
            const resolve = 나의요청중인API들[query] // resolve333
            resolve({ data: response })
            delete 나의요청중인API들[query]
        })

    }, [])

    // 3. API 요청하는 기능들
    const onClickSystemVersion = async () => {
        const result = await new Promise((resolve) => {
            나의요청중인API들["fetchDeviceSystemForAppSet"] = resolve
            window.ReactNativeWebView.postMessage(
                JSON.stringify({ query: "fetchDeviceSystemForAppSet"})
            )
        })
        alert(result.data.fetchDeviceSystemForAppSet.appVersion)
    }

    const onClickSystemPlatform = async () => {
        const result = await new Promise((resolve) => {
            나의요청중인API들["fetchDeviceSystemForPlatformSet"] = resolve
            window.ReactNativeWebView.postMessage(
                JSON.stringify({ query: "fetchDeviceSystemForPlatformSet"})
            )
        })
        alert(result.data.fetchDeviceSystemForPlatformSet.modelName)
    }

    const onClickLocationLatLng = async () => {
        const result = await new Promise((resolve) => {
            나의요청중인API들["fetchDeviceLocationForLatLngSet"] = resolve
            window.ReactNativeWebView.postMessage(
                JSON.stringify({ query: "fetchDeviceLocationForLatLngSet"})
            )
        })
        alert(result.data.fetchDeviceLocationForLatLngSet.lat)
        alert(result.data.fetchDeviceLocationForLatLngSet.lng)
    }

    return (
        <>
            <button onClick={onClickSystemVersion}>App아! 내 핸드폰 버전정보 알려줘!</button>
            <button onClick={onClickSystemPlatform}>App아! 내 핸드폰 기종정보 알려줘!</button>
            <button onClick={onClickLocationLatLng}>App아! 내 핸드폰 위치정보 알려줘!</button>
        </>
    )
}