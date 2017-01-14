DROP TABLE IF EXISTS `am_users`;

CREATE TABLE `am_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` enum('SuperAdmin','Admin','Manager','Staff','General') DEFAULT 'General',
  `status` enum('Active','Inactive','Deleted') NOT NULL DEFAULT 'Active',
  `pwd` varchar(64) NOT NULL,
  `createdBy` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
