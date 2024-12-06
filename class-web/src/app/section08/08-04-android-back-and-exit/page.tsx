import Link from "next/link";

export default function AndroidBackAndExitPage(){
    return (
        <>
            <div>여기는 메인페이지입니다.</div> {/* 현재 페이지에서 뒤로가기? => 종료 */}
            <Link href="/section08/08-04-android-back-and-exit-moved">페이지 이동하기</Link>
        </>
    )
}