<?php
require 'subscription.php';

$subscriptions = allSubscriptions();
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
   
    <title>WebStudio</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="styles/footer.css">

</head>

<body>

    <main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <span class="navbar-brand">Admin</span>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav px-3 ml-auto">
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="index.html">Вийти</a>
                    </li>
                </ul>
            </div>
        </nav>

        <main role="main" class="container pt-3" class="pt-3">
            <h1>Мої підписники</h1>
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ім'я</th>
                        <th>Номер телефону</th>
                        <th>Коментар</th>

                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($subscriptions as $index => $subscription): ?>
                        <tr>
                            <td>
                                <?= $index + 1 ?>
                            </td>
                            <td>
                                <?= $subscription['name'] ?>
                            </td>
                            <td>
                                <?= $subscription['num'] ?>
                            </td>
                            <td>
                                <?= $subscription['comment'] ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </main>
        
        <script src="https://kit.fontawesome.com/5e376815bd.js" crossorigin="anonymous"></script>

</body>

</html>