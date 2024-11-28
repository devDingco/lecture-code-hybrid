"use client"

import { useParams, usePathname } from "next/navigation"
import { HEADER_OPTIONS } from "./constants2"

// 1. 베이스헤더
const HeaderBase = ({ children, hasLogo, hasBack, title }) => {
    return (
        <header 
            style={{
                display: "flex",
                width: "100vw",
                height: "3.125rem",
                gap: "0.312rem",
                backgroundColor: "yellow"
            }}
        >
            {hasLogo && <div>로고</div>}
            {hasBack && <div>[ 뒤로가기버튼 ]</div>}
            {title ? <div>{title}</div> : <></>}
            {children ? <>{children}</> : <></>}
        </header>
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
