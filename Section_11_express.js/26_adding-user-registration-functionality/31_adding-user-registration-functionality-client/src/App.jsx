import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DirectoryView from "./DirectoryView";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DirectoryView />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/directory/:dirId",
    element: <DirectoryView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
