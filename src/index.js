import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, useRouteError } from 'react-router-dom';
import App from './App';
import QuoteApp from './quote-app/QuoteApp';
import MarkdownApp from './markdown-app/MarkdownApp';


const router = createHashRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/quote-machine',
    element: <QuoteApp />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/markdown-editor',
    element: <MarkdownApp />,
    errorElement: <ErrorBoundary />
  }
]);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Error in console!</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
