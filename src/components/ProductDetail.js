import React from 'react'
import PropTypes from 'prop-types'

function ProductDetail(props) {
  const {product} = props;

  return(
    <React.Fragment>
      <h1>{product.name}</h1>
      <h4>{product.quantity}</h4>
      <button onClick={onSellingPint}>Sell a Pint</button>
    </React.Fragment>
  )
}
 export default ProductDetail;