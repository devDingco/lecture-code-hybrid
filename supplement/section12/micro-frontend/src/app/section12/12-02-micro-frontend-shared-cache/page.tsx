"use client"

import { useApolloClient } from "@apollo/client"

export default function MicroFrontendPage(){
    const client = useApolloClient()

    const onClickButton = () => {
        alert(JSON.stringify(client.cache.extract()))
    }

    return (
        <>
            <div>내설정 메뉴</div>
            <button onClick={onClickButton}>진짜로 들어와있는지 캐시 확인하기</button>
        </>
    )
}