import * as React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home/index';
import Loader from 'views/components/Loader';

const ViewPost = React.lazy(() => import('views/pages/ViewPost'));
const CreatePost = React.lazy(() => import('views/pages/CreatePost'));
const UpdatePost = React.lazy(() => import('views/pages/UpdatePost'));
const ErrorPage = React.lazy(() => import('views/pages/Error'));

export const routesConfig = [
  {
    path: '/dowjones-assignment',
    element: <Navigate to="/" replace={true} />,
  },
  {
    path: '/',
    element: <Navigate to="/posts" replace={true} />,
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
    path: 'posts/view/:postId',
    element: (
      <React.Suspense fallback={<Loader />}>
        <ViewPost />
      </React.Suspense>
    ),
  },
  {
    path: 'create',
    element: (
      <React.Suspense fallback={<Loader />}>
        <CreatePost />
      </React.Suspense>
    ),
  },
  {
    path: 'posts/update/:postId',
    element: (
      <React.Suspense fallback={<Loader />}>
        <UpdatePost />
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
