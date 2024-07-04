-- CreateTable
CREATE TABLE `Files` (
    `fileId` INTEGER NOT NULL AUTO_INCREMENT,
    `filePath` VARCHAR(191) NOT NULL,
    `activityId` INTEGER NOT NULL,
    `studentId` INTEGER NOT NULL,

    PRIMARY KEY (`fileId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Files` ADD CONSTRAINT `Files_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Files` ADD CONSTRAINT `Files_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`activityId`) ON DELETE RESTRICT ON UPDATE CASCADE;
