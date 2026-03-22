/*
  Warnings:

  - Added the required column `updated_date` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL;
