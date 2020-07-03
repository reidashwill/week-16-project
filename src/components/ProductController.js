import React from 'react'
import ProductList from './ProductList'


class ProductControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      productList: []
    }
  }

  render(){
    let currentyVisibleState = null;
    let buttonText = null
    if(this.state.formVisibleOnPage = false){
      currentyVisibleState = <ProductList />
      buttonText = "add product"
    }
    return(
      <React.Fragment>
        {currentyVisibleState}
        <button>{buttonText}</button>
      </React.Fragment>
    )
  }

}
export default ProductControl