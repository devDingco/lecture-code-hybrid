"use client"

import { useParams, usePathname } from "next/navigation"
import { HEADER_OPTIONS } from "./constants3"

// 1. 베이스헤더
const HeaderBase = ({ children, hasLogo, hasBack, title, isTransparent }) => {
    return (
        <>
            <header 
                style={{
                    display: "flex",
                    width: "100vw",
                    height: "3.125rem",
                    gap: "0.312rem",
                    // backgroundColor: "yellow",

                    // 02-04-layout-header-transparent 수업에서 => 투명한헤더
                    position: "fixed", // 1. 투명한 영역 아래에 사진, 지도 등이 보이기,  2. 게시글등록 등 헤더 아래로 스크롤하기
                    zIndex: 100, // position으로 쌓임맥락을 형성한 다른 컨텐츠가 있더라도, 위로 올리자!
                    backgroundColor: isTransparent ? "transparent" : "yellow"
                }}
            >
                {hasLogo && <div>로고</div>}
                {hasBack && <div>[ 뒤로가기버튼 ]</div>}
                {title ? <div>{title}</div> : <></>}
                {children ? <>{children}</> : <></>}
            </header>

            {/* 02-04-layout-header-transparent 수업에서 추가 => 하단레이어 */}
            {isTransparent ? <></> : <div style={{ height: "3.125rem" }}></div>}
        </>
    )
}

// 2. 글로벌헤더
export function HeaderGlobal() {
    const pathname = usePathname() // pathname = "/section02/02-02-layout-header-global" 
    const params = useParams()
    const options = HEADER_OPTIONS(params).GLOBAL[pathname] // { title: "게시글등록", hasLogo: false, hasBack: true }

    return (
        <div style={{ display: options ? "block" : "none" }}>
            <HeaderBase {...options} />
        </div>
    )
}

// 3. 로컬헤더
export function Header({ children, ...rest }) {
    const pathname = usePathname()
    const params = useParams()
    const options = HEADER_OPTIONS(params).LOCAL[pathname]

    return (
        <div style={{ display: options ? "block" : "none" }}>
            <HeaderBase {...options} {...rest}>
                {children}
            </HeaderBase>
        </div>
    )
}
