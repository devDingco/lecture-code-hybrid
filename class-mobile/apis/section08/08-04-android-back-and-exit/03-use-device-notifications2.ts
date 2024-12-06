import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'

// 1. 알람 수신 대기(IOS 필수)
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    })
})

export const useDeviceNotifications2 = (onResponse) => {

    // 2. 알람 스케줄 생성
    const createDeviceNotificationsForHelloSet = async (variables) => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: `${variables.name}님 회원가입을 축하합니다!`,
                body: "앞으로의 여정을 함께 하게 되어 반갑습니다!^^ 행복한 하루 되세요!",

                // 05-02-schedule-notifications-click => 알람클릭시 제공할 데이터
                data: {
                    page: "/section05/05-02-schedule-notifications-click-moved" // 웹뷰 페이지 경로
                }
            },
            trigger: null
        })

        onResponse({
            createDeviceNotificationsForHelloSet: {
                message: "알림 등록 완료"
            }
        })
    }

    // 3. 알람 권한 요청
    const requestDeviceNotificationsForPermissionSet = async () => {
        await Notifications.requestPermissionsAsync()

        onResponse({
            requestDeviceNotificationsForPermissionSet: {
                message: "요청완료"
            }
        })
    }

    // 05-02-schedule-notifications-click => 알람 클릭 대기
    useEffect(() => {
        Notifications.addNotificationResponseReceivedListener((response) => {
            const notificationData = response.notification.request.content.data
            
            // 앱에 응답 보내기
            onResponse({ redirect: notificationData.page })
        })
    }, [])

    return {
        createDeviceNotificationsForHelloSet,
        requestDeviceNotificationsForPermissionSet
    }

}