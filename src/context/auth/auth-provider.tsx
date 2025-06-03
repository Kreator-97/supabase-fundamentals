import { useEffect, useState, type FC, type PropsWithChildren } from "react"
import { AuthContext } from "./auth-context"
import { supabase } from "../../lib/supabase"
import type { Session } from "@supabase/supabase-js"

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession()
      .then( ({ data}) => {
        setSession(data.session)
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        session,
        loadSession: (session: Session) => {
          setSession(session)
        }
      }}
    >
      {
        children
      }
    </AuthContext.Provider>
  )
}
