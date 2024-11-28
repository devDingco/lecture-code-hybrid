import { HeaderGlobal } from "./header4";

// 글로벌헤더 + 로컬헤더
// export default function LayoutGlobalAndLocal({ children }){
//     return (
//         <div>
//             <HeaderGlobal />
//             <>{children}</>
//         </div>
//     )
// }

// 글로벌헤더(투명포함) + 로컬헤더(투명포함)
// export default function LayoutTransparent({ children }){
//     return (
//         <div>
//             <HeaderGlobal />
//             <>{children}</>
//         </div>
//     )
// }

// 글로벌헤더(투명포함) + 로컬헤더(투명포함) + 숏컨텐츠푸터 + 롱컨텐츠푸터
export default function LayoutContentsShortAndLong({ children }){
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                minHeight: "100vh"
            }}
        >
            <HeaderGlobal />
            <>{children}</>
        </div>
    )
}