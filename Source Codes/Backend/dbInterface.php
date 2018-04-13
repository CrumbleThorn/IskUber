<?php
/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Gabe Tamayo

  Code History:
  Programmer            Date        Description
  Gabe Tamayo           3/20/18     File generation
  Gabe Tamayo           3/23/18     Added commands for GET, POST
  Gabe Tamayo           4/12/18     Updated existing commands, added commands for PUT

  File creation date: 3/20/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: Main back-end DB interface, accessed by REST API
*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Content-Type: application/json");


$_POST = file_get_contents("php://input"); //input from HTTP stuff
$json = json_decode($_POST, true); // the json-decoded input

//Filter Commands
if ((string)$_GET['command'] == 'QUERY') {
    if ((string)$_GET['spec'] == 'DRIVERLIST') {
        $sql = "SELECT * FROM driverList";
    } elseif ((string)$_GET['spec'] == 'DRIVERPROFILE') {
        $sql = "SELECT * FROM driverList WHERE driverID = " . (string)$_GET['driverID'];
    } elseif ((string)$_GET['spec'] == 'DRIVERTRIPS') {
        $sql = "SELECT * FROM schedules WHERE driverID = " . (string)$_GET['driverID'];
    } elseif ((string)$_GET['spec'] == 'DRIVERREQUESTS') {
        $sql = "SELECT * FROM unresolvedRequests WHERE driverID = " . (string)$_GET['driverID'];
    } elseif ((string)$_GET['spec'] == 'USERPROFILE') {
        $sql = "SELECT * FROM users WHERE userID = " . (string)$_GET['userID'];
    } elseif ((string)$_GET['spec'] == 'USERTRIPS') {
        $sql = "SELECT * FROM activeTrips WHERE passengerID = " . (string)$_GET['passengerID'];
    } elseif ((string)$_GET['spec'] == 'USERLIST') {
        $sql = "SELECT * FROM userList";
    } elseif ((string)$_GET['spec'] == 'USERREQUESTS') {
        $sql = "SELECT * FROM requestDetails WHERE userID = " . (string)$_GET['userID'];
    } elseif ((string)$_GET['spec'] == 'DRIVERSCHEDULE') {
        $sql = "SELECT * FROM schedules WHERE driverID = " . (string)$_GET['driverID'];
    } elseif ((string)$_GET['spec'] == 'SCHEDLIST') {
        $sql = "SELECT * FROM schedules";
    } else {
        $sql = "SELECT * FROM tbi";
    }
} elseif ((string)$_GET['command'] == 'INSERT') {
    if ((string)$_GET['spec'] == 'REQUEST') {
        $sql = "INSERT INTO requests (userID, driverID, type, schedID, comment, isResolved) VALUES ('" . (string)$json['userID'] . "', '" . (string)$json['driverID'] . "', '" . $json['type'] . "', '" . (string)$json['schedID'] . "', '" . $json['comment'] . "', '" . (string)$json['isResolved'] . "')";
    } elseif ((string)$_GET['spec'] == 'USER') {
        $sql = "INSERT INTO users (username, legalName, passHash, contactNo) VALUES ('" . (string)$json['username'] . "', '" . (string)$json['legalName'] . "', '" . $json['passHash'] . "', '" . $json['contactNo'] . "')";
    } elseif ((string)$_GET['spec'] == 'DRIVER') {
        $sql = "INSERT INTO drivers (driverID, vMake, vModel, vColor, plateNo, maxpass) VALUES ('" . (string)$json['driverID'] . "', '" . (string)$json['vMake'] . "', '" . $json['vModel'] . "', '" . (string)$json['vColor'] . "', '" . $json['plateNo'] . "', '" . $json['maxPass'] . "')";
    } elseif ((string)$_GET['spec'] == 'SCHEDULE') {
        $sql = "INSERT INTO schedules (driverID, time, departurePoint, destination) VALUES ('" . (string)$json['driverID'] . "', '" . $json['time'] . "', '" . $json['departurePoint'] . "', '" . $json['destination'] . "')";
    } elseif ((string)$_GET['spec'] == 'TRIP') {
        $sql = "INSERT INTO trips (driverID, userID, schedID) VALUES ('" . (string)$json['driverID'] . "', '" . (string)$json['userID'] . "', '" . $json['schedID'] . "')";
    } else {
        $sql = "SELECT * FROM tbi";
    }
} elseif ((string)$_GET['command'] == 'MODIFY') {
    if ((string)$_GET['spec'] == 'UPDATE') {
        //$sql = "UPDATE " . (string)$json['table'] . " SET ";
    } elseif ((string)$_GET['spec'] == 'DELETE') {
        $sql = "INSERT INTO requests (userID, driverID, type, schedID, comment) VALUES ('" . (string)$json['userID'] . "', '" . (string)$json['driverID'] . "', '" . $json['type'] . "', '" . (string)$json['schedID'] . "', '" . $json['comment'] . "')";
    } elseif ((string)$_GET['spec'] == 'RESOLVE') {
        $sql = "UPDATE requests SET isResolved = 1 WHERE requestID = " . (string)$_GET['requestID'];
    } else {
        $sql = "SELECT * FROM tbi";
    }
} else {
    
    }
//echo ($json['command']);
//echo($sql);
//Initialize Connection
$conn = new mysqli("localhost", "iskuber", "CS192ISLIFE", "iskuber");

if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error);
}

//Send SQL Command
$result = $conn->query($sql);
//echo($sql);
// Formatting
echo "{ \"results\": [";
if ($result->num_rows > 0) {
    $first = true;
    while($row = $result->fetch_assoc()) {
        if ($first){
            $first = false;
        } else {
            echo ",";
        }
        echo json_encode($row);
    }
} else {
    print "{}";
}
    echo "]}";
// command = 'INSERT/QUERY/MODIFY' type = 'DRIVERTRIPS'

$conn->close();
?>
