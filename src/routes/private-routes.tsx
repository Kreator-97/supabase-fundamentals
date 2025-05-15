import type { FC, PropsWithChildren } from "react"
import { Navigate } from "react-router"
import { useAuthentication } from "../context/auth"

export const PrivateRoutes: FC<PropsWithChildren> = ({ children }) => {
  const { session } = useAuthentication()

  if( !session ) {
    return (
     <Navigate to={'/auth/login'} replace/>
    )
  }

  return (
    <>
      {children}
    </>
  )
}