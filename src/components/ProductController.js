import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'


class ProductControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null
    }
  }

  handleClick = () => {
    if(this.state.selectedProduct){
      this.setState({
      formVisibleOnPage: false,
      selectedProduct: null
      });
    }else{
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
    
  }
  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct})
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList, formVisibleOnPage: false})
  }
  // handleDecrementingQuantity = (productToEdit) => {
  //   console.log("hitting decremeting function")
  //   console.log(productToEdit)
  //   const decrementedProduct = {name: productToEdit.name, brand: productToEdit.brand, price: productToEdit.price, quantity: productToEdit.quantity-1}
  //   console.log(decrementedProduct)
  //   const editedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(decrementedProduct);
  //   this.setState({
  //     masterProductList: editedMasterProductList,
  //     selectedProduct: null
  //   });
  // }
  handleDecrementingQuantity = (productToEdit) => {
    console.log("hitting decremeting function")
    console.log(productToEdit)
    const decrementedProduct = {name: productToEdit.name, brand: productToEdit.brand, price: productToEdit.price, quantity: productToEdit.quantity-1}
    console.log(decrementedProduct)
    const editedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(decrementedProduct);
    this.setState({
      masterProductList: editedMasterProductList,
      selectedProduct: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null
    if(this.state.selectedProduct){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onSellingPint={this.handleDecrementingQuantity}/>
      buttonText = "Return to Products"
    }else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}/>
      buttonText = "Return to Products"
    }else{
      currentlyVisibleState = <ProductList productList={this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct}/>
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