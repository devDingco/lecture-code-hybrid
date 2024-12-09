// // onClickLogin 변경(참고: main캠프 => section26/26-02-login-refreshtoken-refresh)

// // 1. 웹뷰에 저장
// setAccessToken(accessToken)
// setRefreshToken(refreshToken) // zustand에 refreshToken 추가하기

// // 2. 모바일 디바이스에 한 번 더 저장하기
// await fetchApp({
//     query: "updateDeviceAuthForAccessTokenSet",
//     variables: { accessToken }
// })
// await fetchApp({
//     query: "updateDeviceAuthForRefreshTokenSet",
//     variables: { refreshToken }
// })