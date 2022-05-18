import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home/index';
import ViewPost from 'views/pages/ViewPost';
import CreatePost from 'views/pages/CreatePost';
import UpdatePost from 'views/pages/UpdatePost';
import ErrorPage from 'views/pages/Error';

export const useRoutesConfig = () => {
  let routeList = [
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '*',
          element: <ErrorPage />,
        },
        {
          path: '/view/:postId',
          element: <ViewPost />,
        },
        {
          path: '/view/:postId/*',
          element: <ErrorPage />,
        },
        {
          path: '/edit/:postId',
          element: <UpdatePost />,
        },
        {
          path: '/edit/:postId/*',
          element: <ErrorPage />,
        },
      ],
    },
    { path: '/create', element: <CreatePost /> },
  ];
  let element = useRoutes([...routeList]);
  return element;
};
