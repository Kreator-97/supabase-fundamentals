import { createContext } from "react";

export interface AuthContextState {
  session: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);
