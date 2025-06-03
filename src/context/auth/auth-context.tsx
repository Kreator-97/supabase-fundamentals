import { createContext } from "react";

import type { Session } from "@supabase/supabase-js";

export interface AuthContextState {
  session: Session | null;
  loadSession: (session: Session) => void;
}

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);
