<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->CharSet = "UTF-8";
    $mail->Host       = 's39.linuxpl.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'kontakt@beestrong.pl';                     // SMTP username
    $mail->Password   = 'Haribol123!';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('kontakt@beestrong.pl', 'Formularz na stronie');
    $mail->addAddress('kontakt@beestrong.pl', 'Kontakt beestrong');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Nowa wiadomość beestrong';
    $mail->Body    = 'Imię: ' . $_POST['name'] . '<br />';
    $mail->Body    .= 'Email: ' . $_POST['email'] . '<br />';
    $mail->Body    .= 'Wiadomość: ' . $_POST['message'] . '<br />';
    $mail->AltBody = $mail->Body;

    $mail->send();
    echo 'ok';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>