"use client"

import { useRoutingSettingViewTransition } from "@/commons/settings/09-01-routing-setting-view-transition/hook"

export default function ViewTransitionMovedPage() {
    const { onRoutingBack } = useRoutingSettingViewTransition()

    return (
        <div>
            {/* 모바일 헤더 */}
            <button onClick={onRoutingBack}>{`<< 뒤로가기`}</button>

            {/* 모바일 컨텐츠 */}
            <div 
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "blue",
                    margin: "10px"
                }} 
            />    
            <div 
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "blue",
                    margin: "10px"
                }} 
            /> 
            <div 
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "blue",
                    margin: "10px"
                }} 
            />  
        </div>
    )
}