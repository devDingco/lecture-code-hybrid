"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ViewTransitionPage() {
    const router = useRouter()

    const onClickLink = (event) => {
        event.preventDefault()

        document.startViewTransition(() => {
            router.push(event.target.href)
        })
    }

    return (
        <div>
            <Link href="/section09/09-01-view-transition-moved" onClick={onClickLink}>페이지 이동하기</Link>
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