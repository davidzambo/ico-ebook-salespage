import React, { Component } from 'react';

export default class OrderNow extends Component {
  render() {
    return (
      <div className="col-xs-12">
        <button type="button" className="btn btn-lg btn-danger px-5 mt-4 btn-order">Preorder now <strong> just for $46.99</strong> special price</button>
        <p className="text-muted"><small>eBook includes PDF, ePub and Kindle versions</small></p>
      </div>
    );
  }
}
