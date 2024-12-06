import { usePathname, useRouter } from "next/navigation"
import { useDeviceSettingBackAndExit } from "../08-04-device-setting-back-and-exit/hook"

const 종료되어야하는페이지들 = [
    "/section08/08-04-android-back-and-exit"
]

export const useRoutingSettingBackAndExit = () => {
    const router = useRouter()
    const pathname = usePathname()
    
    const { fetchApp } = useDeviceSettingBackAndExit()

    const onRoutingBack = () => {
        // 1. 종료되어야 하는 페이지라면? => 종료요청
        if(종료되어야하는페이지들.includes(pathname)){
            return fetchApp({ query: "exitDeviceRoutingForBackSet" })
        }

        // 2. 그 외의 페이지라면? => 뒤로가기
        router.back()
    }

    return {
        onRoutingBack
    }
}