import React from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import capBlack from './images/cap_black.gif';
import capBeige from './images/cap_beige.gif';
import top from './images/top.gif';

function App() {
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
          <div className="col-md-4">
            <div className="item-wrp">
              <img src={capBlack} alt="검정 모자" className="product-pic" />
              <strong className="product-title">캡모자 black</strong>
              <em className="product-price">25,000 won</em>
              <p className="product-content">골프 캡모자</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item-wrp">
              <img src={capBeige} alt="베이지 모자" className="product-pic" />
              <strong className="product-title">캡모자 black</strong>
              <em className="product-price">25,000 won</em>
              <p className="product-content">골프 캡모자</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item-wrp">
              <img src={top} alt="상의" className="product-pic" />
              <strong className="product-title">캡모자 black</strong>
              <em className="product-price">38,000 won</em>
              <p className="product-content">outdoor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;