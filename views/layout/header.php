<?php
$nameofProject = 'Essa Karavan';
include 'head.php';
?>

<?php
include 'data.php';
?>

<header class="h-[150px] px-[182px] fixed top-0 left-0 w-full bg-white/95 shadow-2xl [&.is-hidden]:-translate-y-full [&.is-static]:!bg-[#041722]/5 duration-450 z-[1000] flex items-center justify-center
                border border-solid border-transparent border-b-[#041722]/20 group/header">
    <div class="w-full flex items-center justify-between">
        <a href="index.php">
            <img src="../assets/image/trademark/logo-essa.png" alt="">
        </a>
        <ul data-follow="parent"
            class="flex items-center gap-[50px] [&_:is(a)]:text-[20px] group-[&.is-static]/header:[&_:is(a)]:text-white  [&_:is(a)]:font-medium [&_:is(a)]:tracking-widest">
            <li data-follow="childs"><a href="index.php">Anasayfa</a></li>
            <li data-follow="childs"><a href="page-services.php">Hizmetlerimiz</a></li>
            <li data-follow="childs"><a href="page-contact.php">İletişim</a></li>
            <span data-follow="object"
                class="opacity-100 absolute bottom-0 left-0 block w-0 h-[4px] duration-1000 bg-primary pointer-events-none"></span>
        </ul>
        <a href=""
            class="w-[135px] h-[64px] rounded-[12px] bg-primary flex items-center justify-center relative duration-450
        before:absolute before:w-0 before:h-0 before:bg-primary/80 before:rounded-[12px] before:z-[-1] before:duration-450 hover:before:w-[110%] hover:before:h-[120%]">
            <p class="text-[20px] text-white font-normal">Teklif Al</p>
        </a>
    </div>
</header>