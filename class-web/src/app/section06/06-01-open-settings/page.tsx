"use client"

import { webviewlog } from "@/commons/libraries/03-01-webview-log"
import { useDeviceSetting } from "@/commons/settings/05-02-device-setting-redirect/hook"

export default function OpenSettingsPage() {
    const { fetchApp } = useDeviceSetting()

    const onClickOpenSettings = async () => {
        // 1. 셋팅화면 보여줘!
        await fetchApp({ query: "openDeviceSystemForSettingSet" })

        // * 주의) 아래의 코드는 셋팅 화면에서 돌아온 후 실행되는 것 아님!!
        //        셋팅화면이 내 앱 위에 올라왔을 뿐, 내 앱은 백그라운드에서 여전히 동작중
        //        따라서, 현재 함수내의 코드들 모두 실행됨(셋팅화면이랑 상관없이)

        // 2. 포그라운드로 돌아왔는지 아닌지 확인해줘!
        const 나의인터벌 = setInterval(async () => {
            const result = await fetchApp({ query: "fetchDeviceSystemForAppStateSet" })
            const isForeground = result.data.fetchDeviceSystemForAppStateSet.isForeground
            webviewlog(isForeground)
            if(!isForeground) return
            
            // 3. 포그라운드로 돌아왔다면? 변경된 권한(위치 또는 알림 등) 조회해줘!
            webviewlog("권한을 다시 조회할게요!!") // 처리로직

            // 4. 다 끝났으면, 인터벌 삭제해줘!
            clearInterval(나의인터벌)
        }, 1000)

    }

    return <button onClick={onClickOpenSettings}>[ 권한설정 ]</button>
}