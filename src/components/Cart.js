import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.scss';

const Cart = (props) => {
  return(
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((productInfo, i)=>{
            return(
              <tr>
              <td>1</td>
              <td>{ productInfo.name }</td>
              <td>{ productInfo.quantity }</td>
              <td>
                <button 
                  onClick={()=>{
                    props.dispatch({type: 'increase'})
                  }}
                >
                  +
                </button>
                <button
                  onClick={()=>{
                    props.dispatch({type: 'decrease'})
                  }}
                >
                  -
                </button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </Table>

      {
        props.alertState === true ?
        ( <div className="alert">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={()=>{
              props.dispatch({type: 'close'})
            }}
          >
            닫기
          </button>
        </div> ) : null
      }
    </>
  )
}

function reduxProps(state){
  return{
    // productName: state.name
    state: state.reducer,
    alertState: state.reducer2
  }
}

export default connect(reduxProps)(Cart);