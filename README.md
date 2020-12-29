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
* npm install axios
* npm install react-transition-group
* npm install react-redux
* npm install redux

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

## CSSTransition
1. `npm install react-transition-group`
2. `import { CSSTransition } from 'react-transition-group';`
3. `import './Detail.scss';`
4. 
``` 
<CSSTransition in={true} classNames="tab-animation" timeout={500}>
  <TapComponent tab={tab} />
</CSSTransition> 
```
  * in, classNames, timeout 속성
    * in: boolean / true 속성일 때 실행
    * classNames=""
    * timeout: 애니메이션 실행 기간
5. classNames에 설정한 classNames에 `-enter` `-enter-active` 를 css 추가
`.tab-enter` , `.tab-enter-active`
6. `useState()` 를 사용해서 true false 모두 관리

      

## useEffect 
* 컴포넌트가 mount 되었을 때
* 컴포넌트가 update 되었을 때
* 특정 코드를 실행
* return은 **사라질 때** 사용 ex_해당 페이지에다 다른 페이지로 넘어가는 경우
```
useEffect(()=>{
  console.log(111)
})

useEffect(()=>{
  let timer = setTimeout(()=>{}, 2000); // 2초 후에 사라지도록
  return function 끝나고_실행되는_함수_unmount(){코드} 
  //detail 페이지에 사용하는 경우 다른 페이지로 넘어가거나 사라질 때 실행 됨
})
```
*  **여러번** 사용해도 상관 없음 (가장 위 useEffect 부터 차례대로 수행)
* 관련없는 컴포넌트가 업데이트 될 때마다 useEffect도 같이 업데이트 됨(자원 낭비) -> 대괄호를 사용하여 **조건 추가** [alert] alert 에만 실행
```
  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(false)}, 2000);
    console.log('컴포넌트가 렌더링 될때 useEffect 실행됩니다')
  }, [ alert ]);
```
* 대괄호가 비었을 때 : 변경될때만 업데이트 실행
  * 딱 한번만 실행됨 ( 로드가 될 때 )
  * 조건에 맞는 함수가 비어있기 때문

## Ajax
* 서버에 새로고침 없이 요청 도와줌
* GET 요청: 특정 페이지 / 자료 읽기
* POST 요청: 로그인 (id, 비번) / 정보를 숨겨서 **전달**
* 따움표 -> json 자료형을 가지고 오는것 `"title" : "Flowey",`
* object 자료형은 주고받을 수 없음 (axios는 자동으로 object화/ fetch는 object화 코드 필요)
* Ajax 사용 방법
  1. jQuery ajax
  2. axios 설치
  3. javascript fetch()
* `npm install axios`
* `.then(()=>{})` 성공했을 때
  * `.then((result)=>{console.log(result)})` 요청 결과의 모든 값을 보여줌
  * `.then((result)=>{console.log(result.data)})`
* `.catch(()=>{})` 실패했을 때
* fetch 문법을 사용할 때도 동일 `fetch('https://apiurl.json').then()`
  * axios는 자동으로 object로 바꿔주지만 **fetch** 는 자료를 object 로 변환하는 코드를 넣어주어야 함 -> **코드가 길어짐**
* `...shoes` 대괄호를 벗김 -> `[...shoes]` 다시 대괄호로 감싸줌 ( 완전한 카피본 )
* `[...shoes, ...result.data]` 대괄호를 벗기고 다시 감싸줌 
* 결과물 -> `[{}, {}, {}, {}, {}, {}]`
* `setProducts([...products, ...result.data]);`
* 두번째, 세번째 데이터가 필요할때는 count 변수를 만들어서 중간중간 + 1 이 되는 변수을 넣어줌
* useEffect 에 사용

## 로딩중
* 위치: onClick 함수 안 axios 수행하기 전 

## 데이터를 전달하는 방법
1. props
2. contextAPI
  ## context API (props 기능)
    * `props` 없이 자유롭게 값 공유 가능
    * 컴포넌트 depth 가 깊을 경우 contextAPI 가 편할 수 있음
    1. `React.creacteContext()` 범위 생성
      *  `let numContext = React.createContext();`
    2. 같은 값을 공유할 html의 범위를 감쌈
      *  `<numContext.Provider value={num}></numContext.Provider>`
    3. 사용 컴포넌트에서 `useContext()` 사용
      *  `import React, { useContext } from 'react';`
      *  `let num = useContext( numContext )`
    4. 다른 컴포넌트에 있을 경우 부모 컴포넌트에서 export
      * `export let numContext = React.createContext()`
      * `import {numContext} from './App'`
3. 리덕스
  ## Redux
    * `npm install redux react-redux` redux, react-redux 두개 설치
    * `index.js`
    * `import { Provider } from 'react-redux';`
    * `<Provider></Provider>` 감싸기
    * `import { createStore } from 'redux';` , `let store = createStore();`
    * `<Provider store={store}>`
    * 필요한 component 에 가서 `import { connect } from 'react-redux';`
    * `function reduxProps(){}`
    * `export default connect(reduxProps)(Cart);`
```
let store = createStore(()=>{
  return [{id: 0, name: '멋진신발', quantity: 2}]
});

function reduxProps(state){
  return{
    // productName: state.name
    state: state
  }
}

const Cart = ({ state }) => {
``` 
  ## Reducer
  * 수정은 reducer를 통해서
  ```
  let store = createStore(reducer);

  function reducer (){
    return [
      {id: 0, name: '멋진신발', quantity: 2},
      {id: 1, name: '인챈트필드 신발', quantity: 5}
    ]
  }
  ..........................................................

  let defaultState = [
    {id: 0, name: '멋진신발', quantity: 2},
    {id: 1, name: '인챈트필드 신발', quantity: 5}
  ]

  function reducer (state = defaultState, action){
    if (action.type === 'increase'){
      let copy = [...state]; // deep copy
      copy[0].quantity++;

      return copy
    } else if (action.type === 'decrease') {
      let copy = [...state];
      copy[0].quantity--;

      return copy
    } else {
      return state 
    }
    // return state
  }

  let store = createStore(reducer);

  ...............................
  <button 
    onClick={()=>{
      props.dispatch({type: 'increase'})
    }}
  >
    +
  </button>
  ```
