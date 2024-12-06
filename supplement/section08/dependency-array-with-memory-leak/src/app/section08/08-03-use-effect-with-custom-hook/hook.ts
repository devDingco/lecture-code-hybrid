"use client"

import { useEffect, useState } from "react"

export default function useCustomHook() {
    const [count, setCount] = useState(0)

    const onClickCountCheck = () => {
        alert(`현재카운트: ${count}`)
    }

    useEffect(() => {
        const 나의인터벌 = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(나의인터벌)
        }
    }, [])

    return {
        onClickCountCheck
    }
}