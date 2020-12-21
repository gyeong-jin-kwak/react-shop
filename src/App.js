import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Product from './components/Product';
import productData from './data';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [products, setProducts] = useState(productData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Inchant Field</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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

      <Route path="/" exact>
        <Jumbotron className="main-copy">
          <h1>Welcome, Inchant Field!</h1>
          <p>
            여행,액티비티,일상생활에도 Inchant Field 와 함께라면 어디든 갈 수 있어!
            착하고 정직하게 만든, 매일 입고 싶은 옷
          </p>
          <p>
            <Button variant="primary">더보기</Button>
          </p>
        </Jumbotron>

        <div className="container">
          <div className="row">
            {
              products.map((product)=>{
                return(
                  <Product 
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
        </div>
      </Route>
      <Route path="/detail">
        <div className="containter">
            <div className="row">
              <div className="col-md-6">
                <img src="./images/cap_black.gif" alt="검은색 모자" width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <strong className="pt-5">상품명</strong>
                <p>상품설명</p>
                <span>12000</span>
                <button className="btn btn-danger">주문하기</button>
              </div>
            </div>
        </div>
      </Route>

    </div>
  );
}

export default App;