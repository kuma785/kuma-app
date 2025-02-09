import { createRoute, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { Home } from "../pages/Home";
import { Message } from "../pages/Message";
import { Another } from "../pages/Another";

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

export const anotherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "another",
  component: Another,
});

export const routeTree = rootRoute.addChildren([homeRoute, messageRoute, anotherRoute]);

export const router = createRouter({ routeTree, basepath: "/kuma-app" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
