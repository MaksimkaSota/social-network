import { Component } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';

export class ErrorCatcher extends Component {
  state = {errorMessage: ''};

  catchUnhandledPromiseErrors = (event) => {
    const error = {
      code: event.reason.response.status,
      message: 'Unhandled Promise Error! We are sorry... Fix it soon!'
    };
    this.props.setGlobalError(error);
  };

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  };

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  };

  static getDerivedStateFromError() {
    return {errorMessage: 'Some UI Error! We are sorry... Fix it soon!'};
  };

  render() {
    if (this.state.errorMessage) {
      return (
        <Error message={this.state.errorMessage} isGlobalError={true} />
      );
    }
    return (
      <>
        {this.props.children}
        {
          this.props.globalError &&
          <ErrorPopup errorObject={this.props.globalError} resetError={this.props.setGlobalError} />
        }
      </>
    );
  };
}
