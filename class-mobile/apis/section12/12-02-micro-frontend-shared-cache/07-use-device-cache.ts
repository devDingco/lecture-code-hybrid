import { useState } from "react"

export const useDeviceCache = (onResponse) => {
    const [apolloCache, setApolloCache] = useState({})

    const createDeviceCacheForApolloSet = (variables) => {
        const { operationName, printedQuery, data } = variables

        setApolloCache((prev) => ({
            ...prev,
            [operationName]: {
                printedQuery,
                data
            }
        }))
        onResponse({
            createDeviceCacheForApolloSet: {
                message: "저장완료"
            }
        })
    }

    const fetchDeviceCacheForApolloSet = () => {
        onResponse({
            fetchDeviceCacheForApolloSet: apolloCache
        })
    }

    return {
        createDeviceCacheForApolloSet,
        fetchDeviceCacheForApolloSet
    }
}