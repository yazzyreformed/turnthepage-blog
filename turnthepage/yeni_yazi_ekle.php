<?php

$host = "127.0.0.1";
$dbname = "turnthepage";
$username = "root";
$password = "";


$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    die(" hata: " . $conn->connect_error);
}


$title = $_POST['postTitle'];
$content = $_POST['postContent'];
$username = $_POST['username'];
$email = $_POST['email'];


$sql = "INSERT INTO posts (title, content, username, email) VALUES ('$title', '$content', '$username', '$email')";

/
if ($conn->query($sql) === TRUE) {
    echo "Yeni yazı başarıyla eklendi!";
} else {
    echo "Hata: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
