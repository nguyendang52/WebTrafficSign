-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 22, 2021 at 10:54 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Map`
--

-- --------------------------------------------------------

--
-- Table structure for table `Location`
--

CREATE TABLE `Location` (
  `idLocation` int(11) NOT NULL,
  `idTrafficSign` int(11) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Location`
--

INSERT INTO `Location` (`idLocation`, `idTrafficSign`, `latitude`, `longitude`) VALUES
(1, 1, 16.047079, 108.20623);

-- --------------------------------------------------------

--
-- Table structure for table `TrafficSign`
--

CREATE TABLE `TrafficSign` (
  `id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `TrafficSign`
--

INSERT INTO `TrafficSign` (`id`, `name`, `url`) VALUES
(1, 'Cam Di Nguoc Chieu', '\"https://upload.wikimedia.org/wikipedia/commons/a/a5/Road-sign-no-entry.svg\"'),
(2, 'Cam o to ', '\"https://upload.wikimedia.org/wikipedia/commons/9/9c/Vietnam_road_sign_P103a.svg\"'),
(3, 'Cam o to re phai', '\"https://upload.wikimedia.org/wikipedia/commons/a/af/Vietnam_road_sign_P103b.svg\"'),
(4, 'Cam moto', '\"https://upload.wikimedia.org/wikipedia/commons/5/54/Vietnam_road_sign_P104.svg\"'),
(5, 'Cam oto va moto', '\"https://upload.wikimedia.org/wikipedia/commons/e/e2/Vietnam_road_sign_P105.svg\"'),
(6, 'Cam nguoi di bo', '\"https://upload.wikimedia.org/wikipedia/commons/6/6f/Vietnam_road_sign_P112.svg\"'),
(7, 'Cam re trai', '\"https://upload.wikimedia.org/wikipedia/commons/7/7c/Vietnam_road_sign_P123a.svg\"'),
(8, 'Cam re phai', '\"https://upload.wikimedia.org/wikipedia/commons/2/28/Vietnam_road_sign_P123b.svg\"'),
(9, 'Cam quay dau xe', '\"https://upload.wikimedia.org/wikipedia/commons/a/a5/Vietnam_road_sign_P124a1.svg\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Location`
--
ALTER TABLE `Location`
  ADD PRIMARY KEY (`idLocation`);

--
-- Indexes for table `TrafficSign`
--
ALTER TABLE `TrafficSign`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Location`
--
ALTER TABLE `Location`
  MODIFY `idLocation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `TrafficSign`
--
ALTER TABLE `TrafficSign`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
