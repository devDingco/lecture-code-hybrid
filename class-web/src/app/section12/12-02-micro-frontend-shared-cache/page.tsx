"use client"

import { gql, useApolloClient } from "@apollo/client"

const FETCH_SOLPLACE_LOGS = gql`
    query fetchSolplaceLogs {
        fetchSolplaceLogs {
            id
            title
            contents
    }
}
`

export default function MicroFrontendSharedCachePage(){

    const client = useApolloClient()

    const onClickButton = () => {
        client.query({
            query: FETCH_SOLPLACE_LOGS,
            fetchPolicy: "network-only" // 테스트시 2번 이상 계속 눌러도 새롭게 테스트 위함
        })
    }

    return (
        <>
            <div>게시판 메뉴</div>
            <button onClick={onClickButton}>여행로그 조회하기</button>
        </>
    )
}