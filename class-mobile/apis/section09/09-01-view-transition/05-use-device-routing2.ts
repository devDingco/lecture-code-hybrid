import { useEffect, useState } from "react"
import { BackHandler, ToastAndroid } from 'react-native'

export const useDeviceRouting2 = (onResponse) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const backHandler = () => {
            if(count === 1) {
                BackHandler.exitApp() // '뒤로' 버튼이 이미 한 번 눌린 상태(count: 1)에서 한 번 더 눌렸으므로 종료
            } else {
                onResponse({ back: true }) // 웹뷰한테 안드로이드 백버튼 눌렸다고 알려주기
            }

            return true // 안드로이드 백버튼 내장기능(기본기능) 무시하기
        }

        BackHandler.addEventListener("hardwareBackPress", backHandler)

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backHandler)
        }
    }, [count])

    // 08-04-android-back-and-exit => 안드로이드 백버튼과 종료기능 연결
    const exitDeviceRoutingForBackSet = () => {
        ToastAndroid.show("'뒤로' 버튼을 한 번 더 누르면, 앱이 종료됩니다.", ToastAndroid.SHORT)
        setCount(1) // 뒤로 가기 이미 1번 눌렸다고 알리기 
        setTimeout(() => setCount(0), 2000) // 2초 뒤 원상복귀
    }

    return {
        exitDeviceRoutingForBackSet
    }
}