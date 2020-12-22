import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Detail from './pages/Detail';
import Product from './components/Product';
import productData from './data';


import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [products, setProducts] = useState(productData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><Link to="/">Inchant Field</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/detail/0">Link</Link></Nav.Link>
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
            <button 
              className="btn btn-primary"
              onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then(()=>{
                  console.log('성공했어요')
                })
                .catch(()=>{
                  console.log('실패했어요')
                })
              }}
            > 
              더보기
            </button>
          </div>
        </Route>
        
        <Route path="/detail/:id">
          <Detail products={products} />
        </Route>

        {/* <Route path="/:id">
          <div>아무거나 적었을 때 보여주세요</div>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;