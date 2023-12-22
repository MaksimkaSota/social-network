import { Component } from 'react';

export class ErrorCatcher extends Component {
  componentDidCatch(error, errorInfo) {
    this.props.setCrashMessage('Some UI Error! We are sorry... Fix it soon!');
  };

  render() {
    return this.props.children;
  };
}
