import { createRoute, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { Home } from "../pages/Home";
import { Message } from "../pages/Message";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const messageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "message",
  component: Message,
});

export const routeTree = rootRoute.addChildren([homeRoute, messageRoute]);

export const router = createRouter({ routeTree, basepath: "/kuma-app" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
