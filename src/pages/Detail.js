import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h2`
  font-size: 12px;
  color: ${props => props.myColor}
`;

const Detail = ({ products }) => {
  
  let history = useHistory();
  let { id } = useParams();
  let product_id = products.find((product)=>{
    return product.id == id
  });

  return (
    <div className="containter">
      <div className="row">
        <div className="col-md-6">
          <img src={"." + product_id.url} alt={product_id.title} width="100%" />
        </div>
        <div className="product-detail col-md-6 mt-4">
          <strong className="pt-5 title">{product_id.title}</strong>
          <p className="content">{product_id.content}</p>
          <span className="price">{product_id.price} won</span>
          <button className="btn btn-danger">주문하기</button>
          <button 
            className="btn btn-danger"
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
    </div>
  )
}

export default Detail;