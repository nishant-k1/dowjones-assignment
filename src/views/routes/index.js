import * as React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Home from '../pages/Home/index';
import Loader from 'views/components/Loader';

const ViewPost = React.lazy(() => import('views/pages/ViewPost'));
const CreatePost = React.lazy(() => import('views/pages/CreatePost'));
const ErrorPage = React.lazy(() => import('views/pages/Error'));

export const useRoutesConfig = () => {
  const routes = [
    {
      path: '/',
      element: <Navigate to="posts" replace />,
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
      path: '*',
      element: (
        <React.Suspense fallback={<Loader />}>
          <ErrorPage />
        </React.Suspense>
      ),
    },
  ];
  const element = useRoutes([...routes]);
  return element;
};
