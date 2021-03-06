import React, { useState, lazy, Suspense } from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Detail from './pages/Detail';
// let Detail = lazy(()=>{ return import('./pages/Detail.js') });
import Product from './components/Product';
import Cart from './components/Cart';
import Loading from './components/Loading';
import productData from './data';


import { Link, Route, Switch } from 'react-router-dom';

// let numContext = React.createContext();

function App() {
  let [products, setProducts] = useState(productData);
  let [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><Link to="/">Inchant Field</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/detail/0">Link</Link></Nav.Link>
            <Nav.Link><Link to="/test">test</Link></Nav.Link>
            <Nav.Link><Link to="/cart">cart</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <Jumbotron className="main-copy">
            <h1>Welcome, Inchant Field!</h1>
            <p>
              여행,액티비티,일상생활에도 Inchant Field 와 함께라면 어디든 갈 수 있어!
              착하고 정직하게 만든, 매일 입고 싶은 옷
            </p>
            <div>
              <Button variant="primary">더보기</Button>
            </div>
          </Jumbotron>

          {/* <numContext.Provider value={num}> */}
            <div className="container">
              <div className="row">
                {
                  products.map((product, i)=>{
                    return(
                      <Product
                        index = {i}
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        content={product.content}
                        url={product.url}
                      />
                    )
                  })
                }
              </div>
            {/* </numContext.Provider> */}

            {/* 두번째, 세번째 데이터가 필요할때는 count 변수를 만들어서 중간중간 + 1 이 되는 변수을 넣어줌 */}
            <button 
              className="btn btn-primary"
              onClick={()=>{
                // POST 요청시 header, 쿠키 등 전달 가능
                // axios.post('서버url', {id: 'gyeong-jin', pw: 1234 });
                setLoading(true);

                axios.get('https://gyeong-jin-kwak.github.io/server/shop.json')
                .then((result)=>{
                  // 로딩중 안보이게 처리
                  setLoading(false);
                  console.log(result.data);
                  setProducts([...products, ...result.data]);
                })
                .catch(()=>{
                  // 로딩중 안보이게 처리
                  setLoading(false);
                  console.log('실패했어요')
                })
              }}
            > 
              더보기
            </button>

            { loading === true ? <Loading /> : null }

          </div>
        </Route>
        
        <Route path="/detail/:id">
          {/* <Suspense fallback={<div>로딩중이에요</div>}> */}
            <Detail products={products} />
          {/* </Suspense> */}
        </Route>

        {/* <Route path="/:id">
          <div>아무거나 적었을 때 보여주세요</div>
        </Route> */}
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/test">
          <Loading />
        </Route>
      </Switch>
    </div>
  );
}

export default App;