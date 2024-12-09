import { usePathname, useRouter } from "next/navigation"
import { useDeviceSettingViewTransition } from "../09-01-device-setting-view-transition/hook"

const 종료되어야하는페이지들 = [
    "/section08/08-04-android-back-and-exit"
]

export const useRoutingSettingViewTransition = () => {
    const router = useRouter()
    const pathname = usePathname()
    
    const { fetchApp } = useDeviceSettingViewTransition()

    const onRoutingBack = () => {
        // 1. 종료되어야 하는 페이지라면? => 종료요청
        if(종료되어야하는페이지들.includes(pathname)){
            return fetchApp({ query: "exitDeviceRoutingForBackSet" })
        }

        // 2. 그 외의 페이지라면? => 뒤로가기
        // router.back()

        // 09-01-view-transition 수업에서 뒤로가기 애니메이션 추가
        document.documentElement.classList.add("뒤로가기")
        document.startViewTransition(() => {
            router.back()
        }).finished.finally(() => {
            document.documentElement.classList.remove("뒤로가기")
        })


    }

    return {
        onRoutingBack
    }
}