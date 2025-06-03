import type { Database, Tables } from "./database.types";

export type Service = Tables<"services">;


// dto's
// Data Transfer Objects

export type CreateServiceDto = Database["public"]["Tables"]["services"]["Insert"];
export type UpdateServiceDto = Database["public"]["Tables"]["services"]["Update"];

