<?php
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'admin';

function login($login, $password)
{
    if ($login === ADMIN_LOGIN && $password === ADMIN_PASSWORD) {
        $_SESSION['authorized'] = true;
        return true;
    }
    return false;
}

function isAuthorized()
{
    return isset($_SESSION['authorized']) && $_SESSION['authorized'] === true;
}

function logout()
{
    unset($_SESSION['authorized']);
}

if (isset($_POST['login']) && isset($_POST['password'])) {
    login($_POST['login'], $_POST['password']);
}

if (isAuthorized()) {
    header("Location: admin.php");
    exit;
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <title>Auth</title>
    <link href="https://getbootstrap.com/docs/4.4/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>WebStudio</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <link rel="stylesheet" href="FGames.css" />
    <link rel="stylesheet" href="Cards.css" />
    <link rel="stylesheet" href="slidergpt.css" />

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="styles/footer.css" />
<link rel="stylesheet" href="formLog.css">
</head>
<link rel="stylesheet" href="login.css">

<body>
    <div class="header1">
        <a href="index.html">
            <div class="logo">
                <img class="logo-img" src="images/LogoTopPng.png" alt="" />
            </div>
        </a>

        <div class="phone">
            <div class="phone-holder">
                <a class="num Phone" href="*"><i class="fa-solid fa-phone fa-xl"></i>+380556548790</a>

                <div class="profile-holder">
                    <a href="login.php">
                        <i class="fa-solid fa-user fa-xl"></i>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
    <main>



        </section>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        





        <section class="sub_block new_dex">
            <form class="LoginF" method="POST">
                <div class="form-group">
                    <label for="exampleInputEmail1">Логін</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="login">
                    <small id="emailHelp" class="form-text text-muted">Ми ніколи не передаємо ваш логін
                        кому-небудь.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Пароль</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password">
                </div>
                <div class="form-group form-check">
                    
                </div>
                <button type="submit" class="btn btn-primary">Відправити</button>
            </form>

        </section>
    </main>
    <?php
    if (isAuthorized()) {
        header("Location: admin.php");
        exit;
    }
    ?>
 
    <script src="https://kit.fontawesome.com/5e376815bd.js" crossorigin="anonymous"></script>
</body>

</html>