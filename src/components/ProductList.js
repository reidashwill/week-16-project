import React from "react";
import PropTypes from 'prop-types';
import Product from  './Product';

function ProductList(props) {
  return(
    <React.Fragment>
      {props.productList.map((product) =>
      <Product
        whenProductClicked = { props.onProductSelection}
        name={product.name}
        brand={product.brand}
        price={product.price}
        alcoholContent={product.alcoholContent}
        quantity={product.quantity}
        id={product.id}
        key={product.id}/>

      )}
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList