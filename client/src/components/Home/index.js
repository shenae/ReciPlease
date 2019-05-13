import React, { Component } from 'react';
	
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo:null,
      bar:null
    };
  }

    onChange = e => {
    const {
     target: { value, name },
    } = e;
    this.setState({
     [name]: value
    });
  };


  render() {
    return (
        <div>
          <h1>I am home</h1>
          <input name="foo" onChange={this.onChange} />
          <input name="bar" onChange={this.onChange} />
        </div>
    );
  }
}

export default Home;