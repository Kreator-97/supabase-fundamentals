import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import type { CreateServiceDto, Service } from "../interfaces/supabase/types";

export class SubscriptionService {
  private readonly supabase: SupabaseClient;

  constructor(
    supabaseClient: SupabaseClient
  ) {
    this.supabase = supabaseClient;
  }

  async findOne(id: string): Promise<Service | null> {
    const { data, error } = await this.supabase
      .from('services')
      .select('*, profile:profiles(*)')
      .eq('id', id)
      .single<Service>();

    if (error) {
      console.log('Error fetching subscription:', error);
      throw new Error('Failed to fetch subscription');
    }

    return data || null;
  }

  async findAll(profilesId: string): Promise<Service[]> {
    const { data, error } = await this.supabase
      .from('services')
      .select('*, profile:profiles(*)')
      .eq('profile_id', profilesId)
      .overrideTypes<Array<Service>>()

    if (error) {
      console.log('Error fetching subscriptions:', error);
      throw new Error('Failed to fetch subscriptions');
    }

    return data || [];
  }

  async create(dto: CreateServiceDto): Promise<Service> {
    const { data, error } = await this.supabase
      .from('services')
      .insert([dto])
      .select('*, profile:profiles(*)')
      .single<Service>();

    if (error) {
      console.log('Error creating subscription:', error);
      throw new Error('Failed to create subscription');
    }

    return data
  }

}

export const subscriptionService = new SubscriptionService(supabase);
