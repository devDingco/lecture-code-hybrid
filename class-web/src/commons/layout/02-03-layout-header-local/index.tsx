import { HeaderGlobal } from "./header";

// 글로벌헤더 + 로컬헤더
export default function LayoutGlobalAndLocal({ children }){
    return (
        <div>
            <HeaderGlobal />
            <>{children}</>
        </div>
    )
}