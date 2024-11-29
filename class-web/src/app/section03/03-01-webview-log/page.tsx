"use client"

import { webviewlog } from "@/commons/libraries/03-01-webview-log"

export default function WebviewLogPage() {

    const onClickButton = () => {
        fetch("https://koreanjson.com/posts/1")

        console.log("이것은 웹뷰입니다! - 크롬인스펙 확인하기") // 크롬 인스펙트 확인

        webviewlog("이것은 웹뷰입니다! - Next서버 확인하기") // Next서버 확인
    }

    return <button onClick={onClickButton}>버튼 클릭하기</button>
}