<?php
// Replace with your actual email settings
$to = "inkrealm@wordstar.nexus";
$subject = "New Signup on Your Web";

$email = $_POST['email'];

$message = "A new user has signed up with the email address: " . $email;

// You can use a library like PHPMailer for more advanced email sending
// For basic sending, use mail()
if (mail($to, $subject, $message)) {
    echo "Email sent successfully!";
} else {
    echo "Error sending email.";
}
?>
