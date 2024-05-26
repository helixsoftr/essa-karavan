<?php $pageTitle = 'Anasayfa'; ?>
<?php include 'layout/header.php'; ?>

<main class="min-h-screen">
    <section class="relative z-0 w-screen h-[60svh] lg:h-auto">
        <div class="relative w-full h-full lg:py-[30px]">
            <img class="lg:absolute lg:z-[-1] lg:top-0 lg:left-0 w-full h-full object-cover object-center" src="../assets/image/banner-bg.png" alt="banner">
            <div data-navbarSpaceFix="padding" class="lg:w-full absolute lg:static top-0 left-0 w-full h-full flex lg:flex-col items-center justify-between px-[180px] lg:px-[30px]">
                <div class="flex flex-col gap-[30px]">
                    <h1 class="text-white font-medium text-6xl lg:text-3xl lg:text-center">İletişim</h1>
                    <ul class="flex gap-[10px] text-lg tracking-[4.5] text-white/50 [&>li>a:hover]:text-white [&>li>a]:duration-450 [&>li:last-of-type] [&>li:last-of-type]:after:hidden [&>li]:flex [&>li]:after:ml-[10px] [&>li]:after:block [&>li]:after:content-['/']">
                        <li>
                            <a href="#">
                                Anasayfa
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                İletişim
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col lg:w-full">
                    <div class="text-xl font-semibold flex lg:flex-col lg:gap-[30px] lg:items-center lg:text-center justify-between items-end gap-[100px] py-[30px] border-solid border-0 border-b border-white text-white">
                        <div class="flex flex-col gap-[10px]">
                            <span class="uppercase">telefon:</span>
                            <a href="#">
                                ( +90 ) 216 755 80 76
                            </a>
                        </div>
                        <div class="flex flex-col gap-[10px]">
                            <span class="uppercase">telefon:</span>
                            <a href="#">
                                ( +90 ) 216 755 80 76
                            </a>
                        </div>
                    </div>
                    <div class="lg:w-full text-xl font-semibold flex lg:flex-col lg:text-center lg:items-center lg:gap-[50px] justify-between items-end gap-[100px] py-[30px] text-white">
                        <div class="flex flex-col gap-[10px]">
                            <span class="uppercase">adres:</span>
                            <a href="#">
                                Kartal Köprüsüne yakın <br> <strong>Kartal/İstanbul</strong>
                            </a>
                        </div>
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
                                <span>Yol Tarifi Al</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative z-0 w-screen overflow-hidden">
        <div class="lg:hidden w-full h-full absolute z-[-1] top-0 left-0 pointer-events-none z-[-1]">
            <img class="w-full h-full object-cover" src="../assets/image/static/vektor-current-works.png" alt="">
        </div>
        <div class="relative z-[1] flex lg:flex-col items-center justify-center w-full h-full p-[160px_180px] 2xl:p-[80px] lg:p-[50px_0]">
            <div class="flex flex-col gap-[50px] shadow-[0_25px_60px] shadow-black/20 rounded-3xl p-[50px] lg:p-[30px] bg-white">
                <div class="flex flex-col gap-[20px]">
                    <h1 class="text-5xl lg:text-2xl text-[#334033] font-semibold">Bize Ulaşın</h1>
                    <p class="text-lg lg:text-base font-light leading-[30px]">Essa Karavan’a gösterdiğiniz ilgi için teşekkür ederiz. Gereksinimlerinizi daha iyi anlamak ve size en alakalı bilgileri sunmak için lütfen aşağıdaki formu doldurun. Ekibimiz talebinizi inceleyip size en kısa sürede geri dönüş yapacaktır.</p>
                </div>
                <form action="#" class="grid grid-cols-2 lg:flex lg:flex-col gap-[50px]">
                    <div class="flex flex-col gap-[7px]">
                        <label for="name">Adınız</label>
                        <input class="border-solid border-0 border-b border-black/30 focus:border-black duration-450" type="text" name="name" id="name">
                    </div>
                    <div class="flex flex-col gap-[7px]">
                        <label for="surname">Soy Adınız</label>
                        <input class="border-solid border-0 border-b border-black/30 focus:border-black duration-450" type="text" name="surmame" id="surmame">
                    </div>
                    <div class="flex flex-col gap-[7px]">
                        <label for="email">E-Posta</label>
                        <input class="border-solid border-0 border-b border-black/30 focus:border-black duration-450" type="text" name="email" id="email">
                    </div>
                    <div class="flex flex-col gap-[7px]">
                        <label for="phone">Telefon</label>
                        <input class="border-solid border-0 border-b border-black/30 focus:border-black duration-450" type="text" name="phone" id="phone">
                    </div>
                    <div class="col-span-2 flex flex-col gap-[7px]">
                        <label for="message">Mesajınız</label>
                        <textarea class="border-solid border-0 border-b border-black/30 focus:border-black duration-450" type="text" name="message" id="message"></textarea>
                    </div>
                    <div class="col-span-2 flex items-center gap-[20px]">
                        <input type="checkbox" class="lg:grow relative min-lg:min-w-[30px] lg:!min-w-[20px] h-[30px] lg:!h-[20px] lg:aspect-square rounded-full border-[1px] border-solid border-black/16 checked:border-black hover:border-black before:absolute before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%] before:w-0 before:rounded-full before:duration-450 before:h-0 before:bg-primary checked:before:w-[10px] checked:before:h-[10px] cursor-pointer duration-450">
                        <a href="" class="lg:text-sm"> <span class="underline">Şartlar ve Koşulları</span> okuyup kabul ettiğimi onaylayabilirim. </a>
                    </div>
                    <div class="col-span-2 flex items-center gap-[20px]">
                        <input type="checkbox" class="lg:grow relative min-lg:min-w-[30px] lg:!min-w-[20px] h-[30px] lg:!h-[20px] lg:aspect-square rounded-full border-[1px] border-solid border-black/16 checked:border-black hover:border-black before:absolute before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%] before:w-0 before:rounded-full before:duration-450 before:h-0 before:bg-primary checked:before:w-[10px] checked:before:h-[10px] cursor-pointer duration-450">
                        <a href="" class="lg:text-sm">Kişisel verilerimin işlenmesine ilişkin aydınlatma metni uyarınca iletişim bilgilerimin ticari elektronik ileti gönderilmesi ve pazarlama amaçlı olarak benimle iletişime geçilmesi kapsamında kullanılmasına: Onay veriyorum (İletişim türü seçimi: Çağrı, SMS veya E-posta). -posta)</a>
                    </div>
                    <button type="submit" class="group w-max p-[15px_25px] flex items-center justify-center gap-[10px] rounded-lg bg-dark">
                        <span class="font-medium text-white">Gönder</span>
                        <svg class="group-hover:translate-x-1 duration-450" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9732 5.85394L8.30656 10.5206C8.20923 10.6179 8.08121 10.6673 7.95321 10.6673C7.82521 10.6673 7.69719 10.6186 7.59985 10.5206C7.40452 10.3253 7.40452 10.0086 7.59985 9.81325L11.4132 5.99993H0.619873C0.343873 5.99993 0.119873 5.77593 0.119873 5.49993C0.119873 5.22393 0.343873 4.99993 0.619873 4.99993H11.4126L7.5992 1.18658C7.40387 0.991246 7.40387 0.674597 7.5992 0.479264C7.79454 0.28393 8.11123 0.28393 8.30656 0.479264L12.9732 5.14593C13.1686 5.3426 13.1686 5.65861 12.9732 5.85394Z" fill="white" />
                        </svg>
                    </button>
                </form>
            </div>
            <div class="w-full h-[700px] rounded-r-3xl overflow-hidden">
                <div id="map" class="w-full h-full">

                </div>
            </div>
        </div>
    </section>
</main>

<script>

</script>
<script>
    window.latLng = {
        lat: 40.90694497171551,
        lng: 29.217988604936178
    }

    window.mapZoom = 16;
    window.mapURL = 'https://maps.app.goo.gl/2J3vC7BX2A4UdqTD8'; // Link Buraya

    window.mapMarker = document.createElement('a');
    mapMarker.href = mapURL;
    mapMarker.target = '_blank';
    mapMarker.className = 'block !pointer-events-auto z-100';
    mapMarker.innerHTML = `
                            <div class="group relative hover:scale-110 duration-450 w-[60px] h-[60px] flex justify-center items-center border-solid border border-white/20 rounded-full bg-dark backdrop-blur-lg">
                                <span class="animate-grow [animation-delay:.5s] absolute top-0 left-0 w-full h-full border-solid border border-dark rounded-full">
                                </span>
                                <span class="animate-grow [animation-delay:1s] absolute top-0 left-0 w-full h-full border-solid border border-dark rounded-full">
                                </span>
                                <span class="animate-grow [animation-delay:1.5s] absolute top-0 left-0 w-full h-full border-solid border border-dark rounded-full">
                                </span>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_135_653)">
                                        <path d="M13.5 0C14.4334 0 15.1875 0.754102 15.1875 1.6875V3.51738C19.4273 4.22402 22.776 7.57266 23.4826 11.8125H25.3125C26.2459 11.8125 27 12.5666 27 13.5C27 14.4334 26.2459 15.1875 25.3125 15.1875H23.4826C22.776 19.4273 19.4273 22.776 15.1875 23.4826V25.3125C15.1875 26.2459 14.4334 27 13.5 27C12.5666 27 11.8125 26.2459 11.8125 25.3125V23.4826C7.57266 22.776 4.22402 19.4273 3.51738 15.1875H1.6875C0.754102 15.1875 0 14.4334 0 13.5C0 12.5666 0.754102 11.8125 1.6875 11.8125H3.51738C4.22402 7.57266 7.57266 4.22402 11.8125 3.51738V1.6875C11.8125 0.754102 12.5666 0 13.5 0ZM6.75 13.5C6.75 15.2902 7.46116 17.0071 8.72703 18.273C9.9929 19.5388 11.7098 20.25 13.5 20.25C15.2902 20.25 17.0071 19.5388 18.273 18.273C19.5388 17.0071 20.25 15.2902 20.25 13.5C20.25 11.7098 19.5388 9.9929 18.273 8.72703C17.0071 7.46116 15.2902 6.75 13.5 6.75C11.7098 6.75 9.9929 7.46116 8.72703 8.72703C7.46116 9.9929 6.75 11.7098 6.75 13.5ZM13.5 9.28125C14.6189 9.28125 15.6919 9.72572 16.4831 10.5169C17.2743 11.3081 17.7188 12.3811 17.7188 13.5C17.7188 14.6189 17.2743 15.6919 16.4831 16.4831C15.6919 17.2743 14.6189 17.7188 13.5 17.7188C12.3811 17.7188 11.3081 17.2743 10.5169 16.4831C9.72572 15.6919 9.28125 14.6189 9.28125 13.5C9.28125 12.3811 9.72572 11.3081 10.5169 10.5169C11.3081 9.72572 12.3811 9.28125 13.5 9.28125Z" fill="white"/>
                                    </g>
                                <defs>
                                    <clipPath id="clip0_135_653">
                                        <rect width="27" height="27" fill="white"/>
                                    </clipPath>
                                </defs>
                                </svg>
                                <span class="absolute opacity-0 group-hover:opacity-100 duration-450 top-1/2 group-hover:top-[calc(100%+10px)] translae-y-full block w-max p-[5px] rounded-lg border-solid border border-white/20 text-white bg-black"> Yol Tarifi Al </span>
                            </div>
                        `;
</script>

<?php include 'layout/footer.php'; ?>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxycU6lO2UWtUA4BZDIfXrSVyYVqQ0wRM&callback=initMap&libraries=marker&v=beta" defer=""></script>