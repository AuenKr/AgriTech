import prisma from "../src/db/index";

async function seedDB() {
    return prisma.$transaction(async (prisma) => {
        // User
        await prisma.user.createMany({
            data: [
                {
                    email: "user1@example.com",
                    password: "password1",
                    mobile: "1234567890",
                    firstName: "John",
                    lastName: "Doe",
                    role: "farmer",
                    verified: true,
                },
                {
                    email: "user2@example.com",
                    password: "password2",
                    mobile: "9876543210",
                    firstName: "Alice",
                    lastName: "Smith",
                    role: "buyer",
                    verified: true,
                }
            ]
        })
        // Buyer
        await prisma.buyer.create({
            data: {
                id: 2,
                companyName: "ABC Company"
            }
        })
        // Product
        await prisma.product.createMany({
            data: [
                {
                    "name": "Apple",
                    "description": "Fresh apples from the farm",
                    "price": 200,
                    "salePrice": 120,
                    "quantityAvailable": 100,
                    "userId": 1,
                },
                {
                    "name": "Banana",
                    "description": "Organic bananas",
                    "price": 50,
                    "salePrice": 30,
                    "quantityAvailable": 200,
                    "userId": 1
                }
            ]
        })
        // Address
        await prisma.address.createMany({
            data: [
                {
                    "userId": 1,
                    "pincode": "123456",
                    "locality": "Farm Area",
                    "address": "Farm Address 1",
                    "landmark": "Near River",
                    "city": "Farmville",
                    "state": "Farmstate",
                    "alternateMob": null
                },
                {
                    "userId": 2,
                    "pincode": "654321",
                    "locality": "Main Street",
                    "address": "Apartment 101",
                    "landmark": "Near Park",
                    "city": "Cityville",
                    "state": "Citystate",
                    "alternateMob": "555-555-5555"
                }
            ]
        })
        // Order
        await prisma.order.createMany({
            data: [
                {
                    "userId": 1,
                    "paymentStatus": "pending",
                    "buyerId": null,
                },
                {
                    "userId": 2,
                    "paymentStatus": "paid",
                    "buyerId": 1,
                }
            ]
        })
        return "Data seeding successful";
    })
}

seedDB();