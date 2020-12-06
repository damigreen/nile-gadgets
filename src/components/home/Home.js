import React, { Component } from 'react';
import mobilePhoneServices from "services/mobilePhoneServices";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { mobilePhones: [] }
  }

  componentDidMount() {
    mobilePhoneServices
      .getAll()
      .then(result => {
        console.log(result.data);
        this.setState({
          mobilePhones: result.data
        });
      });
  }

  render() {
    const { mobilePhones = [] } = this.state;

    const allMobile = mobilePhones.map(phone => {

      return (
        <div>
          <p key={phone.id}>{phone.product_model}</p>
          <p key={phone.id}>{phone.product_name}</p>
        </div>
      )
    })
    
    return (
      <div>
        <h1>Product Home</h1>
        <div>
          {allMobile}
        </div>
      </div>
    )
  }
}

export default Home;
