/*
  Warnings:

  - You are about to drop the column `descrption` on the `Reptil` table. All the data in the column will be lost.
  - Added the required column `description` to the `Reptil` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reptil" DROP COLUMN "descrption",
ADD COLUMN     "description" TEXT NOT NULL;
