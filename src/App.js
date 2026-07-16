import { lazy, Suspense } from 'react';
import './App.css';
import Body from './Body';
import ErrorBoundary from './ErrorBoundary';
import Shimmer from './Shimmer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './MainContainer';

// Route-level code splitting: Watch and SearchResults load on demand
const WatchComponent = lazy(() => import('./Watch'));
const SearchResults = lazy(() => import('./SearchResults'));
const NotFound = lazy(() => import('./NotFound'));

const withSuspense = (element) => (
  <Suspense fallback={<Shimmer />}>{element}</Suspense>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    errorElement: withSuspense(<NotFound />),
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: withSuspense(<WatchComponent />),
      },
      {
        path: '/results',
        element: withSuspense(<SearchResults />),
      },
      {
        path: '*',
        element: withSuspense(<NotFound />),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <ErrorBoundary>
        <RouterProvider router={appRouter} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
