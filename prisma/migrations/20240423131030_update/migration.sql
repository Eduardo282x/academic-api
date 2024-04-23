/*
  Warnings:

  - Added the required column `subjectDescription` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subjects` ADD COLUMN `subjectDescription` VARCHAR(200) NOT NULL;
