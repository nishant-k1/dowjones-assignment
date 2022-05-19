import * as React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home/index';
import Loader from 'views/components/Loader';

const View = React.lazy(() => import('views/pages/View'));
const Create = React.lazy(() => import('views/pages/Create'));
const ErrorPage = React.lazy(() => import('views/pages/Error'));

export const routesConfig = [
  {
    path: '/',
    element: <Navigate to="/posts" replace />,
  },
  {
    path: '/dowjones-assignment',
    element: <Navigate to="/posts" replace />,
  },
  {
    path: 'posts',
    element: (
      <React.Suspense fallback={<Loader />}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: 'posts/:postId',
    element: (
      <React.Suspense fallback={<Loader />}>
        <View />
      </React.Suspense>
    ),
  },
  {
    path: 'create',
    element: (
      <React.Suspense fallback={<Loader />}>
        <Create />
      </React.Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <React.Suspense fallback={<Loader />}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
];
