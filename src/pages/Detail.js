import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';
import { CSSTransition } from 'react-transition-group';

let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h2`
  font-size: 12px;
  color: ${props => props.myColor}
`;


const Detail = ({ products }) => {

  let [ alert, setAlert ] = useState(true);
  let [ input, setInput ] = useState('');
  let [ tab, setTab ] = useState(0);
  let history = useHistory();
  let { id } = useParams();
  let product_id = products.find((product)=>{
    return product.id == id
  });
  let [ num, setNum ] = useState(product_id.num);
  let [ ani, setAni ] = useState(false);

  useEffect(()=>{
    // setTimeout은 변수에 넣어 사용
    let timer = setTimeout(()=>{setAlert(false)}, 2000);
    console.log('컴포넌트가 렌더링 될때 useEffect 실행됩니다')
    
    // 페이지 이동시 setTimeout 제거
    return () => { clearTimeout(timer) }

    // [] 는 조건, 비어있을 시 로드 될 때 딱 한번만 적용됨
  }, [ alert ]);

  return (
    <div className="container">
      {
        alert === true ? 
        (<div className="alert-box">
          <p className="alert-box__text">
            재고가 얼마 남지 않았습니다.
          </p>
        </div>) : null
      }
      {input}
      <input onChange={(e)=>{ setInput(e.target.value) }} placeholder="useEffect 확인용 input" />

      <div className="row">
        <div className="col-md-6">
          <img src={"." + product_id.url} alt={product_id.title} width="100%" />
        </div>
        <div className="product-detail col-md-6 mt-4">
          <strong className="pt-5 title">{product_id.title}</strong>
          <p className="content">{product_id.content}</p>
          <span className="price">{product_id.price} won</span>
          <Stock stock={num} />
          <button 
            className="btn btn-danger"
            onClick={()=>{ 
              var newObject = num;
              setNum(newObject - 1);
             }}
          >
              주문하기
            </button>
          <button 
            className="btn btn-danger back-btn"
            onClick={()=>{history.goBack()}}
            // onClick={()=>{history.push('/')}}
          >
            뒤로가기
          </button>
          <Box>
            <Title myColor={'red'}>styled component test</Title>
          </Box>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={()=>{
              setAni(false);
              setTab(0);
            }}
           >
            탭1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="link-1"
            onClick={()=>{
              setAni(false);
              setTab(1);
            }}
          >
            탭2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={()=>{
              setAni(false);
              setTab(2);
            }}
          >
            탭3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={ani} classNames="tab" timeout={500}>
        <TapComponent tab={tab} aniOn={setAni} />
      </CSSTransition>

    </div>
  )
}

const Stock = ({stock}) => {
  return(
    <>
      <div>재고:{stock}</div>
    </>
  )
}

const TapComponent = ({tab, aniOn}) => {
  useEffect(()=>{
    aniOn(true);
  });

  if(tab === 0){
    return <div>1번 내용입니다</div>
  } else if(tab === 1){
    return <div>2번 내용입니다</div>
  } else if(tab === 2){
    return <div>3번 내용입니다</div>
  }
}

export default Detail;