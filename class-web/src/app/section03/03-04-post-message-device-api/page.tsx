"use client"

declare const window: Window & {
    ReactNativeWebView: {
        postMessage: (message: string) => void
    }
}

import { useEffect } from "react"

export default function PostMessageAppToWeb() {

    useEffect(() => {

        // 1. 안드로이드에서 수신 대기
        document.addEventListener("message", (message: any) => {
            alert(`App에서 보내준 데이터: ${message.data}`)
        })

        // 2. IOS에서 수신 대기
        window.addEventListener("message", (message: any) => {
            alert(`App에서 보내준 데이터: ${message.data}`)
        })

    }, [])

    // 3. API 요청하는 기능들
    const onClickSystemVersion = () => {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({ query: "fetchDeviceSystemForAppSet"})
        )
    }

    const onClickSystemPlatform = () => {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({ query: "fetchDeviceSystemForPlatformSet"})
        )
    }

    const onClickLocationLatLng = () => {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({ query: "fetchDeviceLocationForLatLngSet"})
        )
    }

    return (
        <>
            <button onClick={onClickSystemVersion}>App아! 내 핸드폰 버전정보 알려줘!</button>
            <button onClick={onClickSystemPlatform}>App아! 내 핸드폰 기종정보 알려줘!</button>
            <button onClick={onClickLocationLatLng}>App아! 내 핸드폰 위치정보 알려줘!</button>
        </>
    )
}