import { z } from 'zod';

export const CreateUserSchema = z.object({
    email: z.string().email(),
    password: z.string().length(6),
    mobile: z.string().length(10).optional(),
    firstName: z.string(),
    lastName: z.string().optional(),
    role: z.enum(["farmer", "buyer"]),
}).strict();

export const UpdateUserSchema = z.object({
    password: z.string().min(6).optional(),
    mobile: z.string().length(10).optional(),
    firstName: z.string().optional(),
    lastname: z.string().optional(),
    role: z.string().optional(),
}).strict();

export const UpdateAddressSchema = z.object({
    pincode: z.string().length(6).optional(),
    locality: z.string().optional(),
    address: z.string().optional(),
    landmark: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    alternateMob: z.string().optional(),
}).strict();