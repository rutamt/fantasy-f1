import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootPage from "./pages/RootPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  { path: "/", element: <RootPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/home", element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />
}


export default App;
