"use client"

import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { print } from 'graphql'
import { useDeviceSettingMicroFrontendSharedCache } from '../12-02-device-setting-micro-frontend-shared-cache/hook'

const GLOBAL_STORAGE = new InMemoryCache()

export default function ApolloSettingMicroFrontendSharedCache({children}){

    const { fetchApp } = useDeviceSettingMicroFrontendSharedCache()

    const deviceLink = new ApolloLink((operation, forward) => {

        // 1. 요청해줘!
        return forward(operation).map((res) => {

            // 2. 응답 처리해줘!!
            const operationName = operation.operationName
            const isSharedCache = operationName === "fetchSolplaceLogs"
            if(isSharedCache){
                fetchApp({
                    query: "createDeviceCacheForApolloSet",
                    variables: {
                       operationName, // fetchSolplaceLogs
                       variables: operation.variables,
                       printedQuery: print(operation.query), // FETCH_SOLPLACE_LOGS = gql`...`
                       data: res.data // 결과로 받은 데이터 => { title: "안녕...", .. }
                    }
                })
            }
            return res
        })

    })

    const httpLink = new HttpLink({
        uri: "https://main-hybrid.codebootcamp.co.kr/graphql"
    })

    const client = new ApolloClient({
        link: ApolloLink.from([deviceLink, httpLink]),
        cache: GLOBAL_STORAGE
    })

    return <ApolloProvider client={client}>{children}</ApolloProvider>

}