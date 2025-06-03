import { Navigate } from "react-router"
import { Input } from "../components/ui/input"
import { useAuthentication } from "../context/auth"
import { useState } from "react"
import { supabase } from "../lib/supabase"

export const LoginPage = () => {
  const { session, loadSession } = useAuthentication()
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const { email, password } = loginForm

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Login form submitted')

    console.log({
      email,
      password
    })

    // log in logic here


    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if( error ) {
      return window.alert(error.message)
    }

    console.log({
      data,
      error
    })

    loadSession(data.session)
  }

  if( session ) {
    return (
      <Navigate to={'/'} replace />
    )
  }

  return (
    <section className="max-w-[640px] mx-auto mt-8">
      <h1 className="mb-4">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} // Update password state
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} // Update password state
          />
        </div>
        <button type="submit" className="bg-blue-500 p-2">Login</button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <a href="/auth/register" className="text-blue-500">Sign Up</a>
      </p>
      <p>
        {/* <a href="/auth/forgot-password" className="text-blue-500">Forgot Password?</a> */}
      </p>
    </section>
  )
}
