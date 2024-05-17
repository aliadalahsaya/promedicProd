import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'public/css/animate.min.css',
                'public/css/bootstrap.min.css',
                'public/css/datepicker.css',
                'public/css/font-awesome.min.css',
                'public/css/icofont.css',
                'public/css/magnific-popup.css',
                'public/css/nice-select.css',
                'public/css/normalize.css',
                'public/css/owl-carousel.css',
                'public/css/responsive.css',
                'public/css/slicknav.min.css',
                'public/css/style.css',
                // 'https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap',
                
                //End Of CSS

                'public/js/jquery.min.js',
                'public/js/jquery-migrate-3.0.0.js',
                'public/js/jquery-ui.min.js',
                'public/js/colors.js',
                'public/js/popper.min.js',
                'public/js/bootstrap-datepicker.js',
                'public/js/jquery.nav.js',
                'public/js/slicknav.min.js',
                'public/js/jquery.scrollUp.min.js',
                'public/js/tilt.jquery.min.js',
                'public/js/owl-carousel.js',
                'public/js/jquery.counterup.min.js',
                'public/js/steller.js',
                'public/js/jquery.magnific-popup.min.js',
                // 'public/http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js',
                'public/js/bootstrap.min.js',
                'public/js/main.js',
            ],
            refresh: true,
        }),
    ],
});
