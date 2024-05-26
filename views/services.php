<?php $pageTitle = 'Anasayfa'; ?>
<?php include 'layout/header.php'; ?>

<main class="min-h-screen">
    <section class="relative z-0 w-screen h-[60svh] lg:h-auto">
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
    <section class="relative z-0 w-screen overflow-hidden py-[50px] pb-[100px]">
        <div class="lg:hidden w-full h-full absolute z-[-1] top-0 left-0 pointer-events-none z-[-1]">
            <img class="w-full h-full object-cover object-center" src="../assets/image/static/vektor-current-works.png" alt="">
        </div>
        <div class="flex flex-col items-center gap-[50px] py-[100px] px-[180px]">
            <h1 class="mb-[50px] text-[54px] font-serif text-primary">Essa Karavan</h1>
            <h3 class="text-[40px] font-serif">Doğaya Uzanan Yolculuklarınızın En Güvenli Durağı</h3>
            <p class="text-2xl">Essa Karavan, macera dolu yolculuklarınız için mükemmel bir ortak. İmalat, satış, kiralama ve yedek parça satışı alanlarında uzmanlaşmış olan firmamız, karavan tutkunlarının hayallerini gerçeğe dönüştürüyor. Her adımda kaliteye ve güvenliğe odaklanarak, Essa Karavan, sizin rüyalarınızı ve doğaya uzanan özgür ruhunuzu desteklemek için burada.</p>
        </div>
    </section>
    <?php
    $services = [
        [
            'id' => 'build',
            'name' => 'İmalat',
            'title' => 'Karavan İmalat Hizmeti',
            'desc' => 'Essa Karavan olarak, imalat hizmetimizde öncelikli olarak kaliteye ve estetiğe odaklanıyoruz. Her bir karavanımız, titizlikle seçilmiş malzemeler ve ustaca işçilikle tasarlanarak, müşterilerimize konforlu ve güvenli bir yolculuk deneyimi sunmak için özenle hazırlanıyor.',
            'button' => 'Şimdi Sipariş Et',
            'images' => [
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
            ]
        ],
        [
            'id' => 'renting',
            'name' => 'Kiralama',
            'title' => 'Karavan Kiralama Hizmeti',
            'desc' => 'Essa Karavan olarak, imalat hizmetimizde öncelikli olarak kaliteye ve estetiğe odaklanıyoruz. Her bir karavanımız, titizlikle seçilmiş malzemeler ve ustaca işçilikle tasarlanarak, müşterilerimize konforlu ve güvenli bir yolculuk deneyimi sunmak için özenle hazırlanıyor.',
            'button' => 'Şimdi Kirala',
            'images' => [
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
            ]
        ],
        [
            'id' => 'repair',
            'name' => 'Tadilat',
            'title' => 'Karavan Tadilat Hizmeti',
            'desc' => 'Essa Karavan olarak, imalat hizmetimizde öncelikli olarak kaliteye ve estetiğe odaklanıyoruz. Her bir karavanımız, titizlikle seçilmiş malzemeler ve ustaca işçilikle tasarlanarak, müşterilerimize konforlu ve güvenli bir yolculuk deneyimi sunmak için özenle hazırlanıyor.',
            'button' => 'Şimdi Randevu Al',
            'images' => [
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
                '../assets/image/trademark/hero-slider.png',
            ]
        ],
    ]
    ?>
    <section class="relative w-screen overflow-hidden">
        <div class="grid grid-cols-[780px,140px,1fr]">
            <?php foreach ($services as $each) : ?>
                <div class="<?= $each['id'] ?> !absolute !opacity-0 !pointer-events-none [&.active]:!relative [&.active]:!opacity-100 [&.active]:!pointer-events-auto swiper swiperServicesMain w-full h-full">
                    <div class="swiper-wrapper">
                        <?php foreach ($each['images'] as $image) : ?>
                            <div class="swiper-slide">
                                <img class="w-full" src="<?= $image ?>" alt="">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
            <div class="w-full h-[calc(100%-150px)] bg-red-400 flex flex-col items-center justify-end gap-[30px] p-[50px]">
                <button class="swiper-button-left rotate-180">
                    <svg width="59" height="17" viewBox="0 0 59 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.027832 8.42695H57.0477M57.0477 8.42695L49.4578 1M57.0477 8.42695L49.4578 15.8539" stroke="white" stroke-width="2.5" />
                    </svg>
                </button>
                <button class="swiper-button-right">
                    <svg width="59" height="17" viewBox="0 0 59 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.027832 8.42695H57.0477M57.0477 8.42695L49.4578 1M57.0477 8.42695L49.4578 15.8539" stroke="white" stroke-width="2.5" />
                    </svg>
                </button>
            </div>
            <div class="relative w-full flex flex-col gap-[50px] overflow-hidden before:absolute before:z-[-1] before:top-0 before:left-0 before:w-full before:h-[calc(100%-150px)] before:bg-red-400">
                <div class="flex justify-between">
                    <h1>Hizmetlerimiz</h1>
                    <?php foreach ($services as $key => $each) : ?>
                        <button <?= ($key == 0 ? 'data-default' : '') ?> data-toggle data-target=".<?= $each['id'] ?>"><?= $each['name'] ?></button>
                    <?php endforeach; ?>
                </div>
                <?php foreach ($services as $each) : ?>
                    <div <?= $each['id'] ?> class="!absolute !opacity-0 !pointer-events-none [&.active]:!relative [&.active]:!opacity-100 [&.active]:!pointer-events-auto flex flex-col">
                        <h2>
                            <?= $each['title'] ?>
                        </h2>
                        <p>
                            <?= $each['desc'] ?>
                        </p>
                        <a class="relative z-[1] before:absolute before:z-[-1] before:top-[-15px] before:left-[-15px] before:w-[30px] before:h-[30px] before:bg-[#172432] before:rounded-lg after:absolute after:z-[-1] after:bottom-[-15px] after:right-[-15px] after:w-[30px] after:h-[30px] after:bg-[#767E86] after:rounded-lg" href="#">
                            <div class="flex items-center gap-[10px] p-[10px_20px] rounded-xl bg-primary">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_36_172)">
                                        <path d="M0.708252 4.25008V15.5834L5.66659 12.7501L11.3333 15.5834L16.2916 12.7501V1.41675L11.3333 4.25008L5.66659 1.41675L0.708252 4.25008Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.66675 1.41675V12.7501" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.3333 4.25V15.5833" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_36_172">
                                            <rect width="17" height="17" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>
                                    <?= $each['button'] ?>
                                </span>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
                <?php foreach ($services as $each) : ?>
                    <div <?= $each['id'] ?> class="!absolute !opacity-0 !pointer-events-none [&.active]:!relative [&.active]:!opacity-100 [&.active]:!pointer-events-auto swiper swiperServicesSide w-full">
                        <div class="swiper-wrapper">
                            <?php foreach ($each['images'] as $image) : ?>
                                <div class="swiper-slide">
                                    <img class="w-full" src="<?= $image ?>" alt="">
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php include 'layout/footer.php'; ?>

<script>
    let swiperMain = document.querySelectorAll('.swiperServicesMain')
    let side = document.querySelectorAll('.swiperServicesSide')

    swiperMain.forEach((sm, i) => {
        let swiperServicesMain = new Swiper(sm, {
            modules: [A, P, N, Px, EC, T],
            slidesPerView: 1,
            speed: 1000,
            spaceBetween: 10,
            parallax: true,
            allowTouchMove: false,
            navigation: {
                nextEl: ".swiper-button-right",
                prevEl: ".swiper-button-left",
            },
        })

        let swiperServicesSide = new Swiper('.swiperServicesSide', {
            modules: [A, P, N, Px, EC, T],
            slidesPerView: 2.4,
            speed: 1000,
            spaceBetween: 10,
            parallax: true,
            allowTouchMove: false,
        })

        swiperServicesMain.on('slideChange', () => {
            swiperServicesSide.slideTo(swiperServicesMain.realIndex)
        })

        console.log(side[i]);
    });
</script>