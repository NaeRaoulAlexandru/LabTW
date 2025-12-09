<?php
function curata_date($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

$nume = $email = $mesaj = "";
$errors = []; 


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Validare Nume
    if (empty($_POST["nume"])) {
        $errors['nume'] = "Numele este obligatoriu.";
    } else {
        $nume = curata_date($_POST["nume"]);
        if (strlen($nume) < 3) {
            $errors['nume'] = "Numele este prea scurt (minim 3 caractere).";
        }
    }

    // 2. Validare Email
    if (empty($_POST["email"])) {
        $errors['email'] = "Email-ul este obligatoriu.";
    } else {
        $email = curata_date($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = "Formatul email-ului este invalid.";
        }
    }

    // 3. Validare Mesaj
    if (empty($_POST["mesaj"])) {
        $errors['mesaj'] = "Mesajul este obligatoriu.";
    } else {
        $mesaj = curata_date($_POST["mesaj"]);
        if (strlen($mesaj) < 10) {
            $errors['mesaj'] = "Mesajul este prea scurt (minim 10 caractere).";
        }
    }
} else {
    // Dacă cineva încearcă să acceseze procesare.php direct fără formular
    die("Acces interzis. Te rog folosește formularul.");
}
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Rezultat Procesare</title>
    <style>
        body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; padding: 1rem; }
        .success { background-color: #d4edda; color: #155724; padding: 15px; border: 1px solid #c3e6cb; }
        .error-box { background-color: #f8d7da; color: #721c24; padding: 15px; border: 1px solid #f5c6cb; }
        .back-btn { display: inline-block; margin-top: 20px; text-decoration: none; color: #007bff; }
    </style>
</head>
<body>

    <?php if (empty($errors)): ?>
        <div class="success">
            <h3>Mulțumim, <?php echo $nume; ?>!</h3>
            <p>Am recepționat mesajul tău:</p>
            <p><em>"<?php echo $mesaj; ?>"</em></p>
        </div>
    
    <?php else: ?>
        <div class="error-box">
            <h3>Au apărut erori la trimitere:</h3>
            <ul>
                <?php foreach ($errors as $field => $error): ?>
                    <li><strong><?php echo ucfirst($field); ?>:</strong> <?php echo $error; ?></li>
                <?php endforeach; ?>
            </ul>
            <p>Te rugăm să te întorci și să corectezi.</p>
        </div>
        
        <a href="javascript:history.back()" class="back-btn">&larr; Înapoi la formular</a>
    <?php endif; ?>

</body>
</html>