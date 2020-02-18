# 썬더마트 - 프론트엔드

편의점 배달 애플리케이션


# 스택
### main
- react-native 0.61.5 (100% hook & functional component)
- typescript
- redux
- redux-persist
### sub
- reactNavigation
- code-push



# 주소검색
- https://www.npmjs.com/package/react-native-daum-postcode

위에 버전이 WebView 문제가 있어서 src/components/Postcode.js에 수정해서 사용중

# SMS 보내기
NCP사용
- src/components/sendSMS.ts
- src/screens/phone/index.tsx

위에 두개 참고바람

# Splsah & Icon
- https://dev-yakuza.github.io/ko/react-native/react-native-splash-screen/
- https://dev-yakuza.github.io/ko/react-native/react-native-make/

위에 두개를 참조할 것 만약 안된다면 MainActivaty.java의 onCreated 확인바람 (아래 스플레시 호출시 mainactivity 변경이 생김)
> // 스플레시
> - react-native set-splash --platform android --path ./src/asset/TMSplash.png --resize cover --background "#ffffff"
> // 아이콘
> - react-native set-icon --path ./src/asset/TMIcon.png

# 키스토어 참고 
- https://dev-yakuza.github.io/ko/react-native/android-running-on-device/
> keytool -genkey -v -keystore [key-name].keystore -alias [key alias] -keyalg RSA -keysize 2048 -validity 10000

# 키해시 참고
- https://github.com/facebook/react-native-fbsdk/issues/424#issuecomment-469047955 이거나 아래꺼 둘중에 하나만
- https://right-hot.tistory.com/entry/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%ED%82%A4%ED%95%B4%EC%8B%9C-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95-debug-keyhash-release-keyhash-googlePlay-keyhash