import { useState } from "react"

export const useDeviceLayout = (onResponse) => {
    const [layout, setLayout] = useState({
        isNotchTranslucent: false,
        // notchContent: "dark-content", // light-content, dark-content
        // notchBackgroundColor: "transparent" // transparent, white, black, ...
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

    return {
        toggleDeviceLayoutForNotchTranslucentSet,
        layout
    }
}