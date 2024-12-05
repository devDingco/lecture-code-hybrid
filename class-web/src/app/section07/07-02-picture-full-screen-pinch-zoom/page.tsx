"use client"

import { useDeviceSetting } from "@/commons/settings/05-02-device-setting-redirect/hook"
import { useState } from "react"

export default function PictureFullScreenPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const { fetchApp } = useDeviceSetting()

    const onClickFullScreen = async () => {
        setIsLoading(true) // 로딩처리하기

        // 다음 틱으로 넘기기
        window.setTimeout(() => {
            setIsFullScreen(true)
            fetchApp({ query: "toggleDeviceLayoutForNotchTranslucentSet" })
            fetchApp({ query: "toggleDeviceLayoutForPinchZoomSet" })
            document.querySelector("meta[name='viewport']")?.setAttribute("content", `
                width=device-width, 
                initial-scale=1.0, 
                minimum-scale=1.0, 
                maximum-scale=3.0, 
                user-scalable=yes
            `)

            window.setTimeout(() => {
                setIsLoading(false) // 로딩 해제하기
            }, 100)
        }, 100)
    }

    const onClickClose = async () => {
        // 여기도 동일한 방법으로 적용하기!
        setIsLoading(true)

        window.setTimeout(() => {
            setIsFullScreen(false)
            fetchApp({ query: "toggleDeviceLayoutForNotchTranslucentSet" })
            fetchApp({ query: "toggleDeviceLayoutForPinchZoomSet" })
            document.querySelector("meta[name='viewport']")?.setAttribute("content", `
                width=device-width,
                initial-scale=1.0,
                minimum-scale=1.0,
                maximum-scale=1.0,
                user-scalable=no
            `)

            window.setTimeout(() => {
                setIsLoading(false)
            }, 100)
        }, 100)
    }

    if(isLoading) return <></>
    return (
        <div>
            {isFullScreen ? (
                <div 
                    style={{
                        width: "100vw", // 실제 프로젝트시? => 모달 페이지 만들고 페러렐라우팅하기
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "black"
                    }}
                >
                    <button 
                        onClick={onClickClose}
                        style={{
                            position: "fixed", // 실제 프로젝트시? => 글로벌헤더에 hasExit 추가하기
                            left: "20px",
                            top: "40px",
                            color: "red"
                        }}
                    >
                        X
                    </button>
                    <img src="/images/02-04-dog.jpg" />
                </div>
            ): (
                <>
                    <img src="/images/02-04-dog.jpg" style={{width: "100px"}} />
                    <button onClick={onClickFullScreen}>전체화면에서 사진 보기</button>
                </>
            )}
        </div>
    )
}