import React from "react";
import PropTypes from 'prop-types'

function ProductList(props) {
  return(
    <React.Fragment>
      {props.productList.map((product) =>
      <Product 
        name={product.name}
        brand={product.brand}
        price={product.price}
        alcoholContent={product.alcoholContent}
        quantity={product.quantity}/>
      )}
    </React.Fragment>
  )
}