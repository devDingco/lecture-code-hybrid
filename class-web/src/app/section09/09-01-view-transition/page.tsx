import Link from "next/link";

export default function ViewTransitionPage() {

    return (
        <div>
            <Link href="/section09/09-01-view-transition-moved">페이지 이동하기</Link>
            <div 
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "skyblue",
                    margin: "10px"
                }} 
            />
            <div 
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "skyblue",
                    margin: "10px"
                }} 
            />
            <div 
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "skyblue",
                    margin: "10px"
                }} 
            />
        </div>
    )
}