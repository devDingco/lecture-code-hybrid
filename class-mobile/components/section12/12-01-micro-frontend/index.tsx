import { useApis } from "@/apis/section12/12-01-micro-frontend";
import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { FlatList, Text, View } from "react-native";

// const 내컴퓨터접속주소_게시판 = "http://172.16.0.106:3000" // 내핸드폰에서 접속하기
const 내컴퓨터접속주소_게시판 = "http://10.0.2.2:3000" // 안드로이드에뮬레이터에서 접속하기
// const 내컴퓨터접속주소_게시판 = "http://127.0.0.1:3000" // IOS시뮬레이터에서 접속하기

// const 내컴퓨터접속주소_내설정 = "http://172.16.0.106:3500" // 내핸드폰에서 접속하기
const 내컴퓨터접속주소_내설정 = "http://10.0.2.2:3500" // 안드로이드에뮬레이터에서 접속하기
// const 내컴퓨터접속주소_내설정 = "http://127.0.0.1:3500" // IOS시뮬레이터에서 접속하기

export default function MicroFrontendPage() {
    const webviewRef = useRef<WebView>(null)
    const { onRequest, layout } = useApis(webviewRef)

    const [menu, setMenu] = useState("게시판")
    const onPressMenu = (눌린메뉴) => () => {
        setMenu(눌린메뉴)
    }

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white" }} // 안드로이드 + IOS 노치 배경색
            edges={layout.isNotchTranslucent ? [] : undefined} // 안드로이드 + IOS 노치 겹치기
        >
            <StatusBar 
                style="dark" // 안드로이드 + IOS 노치 글자색
            />

            {/* 12-01-micro-fontend => 메뉴1: [ 게시판 ] */}
            <WebView 
                ref={menu === "게시판" ? webviewRef : null}
                source={{ uri: `${내컴퓨터접속주소_게시판}/section12/12-01-micro-frontend` }} 
                onMessage={(event) => {
                    if(!event.nativeEvent.data) return

                    const request = JSON.parse(event.nativeEvent.data)
                    onRequest(request.query, request.variables)
                }}
                style={{ display: menu === "게시판" ? "flex" : "none" }} // 12-01-micro-frontend 추가
                // textZoom={100} 텍스트 크기 강제 고정 => 사용자 앱 내 브라우저 폰트크기 등 개별설정 막기
                // setBuiltInZoomControls={layout.isPinchZoom} // 핀치줌 허용 여부(단, 안드로이드에서만 작동하므로 => 브라우저 viewport로 변경하자!)
            />

            {/* 12-01-micro-fontend => 메뉴2: [ 내설정 ] */}
            <WebView 
                ref={menu === "내설정" ? webviewRef : null}
                source={{ uri: `${내컴퓨터접속주소_내설정}/section12/12-01-micro-frontend` }} 
                onMessage={(event) => {
                    if(!event.nativeEvent.data) return

                    const request = JSON.parse(event.nativeEvent.data)
                    onRequest(request.query, request.variables)
                }}
                style={{ display: menu === "내설정" ? "flex" : "none" }} // 12-01-micro-frontend 추가
                // textZoom={100} 텍스트 크기 강제 고정 => 사용자 앱 내 브라우저 폰트크기 등 개별설정 막기
                // setBuiltInZoomControls={layout.isPinchZoom} // 핀치줌 허용 여부(단, 안드로이드에서만 작동하므로 => 브라우저 viewport로 변경하자!)
            />

            {/* 12-01-micro-frontend => 바텀내비게이션 추가 */}
            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text onPress={onPressMenu("게시판")}>[ 게시판 ]</Text>
                <Text onPress={onPressMenu("내설정")}>[ 내설정 ]</Text>
            </View>
        </SafeAreaView>
    )
}