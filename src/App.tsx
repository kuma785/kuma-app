import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
