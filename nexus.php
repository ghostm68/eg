<?php

// Replace with your actual email settings
$to = "inkrealm@wordstar.nexus";
$subject = "New Signup on Your Web";

// Sanitize email address
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $message = "A new user has signed up with the email address: " . $email;

    // Set email headers
    $headers = "From: Your Website <noreply@wordstar.nexus>\r\n";
    $headers .= "Reply-To: noreply@wordstar.nexus\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        $error = error_get_last();
        echo "Error sending email: " . $error['message'];
    }
} else {
    echo "Invalid email address.";
}

?>
