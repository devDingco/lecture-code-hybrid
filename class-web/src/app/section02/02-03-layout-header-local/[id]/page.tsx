"use client"

import { Header } from "@/commons/layout/02-03-layout-header-local/header"
import { useEffect, useState } from "react"

export default function LayoutHeaderLocalPage() {
    const [title, setTitle] = useState("")

    useEffect(() => {
        // 3초가 걸려서 아이디가 boardId인 게시글 조회
        setTimeout(() => {
            const result = "철수가쓴글" // 제목
            setTitle(result)
        }, 3000)
    }, [])

    return (
        <div>
            <Header title={title}>
                <button>[ 북마크 ]</button>
            </Header>
            <div>내용입니다</div>
            <div>내용입니다</div>
            <div>내용입니다</div>
            <div>내용입니다</div>
            <div>내용입니다</div>
        </div>
    )
}