import { createBrowserRouter } from "react-router"
import { HomePage } from "../pages/home"
import { SubscriptionDetailsPage } from "../pages/subscription-details"
import { PrivateRoutes } from "./private-routes"
import { LoginPage } from "../pages/login"
import { SignUpPage } from "../pages/sign-up"
import { CreateService } from "../components/create-service"

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
    path: "/subscription/create",
    element: (
      <PrivateRoutes>
        <CreateService />
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