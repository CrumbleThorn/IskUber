<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$conn = new mysqli("localhost", "iskuber", "CS192ISLIFE", "iskuber");

if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error);
} 

$sql = "SELECT * FROM activeTrips";
$result = $conn->query($sql);
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
$conn->close();

?>
