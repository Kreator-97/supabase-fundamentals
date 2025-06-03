import { useSubscriptions } from "../hooks/use-subscriptions"
import { SubscriptionItem } from "./subscription-item"

export const SubscriptionList = () => {
  const { loading, subscriptions } = useSubscriptions()

  if( loading ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading subscriptions...</p>
      </div>
    )
  }

  console.log({
    subscriptions
  })

  return (
    <div>
      <ul>
        {
          subscriptions.map((subscription) => (
            <SubscriptionItem
              key={subscription.id}
              subscription={subscription}
            />
          ))
        }
      </ul>
    </div>
  )
}
