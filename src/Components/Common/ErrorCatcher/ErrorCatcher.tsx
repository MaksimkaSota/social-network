import { Component, type ReactElement, type ReactNode } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';
import { Language, TextKey } from '../../../utils/types/enums';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import { errorText } from '../../../utils/languageLocalization/errorText';

type PropsType = {
  children: ReactNode;
  languageMode: string;
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
        message: 'Some UI error! We are sorry... We will fix it soon!',
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
        message: 'Some Connection error! We are sorry... We will fix it soon!',
      },
    });
  };

  render(): ReactElement {
    const { UIError, promiseError } = this.state;
    const { children, languageMode } = this.props;
    if (UIError) {
      const UIErrorMessage = languageMode === Language.en ? UIError.message : errorText.ui.ru;
      return <Error message={UIErrorMessage} isGlobalError />;
    }
    return (
      <>
        {children}
        <ErrorPopup
          errorObject={promiseError}
          resetError={(error: Nullable<ErrorType>): void => {
            this.setState({ promiseError: error });
          }}
          languageMode={languageMode}
          errorTextKey={TextKey.promise}
        />
      </>
    );
  }
}
