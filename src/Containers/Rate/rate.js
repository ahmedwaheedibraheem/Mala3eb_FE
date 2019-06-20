import React, { Component } from 'react';
import { Rate } from 'element-react';
import 'element-theme-default';

class RateView extends Component {
  state = {}
  render() {
    return (
      <Rate onChange={(value) => { this.setState({ value: value }) }}
         />
    );
  }
}
export default RateView;