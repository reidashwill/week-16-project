import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'


class ProductControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
    
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm />
      buttonText = "Return to Products"
    }else{
      currentlyVisibleState = <ProductList productList={this.state.masterProductList}/>
      buttonText = "Add Product"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }

}
export default ProductControl