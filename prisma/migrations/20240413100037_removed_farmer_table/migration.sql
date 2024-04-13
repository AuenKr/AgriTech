/*
  Warnings:

  - You are about to drop the `Farmer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FarmerToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Farmer" DROP CONSTRAINT "Farmer_id_fkey";

-- DropForeignKey
ALTER TABLE "_FarmerToProduct" DROP CONSTRAINT "_FarmerToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_FarmerToProduct" DROP CONSTRAINT "_FarmerToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userId" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Farmer";

-- DropTable
DROP TABLE "_FarmerToProduct";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
