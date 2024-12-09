// main캠프 => commons/settings/26-02-apollo-header-and-error-setting-refresh


// 1. useEffect 부분삭제(웹에서의 새로고침을 위한 내용이기 때문)

// 2. refreshToken으로 accessToken 재발급 받으면, 웹에서도 저장하고, 디바이스에도 저장하기
// getAccessToken().then((newAccessToken) => {
        // setAccessToken(newAccessToken ?? "")
        // await fetchApp({
        //     query: "updateDeviceAuthForAccessTokenSet",
        //     variables: { accessToken: newAccessToken }
        // })
// })