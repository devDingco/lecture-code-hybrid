"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useRoutingSettingBackAndExit } from "../08-04-routing-setting-back-and-exit/hook"
import { useApolloSettingMicroFrontendSharedCache } from "../12-02-apollo-setting-micro-frontend-shared-cache/hook"

export const 나의요청중인API들 = {
    // fetchDeviceSystemForAppSet: null => API 요청시에 null 대신에 resolve가 들어옴
    // ...
    // ...
    // ...

    // fetchDeviceSystemForAppSet: resolve111,
    // fetchDeviceSystemForPlatformSet: resolve222,
    // fetchDeviceLocationForLatLngSet: resolve333  => 각 요청한 API별로 resolve가 다름
}

export default function DeviceSettingMicroFrontendSharedCache({ children }) {
    const router = useRouter()

    // <RoutingSetting /> 도 복사해서 가져와서 layout.tsx에서 import 하기!!
    // const { onRoutingBack } = useRoutingSettingBackAndExit()
    const {
        onLoadSharedCache,
        onLoadSharedToken
    } = useApolloSettingMicroFrontendSharedCache()

    useEffect(() => {
        const messageHandler = (message: any) => {
            if(!message.data) return
            const response = JSON.parse(message.data)
            if (response.redirect) return router.push(response.redirect)
            // if (response.back) return onRoutingBack()
            if (response.menuchange) {
                onLoadSharedCache()
                onLoadSharedToken()
                return
            }
                
            const query = Object.keys(response)[0] // fetchDeviceLocationForLatLngSet
            const resolve = 나의요청중인API들[query] // resolve333
            resolve({ data: response })
            delete 나의요청중인API들[query]
        }
        document.addEventListener("message", messageHandler) // 1. 안드로이드에서 수신 대기
        window.addEventListener("message", messageHandler) // 2. IOS에서 수신 대기

        return () => {
            document.removeEventListener("message", messageHandler)
            window.removeEventListener("message", messageHandler)
        }
    }, []) // onRoutingBack 주석처리

    return <>{children}</>
}