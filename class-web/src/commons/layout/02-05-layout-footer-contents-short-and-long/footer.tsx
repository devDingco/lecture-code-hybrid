export function Footer({ children }) {
    return (
        <>
            {/* 1. 숏컨텐츠라면? 부모 사이즈에 맞게 최대로 늘려줘! */}
            {/* 2. 롱컨텐츠라면? 부모사이즈를 넘어섰으므로 무시해줘! */}
            <div style={{ flex: 1 }} />

            <footer 
                style={{
                    height: "3.125rem", // 50px
                    width: "100vw",
                    backgroundColor: "skyblue"
                }}
            >
                {children}
            </footer>
        </>
    )
}