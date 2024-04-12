<?php $pageTitle = 'Anasayfa'; ?>
<?php include 'layout/header.php'; ?>

<?php
$heroSlider = [
    [
        'img' => '../assets/image/trademark/hero-slider.png',
        'title' => 'Unutulmaz bir karavan deneyimi',
        'text' => 'The best travel for your jouney begins now',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-2.jpg',
        'title' => 'Unutulmaz bir karavan deneyimi',
        'text' => 'The best travel for your jouney begins now',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-3.jpg',
        'title' => 'Unutulmaz bir karavan deneyimi',
        'text' => 'The best travel for your jouney begins now',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-4.jpg',
        'title' => 'Unutulmaz bir karavan deneyimi',
        'text' => 'The best travel for your jouney begins now',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-5.jpg',
        'title' => 'Unutulmaz bir karavan deneyimi',
        'text' => 'The best travel for your jouney begins now',
    ],
];
?>

<?php
$currentWorks = [
    [
        'img' => '../assets/image/trademark/hero-slider-2.jpg',
        'car' => 'Wolswagen',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-3.jpg',
        'car' => 'Peugeot',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-4.jpg',
        'car' => 'Renault',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-5.jpg',
        'car' => 'Renault',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-2.jpg',
        'car' => 'Wolswagen',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-3.jpg',
        'car' => 'Peugeot',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-4.jpg',
        'car' => 'Renault',
        'service' => 'imalat',
    ],
    [
        'img' => '../assets/image/trademark/hero-slider-5.jpg',
        'car' => 'Renault',
        'service' => 'imalat',
    ],
];
?>

<?php
$services = [
    [
        'img' => '../assets/image/trademark/imalat.jpg',
        'service' => 'KARAVAN İMALATI',
        'title' => 'Kalite',
        'text' => 'Essa Karavan olarak, imalat hizmetimizde öncelikli olarak kaliteye ve estetiğe odaklanıyoruz. Her bir karavanımız, titizlikle seçilmiş malzemeler ve ustaca işçilikle tasarlanarak, müşterilerimize konforlu ve güvenli bir yolculuk deneyimi sunmak için özenle hazırlanıyor.',
    ],
    [
        'img' => '../assets/image/trademark/kiralama.jpg',
        'service' => 'KARAVAN KİRALAMA',
        'title' => 'konfor',
        'text' => 'Her bir karavanımız, titizlikle seçilmiş malzemeler ve özenle tasarlanmış iç mekanlarıyla konforunuzu sağlamak için özenle hazırlanmıştır. Müşterilerimize güvenli ve keyifli bir karavan deneyimi yaşatmak amacıyla, araçlarımız düzenli olarak bakıma alınır ve kontrol edilir.',
    ],
    [
        'img' => '../assets/image/trademark/satis.jpg',
        'service' => 'KARAVAN SATIŞI',
        'title' => 'Güvenilirlik',
        'text' => 'Essa Karavan olarak, satış hizmetimizde her bir karavanımızı özenle seçilmiş malzemeler ve estetik tasarımlarla donatıyoruz. Müşterilerimize en yüksek kalitede ve güvenli bir şekilde seyahat etme imkanı sunarken, aynı zamanda konfor ve stilin bir araya geldiği bir yolculuk deneyimi sağlıyoruz.',
    ],
];
?>

<main>
    <section class="h-svh w-ful relative">
        <div class="swiper hero-slider w-full h-full">
            <div class="swiper-wrapper">
                <?php foreach ($heroSlider as $key => $item): ?>
                    <div class="swiper-slide overflow-hidden relative group">
                        <div class="w-full h-full relative">
                            <img data-swiper-parallax-y="15%" data-swiper-parallax-scale="1.5"
                                class="object-cover w-full h-full" src="<?= $item['img'] ?>" alt="">
                            <!-- bg  -->
                            <div class="absolute left-0 top-0 w-full h-full bg-[#041722]/30"></div>
                        </div>
                        <div class="absolute top-1/4 left-[182px] z-[40] [&_:is(h1,h2,h3,h4)]:text-[84px] [&_:is(h1,h2,h3,h4,h5,h6,p)]:text-white [&_:is(h5,h6,p)]:text-[24px] [&_:is(h1,h2,h3,h4)]:max-w-[700px]
                            [&_:is(h1,h2,h3,h4,h5,h6,p)]:opacity-0 [&_:is(h1,h2,h3,h4,h5,h6,p)]:translate-y-full
                            group-[&.swiper-slide-active]:[&_:is(h1,h2,h3,h4,h5,h6,p)]:opacity-100 group-[&.swiper-slide-active]:[&_:is(h1,h2,h3,h4,h5,h6,p)]:translate-y-0
                            [&_:is(h1,h2,h3,h4)]:duration-1000 [&_:is(h1,h2,h3,h4)]:delay-500
                            [&_:is(h5,h6,p)]:duration-1000 [&_:is(h5,h6,p)]:delay-1000
                            transition-all">
                            <h2>
                                <?= $item['title'] ?>
                            </h2>
                            <p>
                                <?= $item['text'] ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <!-- pagination -->
        <div
            class="absolute z-[40] !left-auto right-[80px] !bottom-[50%] translate-y-1/2 flex flex-col items-center justify-center gap-[24px]">
            <div
                class="hero-pagination !w-[16px] h-auto flex flex-col gap-[24px] [&_.swiper-pagination-bullet]:w-[16px] [&_.swiper-pagination-bullet]:h-[16px] [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet]:duration-450 [&_.swiper-pagination-bullet]:transition-all">
            </div>
            <div class="flex flex-col items-center justify-center gap-[16px]">
                <button class="hero-prev group/prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path class="group-hover/prev:stroke-primary group-hover/prev:-translate-y-[5px] duration-450"
                            d="M15 7L8 0.999999L1 7" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="hero-next group/next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path class="group-hover/next:stroke-primary group-hover/next:translate-y-[5px] duration-450"
                            d="M1 1L8 7L15 1" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- rent form -->
        <form id="rentform" class="w-[70%] h-[200px] bg-white rounded-r-[20px] pl-[80px] shadow-2xl z-[40] flex items-center justify-between gap-[100px]
        absolute top-[65%] left-0
        [&.active]:-translate-x-full duration-450
        group/form">
            <div class="w-full flex items-center gap-[40px]">
                <!-- destination -->
                <div class="flex flex-col w-full">
                    <label for="destination" class="text-[16px] text-text font-medium">Varış noktası?</label>
                    <input id="destination"
                        class="w-ful border border-solid border-transparent border-b-black pb-[10px]" type="text">
                </div>
                <!-- person -->
                <div class="flex flex-col w-full">
                    <label for="person" class="text-[16px] text-text font-medium">Kişi</label>
                    <input id="person" class="w-ful border border-solid border-transparent border-b-black pb-[10px]"
                        type="number">
                </div>
                <!-- check in -->
                <div class="flex flex-col w-full">
                    <label for="checkin" class="text-[16px] text-text font-medium">Check in tarihi</label>
                    <input id="checkin" class="w-ful border border-solid border-transparent border-b-black pb-[10px]"
                        type="date">
                </div>
                <!-- check out -->
                <div class="flex flex-col w-full">
                    <label for="checkout" class="text-[16px] text-text font-medium">Check out tarihi</label>
                    <input id="checkout" class="w-ful border border-solid border-transparent border-b-black pb-[10px]"
                        type="date">
                </div>
            </div>
            <button type="submit"
                class="h-full w-[230px] bg-primary rounded-r-[20px] flex items-center justify-center gap-[35px]">
                <div class="text-white text-[36px]">Şimdi <br> Kirala</div>
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M27.7071 8.7071C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928931C20.9526 0.538406 20.3195 0.538407 19.9289 0.928931C19.5384 1.31946 19.5384 1.95262 19.9289 2.34314L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.7071ZM6.79955e-08 9L27 9L27 7L-6.79955e-08 7L6.79955e-08 9Z"
                        fill="white" />
                </svg>
            </button>
            <!-- close button -->
            <div data-toggle data-target="#rentform"
                class="opacity-0 [&.active]:opacity-100 group-hover/form:opacity-100 hover:opacity-100 absolute top-0 -translate-y-1/2 right-[-45px] bg-white/80 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer duration-1000 group/btn">
                <svg class="group-[&.active]/btn:rotate-180 duration-450" width="12" height="15" viewBox="0 0 22 42"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 1L1 21L21 41" stroke="#FF7757" stroke-width="8" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </form>
    </section>
    <!-- current works -->
    <section class="w-full h-full pt-[140px] pl-[182px] relative">
        <!-- title and buttons -->
        <div class="flex items-end justify-between pr-[182px] z-10">
            <div class="flex flex-col">
                <h2 class="text-[64px]">Güncel İşlerimiz</h2>
                <div class="w-[365px] h-[4px] bg-primary"></div>
                <p class="text-text text-[24px] pt-[32px]"><strong>Essa karavan</strong>’ın güncel işlerinden haberdar
                    olun</p>
            </div>
            <div class="flex items-center gap-[40px]">
                <button class="works-prev w-[60px] h-[60px] rounded-[12px] bg-dark flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                        <path d="M11 1L1 11L11 21" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class=" works-next w-[60px] h-[60px] rounded-[12px] bg-dark flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                        <path d="M1 21L11 11L0.999999 1" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- slider -->
        <div class="works-slider swiper w-full !h-[660px] mt-[100px]">
            <div class="swiper-wrapper">
                <?php foreach ($currentWorks as $key => $item): ?>
                    <div
                        class="swiper-slide w-full h-full rounded-[26px] pb-[40px] pl-[24px] flex items-end justify-start overflow-hidden relative group">
                        <!-- content  -->
                        <div class="z-10">
                            <h3 class="text-white text-[28px]"><?= $item['car'] ?></h3>
                            <div class="flex items-center gap-[16px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="24" height="24" fill="url(#pattern0_31_7)" />
                                    <defs>
                                        <pattern id="pattern0_31_7" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use xlink:href="#image0_31_7" transform="scale(0.01)" />
                                        </pattern>
                                        <image id="image0_31_7" width="100" height="100"
                                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGA0lEQVR4nO2dS2idRRSApzZCjVZFraJB8REFEXFhBZXW2pjWItQUwUpLfStUF4LiRqoVjNQXLlzV0FIkiUV3PhC1Pqi1alofm6roymIVFVqjMTappvnkNOfibZqb/vfOzP/P/Hc+uJtwM/+ZOXdmzpw55/zGJBKJRCKRSCQSiUSiJsA5QCdwP7AWeAboAV7WT4/+ba1+R757du0WE5kBjgeW6ADvAIZpHPnfAW3remk7qSKbEk4E7gI+BP7BH9L2B8Cd8syknCMVsQDYDOwnf/7W5e6aplcMME9/qaGwHVgKzGjGGfEl4fI5MN+UHeBUtYTGCZ9xoBc43ZQR3awHiY/fgdtNWQBOAPqJn17pi4kZ4FLgO8rDt8AlJkaAa4E/KR9/AYtMTADLgBHKyyiw3MQAcA8wRvkZE0PFRDAzmkEZFQ4CN5sQARbqVG42DgS3p6g1VcYNPCt/BGN9qZtczMFm53tgdggKkQNTYoLNIbhDEodTjJsFOCNS31Qevq/8HZJpqZqWTUXcZxTlQh8C3gLWAKvk3gK4XD9XAis0yEGugYtCxmZeXsqYUcDl0jCwQa5ZgZY6ZH2F4tjhVxP/d/KGHDs1qpEicxqUdTnFsti9Bo7spNw758E24EJLWbsplo/cjXztvSMPngZmWsra5TmUKCv+7uY1VMf3Zviwo2U1FL9an5vRnzqIbb9nz+m9DuTsUodfKAx7cakAd3sW/LGSzYxq7nCjhcM769Oufxs4pmQzo5r3fESO+Nog90i8VomVgc7aVpcKkSh0X9xScmVUcHeJpYczH2y3iaNlwl1SRIB2I6xzqRDJz/DBVRYyHQf8SDx85tJ3ZZMsU4udlnI9RFwMOYmql5QwTwLeZinXF8RHmwuFSJ6ea/4FTraQqdWD+18Mg8clrAd4FT90uFCIJE+6ZpulTOd7UMbSSc/YintWu1CIXPYEZXEAZ/lUhj7jCdzzqJUyVLDnQgsEAFocGRpTKkOfcSvuedam3xXB1nsQzDrBEnjdlzI8XjWst+238ZRsM9eBXIstldF1lPblfj48V7wnhVxmLZg5JNsbDSrjxoxeANf0h7pkLbQWzByS7STg6zqeOzLdMjWp7Y5Qlywfm/pKa8EUOc9knCm7gStMRsTwCHVT92H2Pmkt2NR7ymuTrK+D6od7AJhl6kAPiUGavT4Ohu9aC1YDCY4AztTKQbMs2nkn1INhp6f6Iu4ubByj5xxxBoa3d3p0LmbaXIvAY7hTW6ju95+AdhMowCZCdb+rgFL8y6UyrCISc0iz8HEL+WmIV7hBK0MAnscPT5nAghx+AS42AQNc5DGuq9OloK2WkR0xKKNFlhX8cMC5VWlR+S34ZcrzUiVsMYEkeAY/MwTgEWJLBNVgaznQZeXnSGbGas/pecPe6mxp9c6s5JNjZ+di6c4hV7LPZyckxy8Lu03AAKeJP4188PvDBD7OIMSvttHsPlCvw0o1NPJgax6dWpL3nYfD2Z1XfmSFfKoEaV3boyFVHs5z+MwL5OpVYnrrLEsr1uFX5M+Aq75n6ej8jJuh+MCOdfC8ds0jQS299yW2SwsHXFdVOGCBKkBcPZ8UWExNxuZqN6OdfZBeyijcBsuUg/YqZcTCRrejnX052JtRwO4Gn3Eu8ANxsa/RQgfW1BkI8GATzAxhlb8Rd7t0CS9kWb6Ic2YUs1Q5KPG3cbqNnnhnxq5g4gSkAKQWgszKwFQmMROmbYzKGAzOiaqlxUfq7MSKyoleX+6yh/gYCfbtPMBNDdj+v0WWvFmN9HWZCRk9mDVDdesxLyUzfKDJ/LHkjzfCaLAlxmuhbox6NvpYGAx2z8hofX1DedgVnDXVYMUFeRFY7PSW6g2h6mYRP09s7C3cHeIL4BR1n0jeRuiMl/q1edXoIXAn4TKQ+31GQIp5k8BevWqaHb2B7K8z7stl3FRf6GFLhQDMltOv1Cj0XMxS2t6ihkbcL4vMCyYCvBdJGL8U/7JMMRvSNtZpm2G4yWMHaNP88fsko1UrYPfociefF/VvazREtMNJGlkikUgkEolEIpFImPLyH1zkzYEbEQ0xAAAAAElFTkSuQmCC" />
                                    </defs>
                                </svg>
                                <p class="text-white text-[24px]"><?= $item['service'] ?></p>
                            </div>
                        </div>
                        <!-- img -->
                        <div
                            class="absolute top-0 left-0 z-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#1724324D] group-hover:before:bg-transparent before:duration-450 group-hover:scale-110 duration-450">
                            <img class="w-full h-full object-cover" src="<?= $item['img'] ?>" alt="">
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <!-- bg line-->
        <div class="w-full h-full absolute top-0 left-0 pointer-events-none z-0">
            <img class="w-full h-full object-cover" src="../assets/image/static/vektor-current-works.png" alt="">
        </div>
    </section>

    <section class="w-full h-full pt-[280px] px-[182px] relative">
        <!-- title -->
        <div class="flex items-end justify-between pr-[182px] z-10">
            <div class="flex flex-col">
                <h2 class="text-[64px]">Hizmetlerimiz</h2>
                <div class="w-[365px] h-[4px] bg-primary"></div>
                <p class="text-text text-[24px] pt-[32px]">
                    <strong>Essa karavan</strong>’ın Size Özel Hizmetlerini keşfedin
                </p>
            </div>
        </div>
        <!-- services -->
        <div class="w-full h-[640px] mt-[100px] flex items-center justify-center gap-[32px] z-10">
            <?php foreach ($services as $key => $item): ?>
                <div class="w-full h-full rounded-[26px] overflow-hidden bg-white shadow-2xl group">
                    <!-- image -->
                    <div class="w-full h-[290px] overflow-hidden relative">
                        <img class="w-full h-full object-cover group-hover:scale-110 duration-450" src="<?= $item['img'] ?>"
                            alt="">
                        <!-- text  -->
                        <div class="absolute w-[265px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]">
                            <h3 class="text-[48px] text-center font-black text-white"><?= $item['service'] ?></h3>
                        </div>
                        <!-- bg -->
                        <div class="absolute top-0 left-0 w-full h-full bg-secondary/60"></div>
                    </div>
                    <!-- description -->
                    <div class="py-[40px] px-[24px] flex flex-col gap-[24px]">
                        <h4 class="text-text text-[28px]"><?= $item['title'] ?></h4>
                        <p class="text-[16px] font-medium leading-[24px] line-clamp-5">
                            <?= $item['text'] ?>
                        </p>
                        <button class="w-[180px] h-[64px] bg-primary rounded-[12px] text-white font-bold">
                            DETAYLAR
                        </button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <!-- bg line-->
        <div class="w-full h-full absolute bottom-0 right-0 pointer-events-none z-[-1]">
            <img class="w-full h-full object-cover" src="../assets/image/static/vektor-services.png" alt="">
        </div>
    </section>

    <section class="pt-[280px] px-[182px] relative">
        <!-- title -->
        <div class="flex items-end justify-between pr-[182px] z-10">
            <div class="flex flex-col">
                <h2 class="text-[64px]">Hakkımızda</h2>
                <div class="w-[365px] h-[4px] bg-primary"></div>
                <p class="text-text text-[24px] pt-[32px]">
                    Konforlu Yolculuklar için Güvenli ve Estetik Çözümler
                </p>
            </div>
        </div>
        <!-- bg line-->
        <div class="w-full h-full absolute top-0 left-0 pointer-events-none z-0">
            <img class="w-full h-full object-cover" src="../assets/image/static/vektor-current-works.png" alt="">
        </div>
    </section>
</main>

<?php include 'layout/footer.php'; ?>