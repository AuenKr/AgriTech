import { z } from 'zod';

export const CreateProductSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    price: z.number(),
    salePrice: z.number(),
    quantityAvailable: z.number(),
    userId: z.string()
}).strict()

export const UpdateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    salePrice: z.number().optional(),
    quantityAvailable: z.number().optional(),
}).strict()