import { gql, useApolloClient } from "@apollo/client"
import { useDeviceSettingMicroFrontendSharedCache } from "../12-02-device-setting-micro-frontend-shared-cache/hook"

export const useApolloSettingMicroFrontendSharedCache = () => {
    const client = useApolloClient()

    const { fetchApp } = useDeviceSettingMicroFrontendSharedCache()

    const onLoadSharedCache = async () => {
        const result = await fetchApp({ query: "fetchDeviceCacheForApolloSet" })
        const entries = Object.entries(result.data.fetchDeviceCacheForApolloSet)
        if(!entries.length) return
    
        // operationName은 중복을 막기 위한 key 관리 용도
        entries.map(([operationName, { printedQuery, data }]) => {
            client.writeQuery({
                query: gql`
                    ${printedQuery}
                `,
                data
            })
        })
    }

    const onLoadSharedToken = () => {
        // fetchApp({
        //     query: "fetchDeviceAuthForAccessTokenSet"
        // })
        // fetchApp({
        //     query: "fetchDeviceAuthForRefreshTokenSet"
        // })
        // setAccessToken() // Zustand
        // setRefreshToken() // Zustand
    }

    return {
        onLoadSharedCache,
        onLoadSharedToken
    }

}