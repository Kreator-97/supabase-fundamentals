import { useAuthentication } from "../context/auth"

export const Header = () => {
  const { session } = useAuthentication()
  const { user } = session || {}

  return (
    <header className="mb-2">
      <div className="flex justify-between gap-2">
        <h1 className="mb-4">My Subscriptions</h1>
        <p>
          {
            user
            ? `Welcome, ${user.email}`
            : 'You are not logged in'
          }
        </p>
      </div>
      <p>Manage your subscriptions easily</p>
    </header>
  )
}
