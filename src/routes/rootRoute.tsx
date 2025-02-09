import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/common/Header";

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Header />
      <Outlet />
    </div>
  ),
});
