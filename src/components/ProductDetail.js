import React from 'react'
import PropTypes from 'prop-types'

function ProductDetail(props) {
  const {product} = props;

  return(
    <React.Fragment>
      <h1>{product.name}</h1>
    </React.Fragment>
  )
}
 export default ProductDetail;