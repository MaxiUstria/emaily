import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component{
    render(){
        return (
          <StripeCheckout 
            name="Emaily"
            description="Adquirir 5 créditos"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
          >
              <button className='btn'>Agregar créditos</button>
          </StripeCheckout>
        );
    }

};

export default connect(null, actions) (Payments);

