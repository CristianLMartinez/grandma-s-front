import { z } from "zod";

export const schema = z.object({
  uuid: z.string().uuid(),
  fantasyName: z.string(),
  category: z.string(),
  price: z.string(),
  description: z.string()
})

export type Product = z.infer<typeof schema>;