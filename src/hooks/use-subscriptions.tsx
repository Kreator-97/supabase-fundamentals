import { useEffect, useState } from "react"
import type { Service } from "../interfaces/supabase/types"
import { subscriptionService } from "../services/subscription.service"
import { useAuthentication } from "../context/auth"

export const useSubscriptions = () => {
  const [ subscriptions, setSubscriptions ] = useState<Service[]>([])
  const [ loading, setLoading ] = useState<boolean>(true)
  const { session } = useAuthentication()

  useEffect(() => {
    const profileId = session?.user?.id

    if( !profileId ) {
      setLoading(false)
      return
    }

    subscriptionService.findAll(profileId)
      .then((data) => {
        setSubscriptions(data)
      })
      .catch((error) => {
        console.error('Error fetching subscriptions:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [session?.user.id])

  return {
    subscriptions,
    loading,
  }
}
