/*
  Warnings:

  - Added the required column `updated_date` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL;
