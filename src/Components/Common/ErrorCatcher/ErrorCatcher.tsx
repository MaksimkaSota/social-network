import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { Component } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';
import type { ErrorType } from '../../../utils/types/common';

type PropsType = {
  children: ReactNode;
  globalError: ErrorType | null;
  setGlobalError: Dispatch<SetStateAction<ErrorType | null>>;
};
type StateType = {
  errorMessage: string;
};

export class ErrorCatcher extends Component<PropsType, StateType> {
  state = { errorMessage: '' };

  static getDerivedStateFromError() {
    return { errorMessage: 'Some UI Error! We are sorry... Fix it soon!' };
  }

  componentDidMount(): void {
    window.addEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener('unhandledrejection', this.catchUnhandledPromiseErrors);
  }

  catchUnhandledPromiseErrors = (event: PromiseRejectionEvent): void => {
    const error = {
      code: event.reason.response.status,
      message: 'Unhandled Promise Error! We are sorry... Fix it soon!',
    };
    this.props.setGlobalError(error);
  };

  render(): ReactElement {
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
