import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Sesión</div>
    <div className={props.step2 ? 'active' : ''} >Compra</div>
    <div className={props.step3 ? 'active' : ''} >Metodo de pago</div>
    <div className={props.step4 ? 'active' : ''} >Orden de pago</div>
  </div>
}

export default CheckoutSteps;