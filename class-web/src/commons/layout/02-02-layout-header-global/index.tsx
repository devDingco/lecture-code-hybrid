import HeaderGlobal from "./header";

export default function Layout({ children }){
    return (
        <div>
            <HeaderGlobal />
            <>{children}</>
        </div>
    )
}