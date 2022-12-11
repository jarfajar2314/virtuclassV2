<template>
    <div class="whole-footer">
        <div class="row m-5 mb-0 mt-3">
            <div class="col-lg-5 col-md-5 col-sm-12 p-4">
                <p class="pb-2 pt-3" style="color: #901311; font-weight: bold;">
                    About Us
                </p>
                <p style="font-size:13px; text-align: justify;">
                    VirtuClass hadir sebagai media belajar yang memiliki prinsip Belajar, Bercanda, dan Mengerti. Kami
                    hadir
                    sebagai komunitas belajar yang bertujuan untuk memberikan kesempatan kepada seluruh pelajar di
                    Indonesia
                    untuk merasakan kegiatan belajar yang sama dari daerah pelosok hingga perkotaan.
                </p>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 p-4">
                <p class="pb-2 pt-3" style="color: #901311; font-weight: bold;">
                    Links
                </p>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                        <RouterLink style="text-decoration: none; color: black; font-size: 14px" to="/">Home
                        </RouterLink>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                        <RouterLink style="text-decoration: none; color: black; font-size: 14px" to="/about">About
                        </RouterLink>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                        <RouterLink style="text-decoration: none; color: black; font-size: 14px" to="/">FAQ
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-5 mt-0 mb-3">
            <div class="col-12 p-4">
                <p class="pb-2" style="color: #901311; font-weight: bold;">
                    Our Social Media
                </p>
                <Icon class='iconify' style="font-size: 20px" icon="akar-icons:instagram-fill" />&nbsp; <a
                    href="https://www.instagram.com/virtuclass.id/" target="_blank" style="color: black;"
                    rel="noopener noreferrer">@virtuclass</a>
            </div>
        </div>
        <div class="footer">
            <p class="p-2 mb-0 text-center" style="color: white; font-size: 13px">
                © 2022 VirtuClass. All Rights Reserved.
            </p>
        </div>
    </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue';

export default {
    name: 'NavbarTop',
    components: {
        Icon
    }
}
</script>

<style scoped>
.whole-footer {
    background-color: #f5f5f5;
    width: 100%;
    margin: 0;
}

.footer {
    background-color: #991311;
    width: 100%;
    margin: 0;
}
</style>