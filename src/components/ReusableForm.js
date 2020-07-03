import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) { 
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Product Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content' />
          <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
        
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;