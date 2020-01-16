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
https://www.npmjs.com/package/react-native-daum-postcode
위에 버전이 WebView 문제가 있어서 src/components/Postcode.js에 수정해서 사용중

# SMS 보내기
NCP사용
src/components/sendSMS.ts
src/screens/phone/index.tsx
위에 두개 참고바람

# Splsah & Icon
- https://dev-yakuza.github.io/ko/react-native/react-native-splash-screen/
- https://dev-yakuza.github.io/ko/react-native/react-native-make/
위에 두개를 참조할 것 만약 안된다면 MainActivaty.java의 onCreated 확인바람 (아래 스플레시 호출시 mainactivity 변경이 생김)
> // 스플레시
> react-native set-splash --platform android --path ./src/asset/TMSplash.png --resize cover --background "#000000"
> // 아이콘
> react-native set-icon --path ./src/asset/TMIcon.png