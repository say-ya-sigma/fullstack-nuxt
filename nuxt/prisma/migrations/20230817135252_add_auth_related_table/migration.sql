/*
  Warnings:

  - You are about to drop the column `meetingThreadId` on the `meeting_minutes` table. All the data in the column will be lost.
  - Added the required column `meetingStructureId` to the `meeting_minutes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `meeting_minutes` DROP FOREIGN KEY `meeting_minutes_meetingThreadId_fkey`;

-- AlterTable
ALTER TABLE `meeting_minutes` DROP COLUMN `meetingThreadId`,
    ADD COLUMN `meetingStructureId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `sessions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `expiredAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `meeting_minutes` ADD CONSTRAINT `meeting_minutes_meetingStructureId_fkey` FOREIGN KEY (`meetingStructureId`) REFERENCES `meeting_structures`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
