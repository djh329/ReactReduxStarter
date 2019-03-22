import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {
  sampleAction,
  updateText
} from '../actions'

class SampleComponent extends Component {

  constructor(props) {
    super(props)
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.text)
    this.props.sampleAction(this.props.text)
  }

  onChange(event) {
    this.props.updateText(event.target.value)
  }

  render() {
    console.log(this.props)
    return (
      <div className="" style={{justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>
          Hello World!{'\n'}
          <br/>
          Value is {this.props.field}
        </div>
        <div style={{textAlign: 'center'}}>
          <form onSubmit={this.onSubmit.bind(this)} style={{display: 'inline-block'}}>
            Enter Value:
            <input className="input" value={this.props.text} onChange={this.onChange.bind(this)}/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    field: state.sample.field,
    text: state.sample.text,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sampleAction,
    updateText
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
