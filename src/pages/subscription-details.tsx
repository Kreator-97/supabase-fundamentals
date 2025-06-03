import { RiArrowLeftSLine } from "react-icons/ri"
import { useSubscription } from "../hooks/use-subscription"
import { useParams } from "react-router"

export const SubscriptionDetailsPage = () => {
  const params = useParams()
  const id = String(params.id)

  const { loading, subscription } = useSubscription(id)
  console.log({
    subscription,
    loading,
  })

  if( loading ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading subscription details...</p>
      </div>
    )
  }

  if( !subscription ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No subscription found.</p>
      </div>
    )
  }

  return (
    <div className="px-2">
      <div className="flex items-center mb-4 gap-4">
        <a href="/" className="visited:text-white text-white!">
          <RiArrowLeftSLine
            size={40}
            className="cursor-pointer hover:text-orange-500 transition-colors"
          />
        </a>
        <h1 className="text-xl font-bold">
          {
            subscription.name
          }
        </h1>
      </div>
      <p>
        {
          subscription.amount || 'No description available.'
        }
      </p>
    </div>
  )
}
