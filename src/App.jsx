import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { ProtectedRoutes } from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const user = null;
  const userData = {
    displayName: "asadbek",
    email: "qw@gmail.com",
    password: "password123",
    photoURL: "https://picsum.photos/200/300",
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
