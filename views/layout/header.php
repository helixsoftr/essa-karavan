<?php
$nameofProject = 'Essa Karavan';
include 'head.php';
?>

<?php
include 'data.php';
?>

<header class="h-[150px] lg:h-auto lg:[&.is-static]:!bg-white px-[182px] lg:px-[30px] fixed top-0 left-0 w-full bg-white/95 [&.is-static]:!border-none [&.is-static]:!bg-transparent [&.is-static]:!shadow-none shadow-2xl [&.is-hidden]:-translate-y-full [&.is-static]:!bg-[#041722]/5 duration-450 z-[1000] flex items-center justify-center border border-solid border-transparent border-b-[#041722]/20 group/header">
    <div class="w-full flex items-center justify-between">
        <a href="index.php" class="lg:w-[70px] lg:relative lg:z-[10]">
            <img src="../assets/image/trademark/logo-essa.png" alt="">
        </a>
        <button data-toggle data-target="#mobileMenu" class="z-[1] absolute top-1/2 -translate-y-1/2 right-[30px] hidden lg:flex flex-col items-center justify-between w-[30px] h-[18px] [&_span]:block [&_span]:w-1/2 [&_span:nth-child(1)]:ml-auto [&_span:nth-child(1)]:origin-top [&.active_span:nth-child(1)]:-rotate-45 [&_span:nth-child(2)]:w-full [&.active_span:nth-child(2)]:w-[120%] [&.active_span:nth-child(2)]:rotate-45 [&_span:nth-child(3)]:mr-auto [&_span:nth-child(3)]:origin-bottom [&.active_span:nth-child(3)]:-rotate-45 [&_span]:h-[2px] [&_span]:bg-black [&.active_span]:bg-white [&_span]:duration-450" style="animation-delay: 1s;">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div id="mobileMenu" data-navbarSpaceFix="padding" class="min-lg:w-full min-lg:justify-between min-lg:!pt-0 flex items-center justify-center lg:items-end lg:flex-col lg:px-[30px] lg:pb-[30px] lg:fixed lg:top-0 lg:left-0 lg:translate-x-full lg:[&.active]:translate-x-0 lg:w-full lg:h-svh lg:bg-primary lg:duration-450">
            <ul data-follow="parent" class="min-lg:mx-auto flex lg:flex-col lg:items-end items-center gap-[50px] lg:gap-[20px] [&_:is(a)]:text-[20px] group-[&.is-static]/header:[&_:is(a)]:text-white  [&_:is(a)]:font-medium [&_:is(a)]:tracking-widest">
                <li data-follow="childs"><a href="index.php">Anasayfa</a></li>
                <li data-follow="childs"><a href="page-services.php">Hizmetlerimiz</a></li>
                <li data-follow="childs"><a href="page-contact.php">İletişim</a></li>
                <span data-follow="object" class="opacity-100 absolute bottom-0 left-0 block w-0 h-[4px] duration-1000 bg-primary pointer-events-none"></span>
            </ul>
            <a href="#" class="w-[135px] h-[64px] lg:w-auto lg:h-auto lg:p-[10px_20px] lg:mt-auto rounded-[12px] bg-primary lg:bg-white flex items-center justify-center relative duration-450 before:absolute before:w-0 before:h-0 before:bg-primary/80 before:rounded-[12px] before:z-[-1] before:duration-450 hover:before:w-[110%] hover:before:h-[120%]">
                <p class="text-[20px] text-white lg:text-primary font-normal">Teklif Al</p>
            </a>
        </div>
    </div>
</header>