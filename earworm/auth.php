<?php
// auth.php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
$conn = new mysqli('localhost', 'root', '', 'Earworm');

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

$type = $data['type'];
if ($type === 'register') {
    $username = $data['username'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_BCRYPT);

    $exists = $conn->query("SELECT * FROM users WHERE username='$username' OR email='$email'");
    if ($exists->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'Username or email already exists']);
    } else {
        $conn->query("INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')");
        echo json_encode(['success' => true, 'user' => $username]);
    }
} elseif ($type === 'login') {
    $usernameOrEmail = $data['usernameOrEmail'];
    $password = $data['password'];

    $result = $conn->query("SELECT * FROM users WHERE username='$usernameOrEmail' OR email='$usernameOrEmail'");
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            echo json_encode(['success' => true, 'user' => $user['username']]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid password']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
}

$conn->close();
?>
