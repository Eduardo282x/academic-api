/*
  Warnings:

  - You are about to alter the column `score` on the `grades` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
-- ALTER TABLE `grades` MODIFY `score` DECIMAL(10, 2) NOT NULL;

-- INSERT INTO `roles` (`rol`) VALUES ('Administrador'),('Profesor'),('Estudiante');
-- INSERT INTO `users`(`name`, `lastname`, `username`, `password`, `email`, `age`, `rolId`) VALUES ('admin','admin','admin','admin','admin@gmail.com','22','1'),('Eduardo','Rojas','Eduardo28','1234','eduardo@gmail.com','22','2'),('Estudiante','Nuevo','Estudiante01','12345678','estudiante@gmail.com','22','3')
-- INSERT INTO `classrooms` (`classroomId`, `grade`) VALUES (NULL, '6to Grado');
-- INSERT INTO `subjects` (`subjectId`, `subjectName`, `classroomId`) VALUES (NULL, 'Geometria', '1');
-- INSERT INTO `students` (`studentId`, `userId`, `classroomId`) VALUES (NULL, '3', '1');
-- INSERT INTO `topics` (`topicIc`, `topicName`, `subjectId`) VALUES (NULL, 'Tema 1', '1');
-- INSERT INTO `activities` (`activityId`, `activityName`, `topidId`) VALUES (NULL, 'Tarea 1', '1');
-- INSERT INTO `attendance` (`attendanceId`, `studentId`, `subjectsId`, `date`, `attended`) VALUES (NULL, '1', '1', '2024-04-22 08:38:40.000', '1');
-- INSERT INTO `grades` (`gradesId`, `studendId`, `activityId`, `score`) VALUES (NULL, '1', '1', '18');
