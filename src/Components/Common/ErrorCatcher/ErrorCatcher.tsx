import type { ReactElement, ReactNode } from 'react';
import { Component } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';
import type { ErrorType, Nullable } from '../../../utils/types/common';

type PropsType = {
  children: ReactNode;
};
type StateType = {
  UIError: Nullable<ErrorType>;
  promiseError: Nullable<ErrorType>;
};

export class ErrorCatcher extends Component<PropsType, StateType> {
  state: StateType = {
    UIError: null,
    promiseError: null,
  };

  static getDerivedStateFromError() {
    return {
      UIError: {
        message: 'Some UI Error! We are sorry... Fix it soon!',
      },
    };
  }

  componentDidMount(): void {
    window.addEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  }

  catchUnhandledPromiseErrors = (event: PromiseRejectionEvent): void => {
    this.setState({
      promiseError: {
        code: event.reason.response.status,
        message: 'Unhandled Promise Error! We are sorry... Fix it soon!',
      },
    });
  };

  render(): ReactElement {
    const { UIError, promiseError } = this.state;
    const { children } = this.props;
    if (UIError) {
      return <Error message={UIError.message} isGlobalError />;
    }
    return (
      <>
        {children}
        {promiseError && (
          <ErrorPopup
            errorObject={promiseError}
            resetError={(error: Nullable<ErrorType>): void => {
              this.setState({ promiseError: error });
            }}
          />
        )}
      </>
    );
  }
}
