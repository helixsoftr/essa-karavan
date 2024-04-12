<?php
$nameofProject = 'Essa Karavan';
include 'head.php';
?>

<?php
include 'data.php';
?>

<header class="h-[150px] px-[182px] fixed top-0 left-0 w-full bg-[#041722]/5 [&.is-hidden]:-translate-y-full [&.is-static]:!-translate-y-0 duration-450 z-[1000] flex items-center justify-center
                border border-solid border-transparent border-b-[#041722]/20">
    <div class="w-full flex items-center justify-between">
        <a href="index.php">
            <img src="../assets/image/trademark/logo-essa.png" alt="">
        </a>
        <ul
            class="flex items-center gap-[50px] [&_:is(a)]:text-[20px] [&_:is(a)]:text-white [&_:is(a)]:font-medium [&_:is(a)]:tracking-widest">
            <li><a href="index.php">Anasayfa</a></li>
            <li><a href="page-services.php">Hizmetlerimiz</a></li>
            <li><a href="page-contact.php">İletişim</a></li>
        </ul>
        <a href=""
            class="w-[135px] h-[64px] rounded-[12px] bg-primary flex items-center justify-center relative duration-450
        before:absolute before:w-0 before:h-0 before:bg-primary/80 before:rounded-[12px] before:z-[-1] before:duration-450 hover:before:w-[110%] hover:before:h-[120%]">
            <p class="text-[20px] text-white font-normal">Teklif Al</p>
        </a>
    </div>
</header>