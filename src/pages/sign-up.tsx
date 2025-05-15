import { Navigate } from "react-router"
import { Input } from "../components/ui/input"
import { useAuthentication } from "../context/auth"
import { useState } from "react"
import { supabase } from "../lib/supabase"

export const SignUpPage = () => {
  const { session } = useAuthentication()

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { email, password, confirmPassword } = signUpForm

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Sign up form submitted')

    console.log({
      email,
      password,
      confirmPassword
    })

    if( password !== confirmPassword ) {
      window.alert('Passwords do not match')
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if( error ) {
      console.error('Error signing up:', error)
      window.alert('Error signing up')
      return
    }
  }

  if( session ) {
    return (
      <Navigate to={'/'} replace />
    )
  }

  return (
    <section className="max-w-[640px] mx-auto mt-8">
      <h1 className="mb-4">Register</h1>
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
            value={email}
            onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="confirm-password">Confirm Password</label>
          <Input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 p-2">Login</button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <a href="/auth/login" className="text-blue-500">Login</a>
      </p>
    </section>
  )
}
