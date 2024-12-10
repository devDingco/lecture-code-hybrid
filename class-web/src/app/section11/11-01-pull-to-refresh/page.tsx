"use client"

import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const fetchItems = () => 
    new Array(10).fill(1).map((el) => ({
        id: Math.random(),
        title: "게시글제목"
    }))

export default function PullToRefreshPage() {
    const [items, setItems] = useState(fetchItems())

    const onNext = () => {
        setItems((prev) => [...prev, ...fetchItems()])
    }

    const onRefresh = () => {
        setItems(fetchItems())
    }

    return (
        <>
            <div>아래는 게시글 목록입니다. (총갯수: {items.length})</div>
            <div>============================</div>
            <InfiniteScroll
                hasMore={true}
                dataLength={items.length}
                loader={<div>로딩중</div>}
                next={onNext}

                // pull-to-refresh 설정하기
                pullDownToRefresh={true} // 1. 당겨서 리프레시 할래?
                pullDownToRefreshThreshold={150} // 2. 얼만큼 많이 당길래?
                pullDownToRefreshContent={
                    <div style={{ textAlign: "center", color: "blue" }}>
                        조금 더 당겨야 리프레시됩니다. {/* 3. 살짝 당겼니? */}
                    </div>
                }
                releaseToRefreshContent={
                    <div style={{ textAlign: "center", color: "red" }}>
                        지금 손을 떼면 리프레시됩니다. {/* 4. 많이 당겼네! */}
                    </div>
                }
                refreshFunction={onRefresh} // 5. 이제 손 떼면, 서버에서 새롭게 1페이지만 받아옴(스크롤 내리면 그때 2페이지 다시 받기!)
            >
                {items.map((el) => (
                    <div 
                        key={el.id}
                        style={{
                            height: "100px",
                            backgroundColor: "yellow",
                            margin: "10px"
                        }}
                    >
                        <div>{el.title}</div>
                    </div>
                ))}
            </InfiniteScroll>
        </>
    )

}