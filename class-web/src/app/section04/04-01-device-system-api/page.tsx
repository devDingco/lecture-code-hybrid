"use client"

import { useDeviceSetting } from "@/commons/settings/03-06-device-setting/hook"

export default function PostMessageDeviceApiPromiseRefactoringPage() {
    const { fetchApp } = useDeviceSetting()

    // 3. API 요청하는 기능들
    const onClickSystemVersion = async () => {
        const result = await fetchApp({ query: "fetchDeviceSystemForAppSet" })
        alert(result.data.fetchDeviceSystemForAppSet.appVersion)
    }

    const onClickSystemPlatform = async () => {
        const result = await fetchApp({ query: "fetchDeviceSystemForPlatformSet" })
        alert(result.data.fetchDeviceSystemForPlatformSet.modelName)
    }

    const onClickLocationLatLng = async () => {
        const result = await fetchApp({ query: "fetchDeviceLocationForLatLngSet" })
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