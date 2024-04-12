<script
    type="importmap">{"imports": {"three": "https://unpkg.com/three@<version>/build/three.module.js", "three/addons/": "https://unpkg.com/three@<version>/examples/jsm/"}}</script>
<script>
    <?php foreach ($indexHero as $key => $value): ?>
        <?php $prevKey = $key - 1;

        if (array_key_exists($prevKey, $indexHero)) {
            $prevValue = $indexHero[$prevKey];
        } else {
            $prevValue = $indexHero[0];
        }
        ?>

        var myAnimation<?= $key ?> = new hoverEffect({
            parent: document.querySelectorAll('.swiper-slide')[<?= $key ?>],
            intensity: 0.5,
            speedIn: 3,
            speedOut: 3,
            hover: false,
            image1: '<?= $prevValue['image'] ?>',
            image2: '<?= $value['image'] ?>',
            displacementImage: '../assets/image/testimage.jpg'
        });

        introHero.on('slideChange', () => {
            let order = introHero.realIndex;
                            myAnimation <?= $key ?>.previous();
            window['myAnimation' + order].next();
        })

    <?php endforeach; ?>
</script>

<!-- import hoverEffect from './components/destordImage'
window.hoverEffect = hoverEffect; -->