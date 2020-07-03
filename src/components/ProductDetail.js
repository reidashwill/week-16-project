import React from 'react'
import PropTypes from 'prop-types'

function ProductDetail(props) {
  const {product} = props;
  if (product.quantity <= 0){
    return(
      <React.Fragment>
        <h1>{product.name}</h1>
        <h4>This product is sold out!  Check back later!</h4>
      </React.Fragment>
    )
  }else{
    return(
      <React.Fragment>
        <h1>{product.name}</h1>
        <h4>Made by: {product.brand}</h4>
        <h4>ABV: %{product.alcoholContent}</h4>
        <h4>Price per pint: ${product.price}</h4>
        <h4>We have {product.quantity} pints available!</h4>
        <button onClick = {() => props.onSellingPint(product)}>Sell a Pint</button>
      </React.Fragment>
    )
  }
}
 export default ProductDetail;