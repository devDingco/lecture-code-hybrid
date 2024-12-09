// // main캠프 => commons/libraries/26-01-get-access-token.ts

// // 1. 쿠키가 제거되었으므로, credentials: "include" 변경
// export const getAccessToken = ({ refreshToken }) => {
//     try {
//         const graphQLClient = new GraphQLClient(
//             "주소",
//             { headers: { Authorization: `Bearer ${refreshToken}` }}
//         )
//         // 하위 동일

//     } catch {
//         // 동일
//     }
// }