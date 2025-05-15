import { createBrowserRouter } from "react-router"
import { HomePage } from "../pages/home"
import { SubscriptionDetailsPage } from "../pages/subscription-details"
import { PrivateRoutes } from "./private-routes"
import { LoginPage } from "../pages/login"
import { SignUpPage } from "../pages/sign-up"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    )
  },
  {
    path: "/subscriptions/:id",
    element: (
      <PrivateRoutes>
        <SubscriptionDetailsPage />
      </PrivateRoutes>
    )
  },
  {
    path: "/auth/login",
    element: (
      <LoginPage />
    )
  },
  {
    path: "/auth/register",
    element: (
      <SignUpPage />
    )
  }
])