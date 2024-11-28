import Link from "next/link";

export default function LayoutHeaderTransparentPage(){
    return (
        <div>
            <img src="/images/02-04-dog.jpg" width={300} />
            <Link href="/section02/02-04-layout-header-untransparent">투명하지않은헤더 페이지로 이동하기</Link>
        </div>
    )
}