import * as Notifications from 'expo-notifications'

// 1. 알람 수신 대기(IOS 필수)
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    })
})

export const useDeviceNotifications = () => {

    // 2. 알람 스케줄 생성
    const createDeviceNotificationsForHelloSet = (variables) => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: `${variables.name}님 회원가입을 축하합니다!`,
                body: "앞으로의 여정을 함께 하게 되어 반갑습니다!^^ 행복한 하루 되세요!"
            },
            trigger: null
        })

        return {
            createDeviceNotificationsForHelloSet: {
                message: "알림 등록 완료"
            }
        }
    }

    // 3. 알람 권한 요청
    const requestDeviceNotificationsForPermissionSet = async () => {
        await Notifications.requestPermissionsAsync()

        return {
            requestDeviceNotificationsForPermissionSet: {
                message: "요청완료"
            }
        }
    }

    return {
        createDeviceNotificationsForHelloSet,
        requestDeviceNotificationsForPermissionSet
    }

}