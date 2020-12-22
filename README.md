# Shopping Mall with React

```
* bootstrap 사용
```

## Download List
* npx create-react-app react-shop
* npm install react-bootstrap bootstrap [부트스트랩](https://react-bootstrap.github.io/getting-started/introduction)
* npm install --save react-bootstrap
  1. 설치
  2. css link 를 public/index.html 삽입
* npm install url-loader --save-dev
* npm run eject (to show webpack.config.js)
* yarn add react-router-dom
* yarn add styled-components
* yarn add node-sass

## Use Bootstrap
* div.row = 12 column
* col-md-4 가운데 'md' 추가시 모바일 수직정렬

## Router setting
1. react-router-dom 설치
2. index.js 에서 react-router-dom 의 BrowserRouter or HashRouter 선언
3. Route 선언 `<Route path="/" component={} >` (주소 입력시 이동)
4. Link 사용 `<Link to="/">Home</Link>` (클릭했을 때 이동)
### BrowserRouter 과 HashRouter 차이
* HashRouter 에는 # 기호, 서버로 전달이 안됨
* BrowserRouter 서버로 전달됨, 서버 setting이 필요

### useHistory
* `import { useHistory } from 'react-router-dom';`
* `onClick={()=>{history.goBack()}}` 뒤로
* `onClick={()=>{history.push('/')}}` 특정 경로 customizing

### switch 
* 중복을 허용하지 않음
* Router 들을 감싸서 사용

### url 파라미터 문법
* `<Route path="/detail/:id"></Route>`
* `/:id` 는 작명
* id가 어떻든 detail 페이지로 이동

### useParams
1. `Route path="/detail/:id"` id는 작명
2. uesParams 선언(destructuring 문법)
3. `  let product_id = products.find((product)=>{
    return product.id == id
  });`

## 중요한 data는 최상위 컴포넌트에

## styled component
1. `yarn add styled-components`
2. 
```
let Title = styled.h2`
  font-size: 12px;
  color: ${props => props.myColor}
`;

<Box>
  <Title myColor={'red'}>styled component test</Title>
</Box>

```

## sass 사용
1. `yarn add node-sass`
2. `npm install node-sass@4.14.`
3. `npm install schema-utils`
4. `my-alert2 { @extend my-alert1 }`
5. `@mixin 함수(){} .my-alert{ @include 함수() }`
