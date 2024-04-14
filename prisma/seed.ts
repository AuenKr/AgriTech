import prisma from "../src/db/index";

async function seedDB() {
    return prisma.$transaction(async (prisma) => {
        // User
        await prisma.user.createMany({
            data: [
                {
                    email: "abc@abc.com",
                    password: "123123",
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
        // Imges
        await prisma.image.createMany({
            data: [
                // Images for the Apple product
                {
                    productId: 1,
                    imageUrl: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg"
                },
                {
                    productId: 1,
                    imageUrl: "https://freshindiaorganics.com/cdn/shop/products/Apples.jpg?v=1686739530"
                },
                // Images for the Banana product
                {
                    productId: 2,
                    imageUrl: "https://cdn.britannica.com/58/194358-050-91CE9CB6/Gros-Michel-banana-tree.jpg"
                },
                {
                    productId: 2,
                    imageUrl: "https://herbalwise.com.my/wp-content/uploads/2022/07/shutterstock_533882299-500x370.jpg"
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
                    "status": "pending",
                    "productId": 2,
                    "quantity": 100,
                    "bidPrice": 400
                },
                {
                    "userId": 2,
                    "status": "paid",
                    "productId": 1,
                    "quantity": 100,
                    "bidPrice": 100
                }
            ]
        })
        // Message
        const messages = [
            { message: "Hello, I'm interested in your product.", senderId: 1, productId: 2 },
            { message: "Can you provide more details about this product?", senderId: 1, productId: 2 },
            { message: "Do you offer any discounts for bulk orders?", senderId: 2, productId: 1 },
            { message: "I would like to place an order for this product.", senderId: 2, productId: 1 },
            // Add more random messages as needed
        ];
        for (const message of messages) {
            await prisma.message.create({
                data: {
                    message: message.message,
                    senderId: message.senderId,
                    productId: message.productId,
                },
            });
        }
        return "Data seeding successful";
    })
}

seedDB();