"use client"

import { usePathname } from "next/navigation"
import { HEADER_OPTIONS } from "./constants"

export default function HeaderGlobal() {
    const pathname = usePathname() // pathname = "/section02/02-02-layout-header-global" 

    const options = HEADER_OPTIONS.GLOBAL[pathname] // { title: "게시글등록", hasLogo: false, hasBack: true }

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
            {options.hasLogo && <div>로고</div>}
            {options.hasBack && <div>[ 뒤로가기버튼 ]</div>}
            {options.title ? <div>{options.title}</div> : <></>}
        </header>
    )
}