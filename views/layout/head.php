<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Açıklama alanı">

    <link rel="apple-touch-icon" sizes="180x180" href="../assets/image/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/image/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/image/favicon/favicon-16x16.png">
    <link rel="manifest" href="../assets/image/favicon/site.webmanifest">
    <link rel="mask-icon" href="../assets/image/favicon/safari-pinned-tab.svg" color="#ff7757">
    <meta name="msapplication-TileColor" content="#ff7757">
    <meta name="theme-color" content="#ff7757">

    <title>
        <?php if (!empty($pageTitle))
            echo $pageTitle . ' - '; ?>
        <?= $nameofProject; ?>
    </title>
    <link rel="shortcut icon" href="../assets/image/trademark/logo-essa.png" type="image/x-icon">
    <!-- Önbellek tutmasın diye ekledim; '?id<?= rand(); ?>' yazısını silersin -->
    <link rel="stylesheet" href="../assets/css/style.css?id<?= rand(); ?>">
    <link rel="stylesheet" href="../assets/css/tailwind.css?id<?= rand(); ?>">
</head>

<body class="min-h-screen">
    <div id="preloader"
        class="hidden loading [&:not(.loading)]:pointer-events-none [&.loading]:translate-y-0 -translate-y-full fixed z-[9999] w-full h-full items-center justify-center bg-primary-900/90 backdrop-blur-lg duration-800 ease-courier">
        <div class="relative w-[265px] lg:w-[150px] aspect-[265/65]">
            <img class="absolute top-0 left-0 w-full h-full" src="../assets/image/trademark/logo-without-icon.svg"
                alt="">
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="100%" height="100%" viewBox="0 0 1155 1155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="animate-dash opacity-50"
                    d="M885.389 389.302C704.221 745.861 387.207 1022.18 2.78906 1150.69V870.791C284.612 754.17 515.586 538.976 652.731 268.467L654.572 264.836H650.501H2.78906V2.78955H1152.23V1152.23H890.117V390.435L885.389 389.302Z"
                    stroke="white" stroke-width="5" />
                <path class="blur-xl animate-dash"
                    d="M885.389 389.302C704.221 745.861 387.207 1022.18 2.78906 1150.69V870.791C284.612 754.17 515.586 538.976 652.731 268.467L654.572 264.836H650.501H2.78906V2.78955H1152.23V1152.23H890.117V390.435L885.389 389.302Z"
                    stroke="white" stroke-width="5" />
            </svg>
        </div>
    </div>