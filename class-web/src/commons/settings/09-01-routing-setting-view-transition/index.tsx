"use client"

// import { useEffect } from "react"

export default function RoutingSettingViewTransition({children}) {

    // useEffect(() => {

    //     // <Link /> (<a />)를 클릭했다면? 뷰-트랜지션 애니메이션
    //     window.addEventListener("click", (event) => {
    //         const isAnchor = event.target.closest("a")
    //         if(isAnchor) {
    //             document.startViewTransition()
    //         }
    //     })

    // }, [])

    return <>{children}</>
}