import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';
import Contact, {loader as contactLoader , action as contactAction,} from './routes/contact';
import EditContact, {action as editAction} from './routes/edit';
import "./index.css";
import Root, { loader as rootLoader, action as rootAction,} from "./routes/root";
import  {action as destroyAction} from './routes/destroy';
import Index from './routes';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";


const router = createBrowserRouter([
  {
    path : '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [{
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        /* the rest of the routes */
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          // errorElement: <div>Opps! There is an error!</div>,
        },
        {
          index: true,
          element: <Index />
        }
    
      ],
    },
  ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
