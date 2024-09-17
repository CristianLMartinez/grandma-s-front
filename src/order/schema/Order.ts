import { z } from "zod";

export interface OrderItemsDto {
  productUuid: string; // UUID de cada producto
  productName: string;
  quantity: number;
}

export interface Order {
  clientDocument: string;
  products: OrderItemsDto[];
  extraInformation?: string;
}


export const orderSchema = z.object({
  clientDocument: z
    .string()
    .regex(/^(CE|CC|TI|P)-\d{1,17}$/, "Incorrect client document format"),
  
  products: z
    .array(
      z.object({
        productUuid: z.string().uuid("Product UUID must be a valid UUID"),
        quantity: z
          .number()
          .min(1, "Quantity must be at least 1")
          .max(99, "Quantity must not exceed 99")
      })
    )
    .nonempty("Products can't be null"),

  extraInformation: z.string().optional(),
});


