import { z } from "zod";

// export type Client = {
//   document: string;
//   name: string;
//   email: string;
//   phone: string;
//   deliveryAddress: string;
// };

export enum DocumentType {
  CC = "CC",
  CE = "CE",
  TI = "TI",
  PP = "PP",
}

// Esquema Zod para el cliente
export const schema = z.object({
  document: z.string().regex(/^(CC|CE|TI|PP)-\d{1,17}$/, "Incorrect document format"),
  name: z.string().nonempty("Name is mandatory"),
  email: z.string().email("Incorrect email format"),
  phone: z.string().regex(/^\d{3}-\d{7}$/, "Incorrect phone number format"),
  deliveryAddress: z.string().min(10).max(500).nonempty("Address is mandatory")
});

// Tipo TypeScript para el esquema
export type Client = z.infer<typeof schema>;
