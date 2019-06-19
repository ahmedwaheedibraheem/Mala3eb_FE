import React, { Component } from 'react';
import { Rate } from 'element-react';
import 'element-theme-default';

class RateView extends Component {
  state = {}
  render() {
    return (
      <Rate value={4} />
    );
  }
}
export default RateView;