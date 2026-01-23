import { RootRoute, Route, Router } from "@tanstack/react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "../pages/Signup";
import LoginPage from "../pages/Login/LoginPage";

const rootRoute = new RootRoute();

const defaultLayoutRoute = new Route({
    getParentRoute: () => rootRoute,
    id: "with-navbar",
    component: DefaultLayout
})

const homeRoute = new Route({
    getParentRoute: () => defaultLayoutRoute,
    path: "/",
    component: Home
})

const dashboardRoute = new Route({
    getParentRoute: () => defaultLayoutRoute,
    path: "/dashboard",
    component: Dashboard
})


const authLayoutRoute = new Route({
    getParentRoute: () => rootRoute,
    id: "auth",
    component: AuthLayout
})

const loginRoute = new Route({
    getParentRoute: () => authLayoutRoute,
    path: "/login",
    component: LoginPage,
});

const signupRoute = new Route({
    getParentRoute: () => authLayoutRoute,
    path: "/signup",
    component: Signup,
});


const routeTree = rootRoute.addChildren([
    defaultLayoutRoute.addChildren([homeRoute, dashboardRoute]),
    authLayoutRoute.addChildren([loginRoute, signupRoute]),
])

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}