import React from 'react';

import PageLayout from './layouts/page-layout';

import errorIcon from '@/assets/error.svg';
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <PageLayout>
          <div className='flex items-center justify-center flex-col p-10'>
            <h2>Oppss. Something went wrong.</h2>
            <p>{this.state.error && this.state.error.toString()}</p>
            <img src={errorIcon} alt='error' className='w-64 h-auto' />
          </div>
        </PageLayout>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
