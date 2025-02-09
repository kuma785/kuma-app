import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/routes";
import { MessageProvider } from "./contexts/MessageContext";

function App() {
  return (
    <MessageProvider>
      <RouterProvider router={router} />
    </MessageProvider>
);
}

export default App;
