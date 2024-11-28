// prettier-ignore
export const HEADER_OPTIONS = (params) => ({
    GLOBAL: {
        "/section02/02-02-layout-header-global": { title: "게시글수정", hasLogo: true, hasBack: false },
        "/section02/02-04-layout-header-transparent": { title: "사진상세", hasLogo: false, hasBack: true, isTransparent: true },
        "/section02/02-04-layout-header-untransparent": { title: "게시글등록", hasLogo: false, hasBack: true, isTransparent: false }
        // 아래에 추가하기
        // ...
    },
    LOCAL: {
        [`/section02/02-03-layout-header-local/${params.id}`]: { title: "", hasLogo: false, hasBack: true }
        // 아래에 추가하기
        // ...
    }
})