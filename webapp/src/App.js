import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Rutam from "./components/Rutam";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Rutam /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router} />
}


export default App;
