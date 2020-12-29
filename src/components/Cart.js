import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

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
    </>
  )
}

function reduxProps(state){
  return{
    // productName: state.name
    state: state
  }
}

export default connect(reduxProps)(Cart);