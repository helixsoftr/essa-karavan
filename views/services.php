<?php $pageTitle = 'Anasayfa'; ?>
<?php include 'layout/header.php'; ?>

<main class="min-h-screen">
    <section class="relative z-0 h-[60svh] lg:h-auto max-w-[1920px] mx-auto w-full">
        <div class="relative w-full h-full lg:py-[30px]">
            <img class="lg:absolute lg:z-[-1] lg:top-0 lg:left-0 w-full h-full object-cover object-center" src="../assets/image/banner-bg.png" alt="banner">
            <div data-navbarSpaceFix="padding" class="lg:w-full absolute lg:static top-0 left-0 w-full h-full flex lg:flex-col items-center justify-between px-[180px] lg:px-[30px]">
                <div class="flex flex-col gap-[30px]">
                    <h1 class="text-white font-medium text-6xl lg:text-3xl lg:text-center">Hizmetlerimiz</h1>
                    <ul class="flex gap-[10px] text-lg tracking-[4.5] text-white/50 [&>li>a:hover]:text-white [&>li>a]:duration-450 [&>li:last-of-type] [&>li:last-of-type]:after:hidden [&>li]:flex [&>li]:after:ml-[10px] [&>li]:after:block [&>li]:after:content-['/']">
                        <li>
                            <a href="#">
                                Anasayfa
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Hizmetlerimiz
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="relative z-0 w-screen overflow-hidden min-lg:pt-[50px]">
        <div class="lg:hidden w-full h-full absolute top-0 left-0 pointer-events-none z-[-1]">
            <img class="w-full h-full object-cover object-center" src="../assets/image/static/vektor-current-works.png" alt="">
        </div>
        <div class="flex flex-col items-center gap-[50px] py-[100px] px-[180px] xl:xp-[100px] lg:px-[30px] lg:gap-[20px] lg:pb-0 lg:pt-[50px]">
            <h1 class="text-[54px] font-serif text-primary lg:text-[36px]">Essa Karavan</h1>
            <h3 class="text-[40px] font-serif lg:text-[20px] text-center">Doğaya Uzanan Yolculuklarınızın En Güvenli
                Durağı</h3>
            <p class="text-2xl text-center lg:text-[16px]">
                Essa Karavan, macera dolu yolculuklarınız için mükemmel bir ortak. İmalat, satış,
                kiralama ve yedek parça satışı alanlarında uzmanlaşmış olan firmamız, karavan tutkunlarının hayallerini
                gerçeğe dönüştürüyor. Her adımda kaliteye ve güvenliğe odaklanarak, Essa Karavan, sizin rüyalarınızı ve
                doğaya uzanan özgür ruhunuzu desteklemek için burada.
            </p>
        </div>
    </section>

    <section class="px-[200px] 2xl:px-[150px] xl:px-[100px] lg:px-[30px] pb-[180px] lg:py-[50px]">
        <div class="pt-[80px] flex gap-[28px] h-[600px]
            lg:flex-col lg:h-full lg:pt-[30px] lg:gap-[20px]">

            <div data-hover-control class="active min-lg:basis-1/6 h-full w-full rounded-[21px] 
                min-lg:[&.active]:basis-4/6 
                before:absolute before:bottom-0 before:left-0 min-lg:before:w-full min-lg:before:h-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.65)_0%,#FFF_44.28%)] before:opacity-90 before:z-[10]
                [&.active]:before:h-0 before:duration-700
                 relative overflow-hidden cursor-pointer
                 lg:h-[330px]
                 duration-700 group">
                <!-- content -->
                <div class="pb-[50px] px-[50px] w-full h-full flex items-end relative z-10
                        min-lg:translate-y-[200%] min-lg:opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 group-[&.active]:delay-200 
                        lg:px-[30px] lg:py-[30px] lg:items-center lg:justify-center
                        duration-750">
                    <div class="flex flex-col gap-[20px] [&_:is(h1,h2,h3,h4,h5,h6,p)]:text-white [&_:is(h1,h2,h3,h4)]:font-bold [&_:is(h1,h2,h3,h4,h5)]:text-[48px]
                           [&_:is(h6,p)]:text-[20px] [&_:is(h6,p)]:leading-[30px]
                           lg:[&_:is(h1,h2,h3,h4,h5)]:text-[26px]  lg:[&_:is(h1,h2,h3,h4,h5)]:pb-[20px] lg:[&_:is(h6,p)]:text-[18px] lg:[&_:is(h6,p)]:text-white/80">
                        <h3>Karavan İmalatı</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, saepe mollitia. Nobis,
                            quasi. Sunt nemo illum maiores libero asperiores quos.
                        </p>
                        <button data-only=".filter|.filtered" data-toggle data-target="#popupForm|#offerFormManufactor|[data-target='#offerFormManufactor']" class="w-[135px] h-[64px] lg:w-auto lg:h-auto lg:p-[10px_20px] lg:mt-auto rounded-[12px] bg-primary  flex items-center justify-center relative duration-450 before:absolute before:w-0 before:h-0 before:bg-primary/80 before:rounded-[12px] before:z-[-1] before:duration-450 hover:before:w-[110%] hover:before:h-[120%]">
                            <p class="text-[20px] text-white lg:text-primary font-normal">Teklif Al</p>
                        </button>
                    </div>
                </div>
                <div class="lg:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[11] group-[&.active]:opacity-0 duration-450">
                    <p class="[writing-mode:vertical-lr] rotate-180 text-[42px] text-[#86888A] font-medium">Karavan
                        İmalatı</p>
                </div>
                <!-- bg img -->
                <div class="absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full min-lg:before:bg-[linear-gradient(0deg,rgba(0,0,0,0.79)_0%,rgba(0,0,0,0.00)_87.89%)] lg:before:bg-black/60 before:pointer-events-none z-0">
                    <img class="w-full h-full object-cover" src="../assets/image/trademark/hero-slider-2.jpg" alt="">
                </div>
            </div>

            <div data-hover-control class="min-lg:basis-1/6 h-full w-full rounded-[21px] 
                min-lg:[&.active]:basis-4/6 
                before:absolute before:bottom-0 before:left-0 min-lg:before:w-full min-lg:before:h-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.65)_0%,#FFF_44.28%)] before:opacity-90 before:z-[10]
                [&.active]:before:h-0 before:duration-700
                 relative overflow-hidden cursor-pointer
                 lg:h-[330px]
                 duration-700 group">
                <!-- content -->
                <div class="pb-[50px] px-[50px] w-full h-full flex items-end relative z-10
                        min-lg:translate-y-[200%] min-lg:opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 group-[&.active]:delay-200 
                        lg:px-[30px] lg:py-[30px] lg:items-center lg:justify-center
                        duration-750">
                    <div class="flex flex-col gap-[20px] [&_:is(h1,h2,h3,h4,h5,h6,p)]:text-white [&_:is(h1,h2,h3,h4)]:font-bold [&_:is(h1,h2,h3,h4,h5)]:text-[48px]
                           [&_:is(h6,p)]:text-[20px] [&_:is(h6,p)]:leading-[30px]
                           lg:[&_:is(h1,h2,h3,h4,h5)]:text-[26px]  lg:[&_:is(h1,h2,h3,h4,h5)]:pb-[20px] lg:[&_:is(h6,p)]:text-[18px] lg:[&_:is(h6,p)]:text-white/80">
                        <h3>Karavan Kiralama</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, saepe mollitia. Nobis,
                            quasi. Sunt nemo illum maiores libero asperiores quos.
                        </p>
                        <button data-only=".filter|.filtered" data-toggle data-target="#popupForm|#offerFormRent|[data-target='#offerFormRent']" class="w-[135px] h-[64px] lg:w-auto lg:h-auto lg:p-[10px_20px] lg:mt-auto rounded-[12px] bg-primary  flex items-center justify-center relative duration-450 before:absolute before:w-0 before:h-0 before:bg-primary/80 before:rounded-[12px] before:z-[-1] before:duration-450 hover:before:w-[110%] hover:before:h-[120%]">
                            <p class="text-[20px] text-white lg:text-primary font-normal">Teklif Al</p>
                        </button>
                    </div>
                </div>
                <div class="lg:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[11] group-[&.active]:opacity-0 duration-450">
                    <p class="[writing-mode:vertical-lr] rotate-180 text-[42px] text-[#86888A] font-medium">Karavan
                        Kiralama</p>
                </div>
                <!-- bg img -->
                <div class="absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full min-lg:before:bg-[linear-gradient(0deg,rgba(0,0,0,0.79)_0%,rgba(0,0,0,0.00)_87.89%)] lg:before:bg-black/60 before:pointer-events-none z-0">
                    <img class="w-full h-full object-cover" src="../assets/image/trademark/hero-slider-3.jpg" alt="">
                </div>
            </div>

            <div data-hover-control class="min-lg:basis-1/6 h-full w-full rounded-[21px] 
                min-lg:[&.active]:basis-4/6 
                before:absolute before:bottom-0 before:left-0 min-lg:before:w-full min-lg:before:h-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.65)_0%,#FFF_44.28%)] before:opacity-90 before:z-[10]
                [&.active]:before:h-0 before:duration-700
                 relative overflow-hidden cursor-pointer
                 lg:h-[330px]
                 duration-700 group">
                <!-- content -->
                <div class="pb-[50px] px-[50px] w-full h-full flex items-end relative z-10
                        min-lg:translate-y-[200%] min-lg:opacity-0 group-[&.active]:translate-y-0 group-[&.active]:opacity-100 group-[&.active]:delay-200 
                        lg:px-[30px] lg:py-[30px] lg:items-center lg:justify-center
                        duration-750">
                    <div class="flex flex-col gap-[20px] [&_:is(h1,h2,h3,h4,h5,h6,p)]:text-white [&_:is(h1,h2,h3,h4)]:font-bold [&_:is(h1,h2,h3,h4,h5)]:text-[48px]
                           [&_:is(h6,p)]:text-[20px] [&_:is(h6,p)]:leading-[30px]
                           lg:[&_:is(h1,h2,h3,h4,h5)]:text-[26px]  lg:[&_:is(h1,h2,h3,h4,h5)]:pb-[20px] lg:[&_:is(h6,p)]:text-[18px] lg:[&_:is(h6,p)]:text-white/80">
                        <h3>Karavan Satışı</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, saepe mollitia. Nobis,
                            quasi. Sunt nemo illum maiores libero asperiores quos.
                        </p>
                        <button data-only=".filter|.filtered" data-toggle data-target="#popupForm|#offerFormSell|[data-target='#offerFormSell']" class="w-[135px] h-[64px] lg:w-auto lg:h-auto lg:p-[10px_20px] lg:mt-auto rounded-[12px] bg-primary  flex items-center justify-center relative duration-450 before:absolute before:w-0 before:h-0 before:bg-primary/80 before:rounded-[12px] before:z-[-1] before:duration-450 hover:before:w-[110%] hover:before:h-[120%]">
                            <p class="text-[20px] text-white lg:text-primary font-normal">Teklif Al</p>
                        </button>
                    </div>
                </div>
                <div class="lg:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[11] group-[&.active]:opacity-0 duration-450">
                    <p class="[writing-mode:vertical-lr] rotate-180 text-[42px] text-[#86888A] font-medium">karavan
                        Satışı
                    </p>
                </div>
                <!-- bg img -->
                <div class="absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full min-lg:before:bg-[linear-gradient(0deg,rgba(0,0,0,0.79)_0%,rgba(0,0,0,0.00)_87.89%)] lg:before:bg-black/60 before:pointer-events-none z-0">
                    <img class="w-full h-full object-cover" src="../assets/image/trademark/hero-slider-3.jpg" alt="">
                </div>
            </div>

        </div>
    </section>
</main>

<?php include 'layout/footer.php'; ?>