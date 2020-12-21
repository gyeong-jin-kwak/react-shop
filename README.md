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

## Use Bootstrap
* div.row = 12 column
* col-md-4 가운데 'md' 추가시 모바일 수직정렬

## Router setting
1. react-router-dom 설치
2. index.js 에서 react-router-dom 의 BrowserRouter or HashRouter 선언
3. 
### BrowserRouter 과 HashRouter 차이
* HashRouter 에는 # 기호, 서버로 전달이 안됨
* BrowserRouter 서버로 전달됨, 서버 setting이 필요
* Route 선언 <Route path="/" component={} >

