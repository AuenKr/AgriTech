import { z } from 'zod';

export const CreateOrderSchema = z.object({
    quantity: z.number(),
    bidPrice: z.number().optional(),
    userId: z.string(),
    productId: z.string(),
}).strict()

export const UpdateOrderSchema = z.object({
    quantity: z.number().optional(),
    bidPrice: z.number().optional(),
    productId: z.string().optional(),
}).strict()