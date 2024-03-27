import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/home/Home.jsx';
import About from './component/about/About.jsx';
import Contact from './component/contact/Contact.jsx';
import Users from './component/users/Users.jsx';
import UserDetails from './component/userDetails/UserDetails.jsx';
import Posts from './component/posts/Posts.jsx';
import PostDetails from './component/postDetail/PostDetails.jsx';
import ErrorPage from './component/errorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/about",
        element : <About></About>,
      },

      {
        path: "/contact",
        element : <Contact></Contact>
      },

      {
        path : "/users",
        loader : () => fetch ('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },

      {
        path : "/users/:userID",
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element : <UserDetails></UserDetails>

      },
        {
          path : "/post",
          loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element : <Posts></Posts>
        },

        {
          path: "/post/:postId",
          loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          element : <PostDetails></PostDetails>


        }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
