import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { store } from './store/index.ts';
import RouteTree from './routes/route-tree.tsx';
import ErrorBoundary from './components/error-boundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ReduxProvider store={store}>
          <RouteTree />
        </ReduxProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
