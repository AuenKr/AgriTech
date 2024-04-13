/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Buyer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Buyer` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Buyer` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Farmer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Farmer` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Farmer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buyer" DROP CONSTRAINT "Buyer_userId_fkey";

-- DropForeignKey
ALTER TABLE "Farmer" DROP CONSTRAINT "Farmer_userId_fkey";

-- AlterTable
ALTER TABLE "Buyer" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Buyer_id_seq";

-- AlterTable
ALTER TABLE "Farmer" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Farmer_id_seq";

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
