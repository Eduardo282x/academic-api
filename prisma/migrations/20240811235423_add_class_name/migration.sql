/*
  Warnings:

  - Added the required column `subjectClassName` to the `Subjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subjects` ADD COLUMN `subjectClassName` VARCHAR(191) NOT NULL;
