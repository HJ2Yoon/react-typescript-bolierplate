# π Start with Create React, TypeScript Boilerplate

λ¦¬μ‘νΈ μ±μ μ΄μ©ν νλ‘μ νΈμ μ΄λ° μΈνμ λμμ£Όλ μ€λΉλ¬Ό

## π¦ Using
|λΌμ΄λΈλ¬λ¦¬|version|
|---|---|
|react|**^18.2.0**|
|react-dom|**^18.2.0**|
|react-router|**^6.8.2**|
|react-scripts|**5.0.1**|
|styled-components|**^5.3.8**|

## π Configuration

### π .prettierrc

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

|μ€μ |λ΄μ©|
|---|---|
|singleQuote|single μΏΌνμ΄μ μ΄μ© μ¬λΆ|
|semi|μΈλ―Έν΄λ‘  μ΄μ©|
|useTabs|ν­ μ¬μ© μ¬λΆ|
|tabWidth|ν­ λλΉ|
|trailingComma|μ¬λ¬ μ€ μ¬μ©μ, νν μ½€λ§ μ¬μ© λ°©μ|
|printWidth|μ€ λ°κΏ ν  ν­ κΈΈμ΄|
|arrowParens|νμ΄ν ν¨μ κ΄νΈ νκΈ° λ°©μ|
|orderedImports|import μ λ ¬ μ¬λΆ|

### π .tsconfig.json

ν΄λΉ νμΌμ **Typescript** [μ»΄νμΌλ¬ μ΅μ](https://typescript-kr.github.io/pages/compiler-options.html)μ΄ μ μλμ΄μλ νμΌμλλ€.

λ³Έ **Boilerplate**μμλ λ€μ μ»€λ§¨λλ₯Ό ν΅ν΄ μμ±ν ```.tsconfig.json```μμ μμ ν μ€μ νμΌμ μ¬μ©ν©λλ€
```
  npx tsc --init
```

μλμ μ μλ μ΅μ μμΈμ€λͺμ λ³΄λ €λ©΄ λ§ν¬λμ΄μλ λ¬Έμλ₯Ό μ°Έμ‘°

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

## π Installation

```
 git clone https://github.com/HJ2Yoon/react-typescript-bolierplate.git ./
```

# License

MIT
