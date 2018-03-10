/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Gabe Tamayo

  Code History:
  Programmer            Date        Description
  Gabe Tamayo           3/7/18      File generation

  File creation date: 3/7/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: SQL dump for IskUber database systems
*/

-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: iskuber
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary table structure for view `activeTrips`
--

DROP TABLE IF EXISTS `activeTrips`;
/*!50001 DROP VIEW IF EXISTS `activeTrips`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `activeTrips` (
  `passengerName` tinyint NOT NULL,
  `driverName` tinyint NOT NULL,
  `time` tinyint NOT NULL,
  `departurePoint` tinyint NOT NULL,
  `destination` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `driverList`
--

DROP TABLE IF EXISTS `driverList`;
/*!50001 DROP VIEW IF EXISTS `driverList`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `driverList` (
  `driverName` tinyint NOT NULL,
  `vMake` tinyint NOT NULL,
  `vModel` tinyint NOT NULL,
  `vColor` tinyint NOT NULL,
  `plateNo` tinyint NOT NULL,
  `maxPass` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drivers` (
  `driverID` smallint(6) NOT NULL,
  `vMake` varchar(32) NOT NULL,
  `vModel` varchar(64) NOT NULL,
  `vColor` varchar(32) NOT NULL,
  `plateNo` varchar(32) NOT NULL,
  `maxpass` smallint(6) NOT NULL,
  `image` mediumblob,
  KEY `driverID` (`driverID`),
  CONSTRAINT `drivers_ibfk_1` FOREIGN KEY (`driverID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers`
--

LOCK TABLES `drivers` WRITE;
/*!40000 ALTER TABLE `drivers` DISABLE KEYS */;
INSERT INTO `drivers` VALUES (1,'Honda','Civic (2008)','Black','SRC1123',4,NULL),(2,'Honda','Accord (2018)','Red','ARC7648',4,NULL),(4,'Ford','Transit (1996)','White','FR33C4NDY',12,NULL),(3,'Nissan','Micra (1986)','Red','5QU4DF4M',4,NULL),(5,'Toyota','Revo (2008)','Crimson','ABC123',12,NULL);
/*!40000 ALTER TABLE `drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requests` (
  `requestID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` smallint(6) NOT NULL,
  `driverID` smallint(6) NOT NULL,
  `type` varchar(8) NOT NULL,
  `schedID` smallint(6) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`requestID`),
  KEY `userID` (`userID`),
  KEY `driverID` (`driverID`),
  KEY `schedID` (`schedID`),
  CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`driverID`) REFERENCES `drivers` (`driverID`),
  CONSTRAINT `requests_ibfk_3` FOREIGN KEY (`schedID`) REFERENCES `schedules` (`schedID`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (1,2,1,'REQUEST',1,'LET\'S GET ROIT INTO THE NEWS'),(2,2,1,'REJECT',1,'HEY WHAT\'S UP GUYS IT\'S SCARCE HERE'),(3,3,4,'REQUEST',3,NULL),(4,3,4,'ACCEPT',3,'WHERE\'S THE BLACKSMITH!?!?!'),(5,4,1,'REQUEST',2,'HELLO EVERYBODY MY NAME IS MARKIPLIER'),(6,4,1,'ACCEPT',2,'BUY MY CHAIR IT\'S ONLY $399'),(38,1,1,'REQUEST',2,'');
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `schedID` smallint(6) NOT NULL AUTO_INCREMENT,
  `driverID` smallint(6) NOT NULL,
  `time` time DEFAULT NULL,
  `departurePoint` varchar(32) NOT NULL,
  `destination` varchar(32) NOT NULL,
  PRIMARY KEY (`schedID`),
  KEY `driverID` (`driverID`),
  CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`driverID`) REFERENCES `drivers` (`driverID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (1,1,'11:30:00','DCS','CAL'),(2,1,'14:30:00','CAL','DCS'),(3,3,'08:00:00','DFA','ENGG'),(4,4,'10:15:00','VANGUARD','MATH');
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `tripDrivers`
--

DROP TABLE IF EXISTS `tripDrivers`;
/*!50001 DROP VIEW IF EXISTS `tripDrivers`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `tripDrivers` (
  `driverName` tinyint NOT NULL,
  `driverID` tinyint NOT NULL,
  `userID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `tripPassengers`
--

DROP TABLE IF EXISTS `tripPassengers`;
/*!50001 DROP VIEW IF EXISTS `tripPassengers`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `tripPassengers` (
  `passengerName` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `schedID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `trips`
--

DROP TABLE IF EXISTS `trips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trips` (
  `driverID` smallint(6) NOT NULL DEFAULT '0',
  `userID` smallint(6) NOT NULL DEFAULT '0',
  `schedID` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`driverID`,`userID`,`schedID`),
  KEY `userID` (`userID`),
  KEY `schedID` (`schedID`),
  KEY `driverID` (`driverID`),
  CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`driverID`) REFERENCES `drivers` (`driverID`),
  CONSTRAINT `trips_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  CONSTRAINT `trips_ibfk_3` FOREIGN KEY (`schedID`) REFERENCES `schedules` (`schedID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trips`
--

LOCK TABLES `trips` WRITE;
/*!40000 ALTER TABLE `trips` DISABLE KEYS */;
INSERT INTO `trips` VALUES (4,3,3),(1,4,2);
/*!40000 ALTER TABLE `trips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userID` smallint(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `legalName` varchar(64) NOT NULL,
  `passHash` varchar(64) NOT NULL,
  `contactNo` varchar(32) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'scarce','John Scarce','ABCDEFG','11234567890'),(2,'keemstar','Daniel Keem','DR4M44L3RT','123412341234'),(3,'pewdiepie','Felix Kjellberg','BUTCANYOUDOTHIS','01189998819991197253'),(4,'markiplier','Mark Fischbach','BOATDOGBOATDOGBOATDOGBOOOATDOG','222222222222'),(5,'sdailisan','Steeeeeeeeeeeeeeeeve Dailisan','STEEEEEEEEEEEEEEEEEEEEEEEVE','1234567890');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `activeTrips`
--

/*!50001 DROP TABLE IF EXISTS `activeTrips`*/;
/*!50001 DROP VIEW IF EXISTS `activeTrips`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `activeTrips` AS select `tripPassengers`.`passengerName` AS `passengerName`,`tripDrivers`.`driverName` AS `driverName`,`schedules`.`time` AS `time`,`schedules`.`departurePoint` AS `departurePoint`,`schedules`.`destination` AS `destination` from ((`tripDrivers` join `tripPassengers` on(`tripDrivers`.`userID`)) join `schedules` on(`tripPassengers`.`schedID`)) where ((`tripPassengers`.`schedID` = `schedules`.`schedID`) and (`tripDrivers`.`userID` = `tripPassengers`.`userID`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `driverList`
--

/*!50001 DROP TABLE IF EXISTS `driverList`*/;
/*!50001 DROP VIEW IF EXISTS `driverList`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `driverList` AS select `users`.`legalName` AS `driverName`,`drivers`.`vMake` AS `vMake`,`drivers`.`vModel` AS `vModel`,`drivers`.`vColor` AS `vColor`,`drivers`.`plateNo` AS `plateNo`,`drivers`.`maxpass` AS `maxPass` from (`users` join `drivers` on((`drivers`.`driverID` = `users`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `tripDrivers`
--

/*!50001 DROP TABLE IF EXISTS `tripDrivers`*/;
/*!50001 DROP VIEW IF EXISTS `tripDrivers`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `tripDrivers` AS select `users`.`legalName` AS `driverName`,`trips`.`driverID` AS `driverID`,`trips`.`userID` AS `userID` from (`trips` join `users` on((`trips`.`driverID` = `users`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `tripPassengers`
--

/*!50001 DROP TABLE IF EXISTS `tripPassengers`*/;
/*!50001 DROP VIEW IF EXISTS `tripPassengers`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `tripPassengers` AS select `users`.`legalName` AS `passengerName`,`trips`.`userID` AS `userID`,`trips`.`schedID` AS `schedID` from (`trips` join `users` on((`trips`.`userID` = `users`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-09 10:02:48
