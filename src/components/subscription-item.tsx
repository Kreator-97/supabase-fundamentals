import { Link } from "react-router"

import type { FC } from "react"
import type { Service } from "../interfaces/supabase/types"

interface Props {
  subscription: Service
}

export const SubscriptionItem: FC<Props> = ({
  subscription,
}) => {


  return (
    <li className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2">
      <div>
        <h2 className="text-lg font-bold">
          {
            subscription.name
          }
        </h2>
        <p className="text-gray-500">
          ${
            Number(subscription.amount).toFixed(2)
          }
        </p>
        <Link
          to={`/subscriptions/${subscription.id}`}
          className="text-blue-500 hover:underline"
        >
          Ver suscripción
        </Link>
      </div>
    </li>
  )
}