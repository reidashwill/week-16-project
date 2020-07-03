import React from "react";
import PropTypes from 'prop-types';
import Product from  './Product';

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

// ProductList.PropTypes = {
//   productList: PropTypes.array
// }

export default ProductList