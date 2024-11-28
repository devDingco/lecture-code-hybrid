import { HeaderGlobal } from "./header3";

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
export default function LayoutTransparent({ children }){
    return (
        <div>
            <HeaderGlobal />
            <>{children}</>
        </div>
    )
}