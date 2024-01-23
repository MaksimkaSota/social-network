import { Component } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';

export class ErrorCatcher extends Component {
  state = { errorMessage: '' };

  static getDerivedStateFromError() {
    return { errorMessage: 'Some UI Error! We are sorry... Fix it soon!' };
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  }

  catchUnhandledPromiseErrors = (event) => {
    const error = {
      code: event.reason.response.status,
      message: 'Unhandled Promise Error! We are sorry... Fix it soon!',
    };
    this.props.setGlobalError(error);
  };

  render() {
    const { errorMessage } = this.state;
    const { children, globalError, setGlobalError } = this.props;
    if (errorMessage) {
      return <Error message={errorMessage} isGlobalError />;
    }
    return (
      <>
        {children}
        {globalError && <ErrorPopup errorObject={globalError} resetError={setGlobalError} />}
      </>
    );
  }
}
