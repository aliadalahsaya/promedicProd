import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'css/animate.min.css',
                'css/bootstrap.min.css',
                'css/datepicker.css',
                'css/font-awesome.min.css',
                'css/icofont.css',
                'css/magnific-popup.css',
                'css/nice-select.css',
                'css/normalize.css',
                'css/owl-carousel.css',
                'css/responsive.css',
                'css/slicknav.min.css',
                'css/style.css',
                // 'https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap',
                
                //End Of CSS

                'js/jquery.min.js',
                'js/jquery-migrate-3.0.0.js',
                'js/jquery-ui.min.js',
                'js/colors.js',
                'js/popper.min.js',
                'js/bootstrap-datepicker.js',
                'js/jquery.nav.js',
                'js/slicknav.min.js',
                'js/jquery.scrollUp.min.js',
                'js/tilt.jquery.min.js',
                'js/owl-carousel.js',
                'js/jquery.counterup.min.js',
                'js/steller.js',
                'js/jquery.magnific-popup.min.js',
                // 'http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js',
                'js/bootstrap.min.js',
                'js/main.js',
            ],
            refresh: true,
        }),
    ],
});
