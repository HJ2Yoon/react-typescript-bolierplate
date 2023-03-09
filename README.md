# 📝 Start with Create React, TypeScript Boilerplate

리액트 앱을 이용한 프로젝트의 초반 세팅을 도와주는 준비물

## 📦 Using
|라이브러리|version|
|---|---|
|react|**^18.2.0**|
|react-dom|**^18.2.0**|
|react-router|**^6.8.2**|
|react-scripts|**5.0.1**|
|styled-components|**^5.3.8**|

## 📚 Configuration

### 📕 .prettierrc

```json
{
  "singleQuote": true, 
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always",
  "orderedImports": true
}
```

|설정|내용|
|---|---|
|singleQuote|single 쿼테이션 이용 여부|
|semi|세미클론 이용|
|useTabs|탭 사용 여부|
|tabWidth|탭 너비|
|trailingComma|여러 줄 사용시, 후행 콤마 사용 방식|
|printWidth|줄 바꿈 할 폭 길이|
|arrowParens|화살표 함수 괄호 표기 방식|
|orderedImports|import 정렬 여부|

### 📙 .tsconfig.json

해당 파일은 **Typescript** [컴파일러 옵션](https://typescript-kr.github.io/pages/compiler-options.html)이 정의되어있는 파일입니다.

본 **Boilerplate**에서는 다음 커맨드를 통해 생성한 ```.tsconfig.json```에서 수정한 설정파일을 사용합니다
```
  npx tsc --init
```

아래에 정의된 옵션 상세설명을 보려면 링크되어있는 문서를 참조

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "noImplicitAny": false,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

## 🎁 Installation

```
 git clone https://github.com/HJ2Yoon/react-typescript-bolierplate.git ./
```

# License

MIT
