// prettier-ignore
export const HEADER_OPTIONS = (params) => ({
    GLOBAL: {
        "/section02/02-02-layout-header-global": { title: "게시글수정", hasLogo: true, hasBack: false },
        // 아래에 추가하기
        // ...
    },
    LOCAL: {
        [`/section02/02-03-layout-header-local/${params.id}`]: { title: "", hasLogo: false, hasBack: true }
        // 아래에 추가하기
        // ...
    }
})