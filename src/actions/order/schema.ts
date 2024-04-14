import { z } from 'zod';

export const CreateOrderSchema = z.object({
    quantity: z.string(),
    bidPrice: z.string().optional(),
    productId: z.string(),
    message: z.string().optional()
}).strict()

export const UpdateOrderSchema = z.object({
    quantity: z.string().optional(),
    bidPrice: z.string().optional(),
    productId: z.string().optional(),
}).strict()