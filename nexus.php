<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set the content type to JSON
header("Content-Type: application/json");

// Replace with your actual email settings
$to = "inkrealm@wordstar.nexus";
$subject = "New Signup on Your Web";

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if email is set in the POST data
    if (isset($_POST['email'])) {
        // Sanitize and validate email address
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $message = "A new user has signed up with the email address: " . $email;

            // Set email headers
            $headers = "From: Your Website <noreply@wordstar.nexus>\r\n";
            $headers .= "Reply-To: noreply@wordstar.nexus\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            if (mail($to, $subject, $message, $headers)) {
                echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
            } else {
                $error = error_get_last();
                echo json_encode(["status" => "error", "message" => "Error sending email: " . $error['message']]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No email address provided."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method. Please use POST."]);
}
?>
