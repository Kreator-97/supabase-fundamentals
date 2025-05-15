import { RiArrowLeftSLine } from "react-icons/ri"

export const SubscriptionDetailsPage = () => {
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
          Subscription Details
        </h1>
      </div>
      <p>
        Details about the subscription will go here.
      </p>
    </div>
  )
}
