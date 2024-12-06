import { useState } from "react"

export const useDeviceLayout2 = (onResponse) => {
    const [layout, setLayout] = useState({
        isNotchTranslucent: false,
        // notchContent: "dark-content", // light-content, dark-content
        // notchBackgroundColor: "transparent" // transparent, white, black, ...

        isPinchZoom: false // 07-02-picture-full-screen-pinch-zoom => 핀치줌 토글 추가(기본: false)
    })
    
    const toggleDeviceLayoutForNotchTranslucentSet = () => {
        setLayout(prev => ({
            ...prev,
            isNotchTranslucent: !prev.isNotchTranslucent
        }))

        onResponse({
            toggleDeviceLayoutForNotchTranslucentSet: {
                message: "변경완료"
            }
        })
    }

    // 07-02-picture-full-screen-pinch-zoom => 핀치줌 토글 API 추가
    const toggleDeviceLayoutForPinchZoomSet = () => {
        setLayout(prev => ({
            ...prev,
            isPinchZoom: !prev.isPinchZoom
        }))

        onResponse({
            toggleDeviceLayoutForPinchZoomSet: {
                message: "변경완료"
            }
        })
    }

    return {
        toggleDeviceLayoutForNotchTranslucentSet,
        toggleDeviceLayoutForPinchZoomSet,
        layout
    }
}