import { useState } from "react"
import { subscriptionService } from "../services/subscription.service"
import type { CreateServiceDto } from "../interfaces/supabase/types"
import { useNavigate } from "react-router"
import { useAuthentication } from "../context/auth"

export const CreateService = () => {
  const navigate = useNavigate()
  const { session } = useAuthentication()
  const profileId = session?.user?.id

  const [ subscriptionDto, setSubscription ] = useState<CreateServiceDto>({
    amount: 0,
    name: '',
    start_date: new Date().toISOString().split('T')[0], // Default to today
    profile_id: profileId || ''
  })

  return (
    <form
      className="flex flex-col gap-4 p-4 bg-slate-700 max-w-[700px] mx-auto rounded-lg shadow-lg text-white translate-y-4"
      onSubmit={async (e) => {
        e.preventDefault()
        console.log({
          subscriptionDto,
        })
        await subscriptionService.create(subscriptionDto)
        navigate('/')
      }}
    >
      <h2 className="mb-4">Add a new service</h2>

      <label className="text-sm">Service Name</label>
      <input
        type="text"
        className="p-2 rounded bg-slate-600 text-white"
        value={subscriptionDto.name}
        onChange={
          (e) => {
            const name = (e.target as HTMLInputElement).value
            setSubscription({
              ...subscriptionDto,
              name,
            })
          }
        }
      />

      <label className="text-sm">Amount</label>
      <input
        type="number"
        className="p-2 rounded bg-slate-600 text-white"
        value={subscriptionDto.amount || ''}
        onChange={
          (e) => {
            const amount = (e.target as HTMLInputElement).value
            setSubscription({
              ...subscriptionDto,
              amount: Number(amount) || 0,
            })
          }
        }
      />

      <label className="text-sm">Start Date</label>
      <input
        type="date"
        className="p-2 rounded bg-slate-600 text-white"
        value={subscriptionDto.start_date}
        onChange={
          (e) => {
            const start_date = (e.target as HTMLInputElement).value
            setSubscription({
              ...subscriptionDto,
              start_date,
            })
          }
        }
      />

      <button
        type="submit"
        className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Create
      </button>
    </form>
  )
}

