"use client"

import { Footer } from "@/commons/layout/02-05-layout-footer-contents-short-and-long/footer"
import { useState } from "react"

export default function LayoutFooterContentsShortAndLongPage(){
    const [isLongContents, setIsLongContents] = useState(false)

    const onClickToggle = () => {
        setIsLongContents(prev => !prev)
    }
    
    return (
        <>
            <main>
                <button onClick={onClickToggle}>[ 숏컨텐츠 / 롱컨텐츠 (토글) ]</button>
                <br />
                제목: <input type="text" /> <br />
                내용: <input type="text" /> <br />
                작성자: <input type="text" /> <br />

                {isLongContents && new Array(10).fill(1).map(() => (
                    <>
                        제목: <input type="text" /> <br />
                        내용: <input type="text" /> <br />
                        작성자: <input type="text" /> <br />
                    </>
                ))}
            </main>
            <Footer>
                <button>등록하기</button>
            </Footer>
        </>
    )
}