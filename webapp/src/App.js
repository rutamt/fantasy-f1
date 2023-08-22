import {
  // createBrowserRouter,
  // RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Index from "./components/Index";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PageWrapper from "./components/PageWrapper";
import NewHome from "./components/NewHome";

// const router = createBrowserRouter([
//   { path: "/", element: <RootPage /> },
//   { path: "/signup", element: <SignUpPage /> },
//   { path: "/home", element: <HomePage /> },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PageWrapper page={<Index />} />} /> */}
        <Route path="/" element={<PageWrapper page={<NewHome />} />} />
        <Route path="/signup" element={<PageWrapper page={<SignUp />} />} />
        <Route path="/home" element={<PageWrapper page={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
