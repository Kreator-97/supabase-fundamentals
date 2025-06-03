import { useNavigate } from "react-router"
import { useAuthentication } from "../context/auth"

export const Header = () => {
  const { session } = useAuthentication()
  const { user } = session || {}

  const navigate = useNavigate()

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
      <div className="flex justify-between">
        <p>Manage your subscriptions easily</p>
        <button
          className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition-colors duration-200"
          onClick={() => navigate('/subscription/create')}
        >
          Create Subscription
        </button>
      </div>
    </header>
  )
}
