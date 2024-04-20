import Product from '@/app/shop/[productId]/page';
import { z } from 'zod';

export const CreateProductSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    price: z.number(),
    salePrice: z.number(),
    quantityAvailable: z.number(),
}).strict()

export const UpdateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    salePrice: z.number().optional(),
    quantityAvailable: z.number().optional(),
}).strict()

export const CreateProductImagesSchema = z.object({
    productId: z.string(),
    images: z.object({
        id: z.string(),
        imageSrc: z.string(),
    }).array()

}).strict();