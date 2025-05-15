import type { FC, PropsWithChildren } from "react"
import { AuthContext } from "./auth-context"

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

  return (
    <AuthContext.Provider
      value={{
        session: {} // Replace with actual session data
      }}
    >
      {
        children
      }
    </AuthContext.Provider>
  )
}
