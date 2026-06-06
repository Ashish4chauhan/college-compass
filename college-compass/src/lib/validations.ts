import { z } from "zod";

export const searchCollegeSchema = z.object({
  search: z.string().optional(),
  location: z.string().optional(),

  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),

  minFees: z.coerce.number().optional(),
  maxFees: z.coerce.number().optional(),

  rating: z.coerce.number().optional(),
});