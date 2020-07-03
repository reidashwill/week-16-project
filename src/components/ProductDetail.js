import React from 'react'
import PropTypes from 'prop-types'

function ProductDetail(props) {
  const {product} = props;
  if (product.quantity <= 0){
    return(
      <React.Fragment>
        <h1>{product.name}</h1>
        <h4>{product.quantity}</h4>
        <h1>SOLD OUT</h1>
      </React.Fragment>
    )
  }else{
    return(
      <React.Fragment>
        <h1>{product.name}</h1>
        <h4>{product.quantity}</h4>
        <button onClick = {() => props.onSellingPint(product)}>Sell a Pint</button>
      </React.Fragment>
    )
  }
}
 export default ProductDetail;