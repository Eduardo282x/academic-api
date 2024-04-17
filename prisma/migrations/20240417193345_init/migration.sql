-- CreateTable
CREATE TABLE
    `Roles` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `rol` VARCHAR(191) NOT NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE
    `Users` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(191) NOT NULL,
        `lastname` VARCHAR(191) NOT NULL,
        `username` VARCHAR(191) NOT NULL,
        `password` VARCHAR(191) NOT NULL,
        `email` VARCHAR(191) NOT NULL,
        `age` VARCHAR(191) NOT NULL,
        `rolId` INTEGER NOT NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Roles` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;