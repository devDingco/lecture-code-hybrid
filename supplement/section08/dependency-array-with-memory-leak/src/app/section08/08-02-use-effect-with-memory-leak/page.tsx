"use client"

import { useEffect, useState } from "react"

export default function UseEffectMemoryLeakPage() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // 1. [문제상황]
        //     => 대기하는기능들(ex, setInterval, addEventListener 등)이 실행중인 상태에서,
        //        페이지가 이동되거나, state가 변경되어 리렌더되거나, useEffect의 의존성 배열을 감지하여 재실행 될 때,
        //        해당 대기하는기능들은 여전히 작동 중이므로 메모리에서 삭제되지 않음 => 메모리누수
        // setInterval(() => {
        //     alert(`현재 카운트는 몇 일까요? ${count}`)
        // }, 5000)

        // 2. [해결방법]
        //     => 대기하는기능들을 useEffect에서 사용할 때,
        //        클린업함수(기존의 componentWillUnmount)에서 강제로 삭제하고 나가자!
        const 나의인터벌 = setInterval(() => {
            alert(`현재 카운트는 몇 일까요? ${count}`)
        }, 5000)
        return () => {
            clearInterval(나의인터벌)
        }
    }, [count])

    const onClickCountUp = () => {
        setCount(count + 1)
    }

    return <button onClick={onClickCountUp}>카운트 올리기</button>
}