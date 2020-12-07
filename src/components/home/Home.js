import React, { Component } from 'react';
import mobilePhoneServices from "services/mobilePhoneServices";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { mobilePhones: [] }
  }

  componentDidMount() {
    mobilePhoneServices
      .getAll()
      .then(result => {
        this.setState({
          mobilePhones: result.data
        });
      });
  }

  render() {
    const { mobilePhones = [] } = this.state;

    const allMobile = mobilePhones.map(phone => {

      return (
        <ul key={phone.id} className="list-items">
          <li className="list-item">
            <div className="product-img">
              <img className="item-img" alt="Images of products" src />
            </div>
            <div className="product-model">{phone.product_model}</div>
            <div className="product-name">{phone.product_name}</div>
          </li>
        </ul>
      )
    })
    
    return (
      <div>
        <h1>Product Home</h1>
          {allMobile}
      </div>
    )
  }
}

export default Home;
