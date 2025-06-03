import { useEffect, useState } from "react"
import type { Service } from "../interfaces/supabase/types"
import { subscriptionService } from "../services/subscription.service"

export const useSubscription = (id: string) => {
  const [ subscription, setSubscription ] = useState<Service|null>(null)
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(() => {
    subscriptionService.findOne(id)
      .then((data) => {
        setSubscription(data)
      })
      .catch((error) => {
        console.error('Error fetching subscriptions:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return {
    subscription,
    loading,
  }
}
