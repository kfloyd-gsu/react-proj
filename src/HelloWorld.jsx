import React, {Component} from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div>Hello, {this.props.name}!</div>
    );
  }
}

export default HelloWorld;