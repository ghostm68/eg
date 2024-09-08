<?php

# SUBJECT
$subject = '';
if (isset($_POST['s1'])) $subject = $_POST['s1'];
if ($subject=='')
{
$subject='Remove';
}
else
{
$subject='Subscribe';
}

# LIST EMAIL ADDRESS
$recipient = 'wordstarnexus@gmail.com';

# VERIFY SYNTAX
if(!filter_var($_POST['f16'], FILTER_VALIDATE_EMAIL))
{
die ('Error: Invalid Email Address');
}

# FORM VALUES
$body = '';
$body .= "Email: ".$_POST['f16']." \n";
$body .= "Name: ".$_POST['f1']." \n";

# SEND MESSGAE

if (function_exists('mb_send_mail'))
{ mb_language('uni'); mb_internal_encoding('UTF-8'); mb_send_mail( $recipient, $subject, $body, "From: $recipient\r\nMIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8") or die ('Error: Mail could not be sent.'); }
else
{ mail( $recipient, $subject, $body, "From: $recipient") or die ('Error: Mail could not be sent.'); }

# SHOW RESULT PAGE
header('Location: https://www.wordstar.nexus/thnkx.html');
?>
