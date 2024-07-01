-- CreateTable
CREATE TABLE `Activities` (
    `activityId` INTEGER NOT NULL AUTO_INCREMENT,
    `activityName` VARCHAR(191) NOT NULL,
    `activityDescription` VARCHAR(200) NOT NULL,
    `topidId` INTEGER NOT NULL,

    PRIMARY KEY (`activityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `attendanceId` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` INTEGER NOT NULL,
    `subjectsId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `attended` BOOLEAN NOT NULL,

    PRIMARY KEY (`attendanceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classrooms` (
    `classroomId` INTEGER NOT NULL AUTO_INCREMENT,
    `grade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`classroomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grades` (
    `gradesId` INTEGER NOT NULL AUTO_INCREMENT,
    `studendId` INTEGER NOT NULL,
    `activityId` INTEGER NOT NULL,
    `score` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`gradesId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rol` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `studentId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `classroomId` INTEGER NOT NULL,

    PRIMARY KEY (`studentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subjects` (
    `subjectId` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(191) NOT NULL,
    `classroomId` INTEGER NOT NULL,
    `subjectDescription` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`subjectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Topics` (
    `topicIc` INTEGER NOT NULL AUTO_INCREMENT,
    `topicName` VARCHAR(191) NOT NULL,
    `topicDescription` VARCHAR(200) NOT NULL,
    `subjectId` INTEGER NOT NULL,

    PRIMARY KEY (`topicIc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `rolId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_topidId_fkey` FOREIGN KEY (`topidId`) REFERENCES `Topics`(`topicIc`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_subjectsId_fkey` FOREIGN KEY (`subjectsId`) REFERENCES `Subjects`(`subjectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grades` ADD CONSTRAINT `Grades_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activities`(`activityId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grades` ADD CONSTRAINT `Grades_studendId_fkey` FOREIGN KEY (`studendId`) REFERENCES `Students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_classroomId_fkey` FOREIGN KEY (`classroomId`) REFERENCES `Classrooms`(`classroomId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_classroomId_fkey` FOREIGN KEY (`classroomId`) REFERENCES `Classrooms`(`classroomId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Topics` ADD CONSTRAINT `Topics_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subjects`(`subjectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
