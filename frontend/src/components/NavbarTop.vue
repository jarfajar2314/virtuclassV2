<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5"
        style="box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.1);">
        <div class="container ps-4 pe-4">
            <RouterLink class="navbar-brand" to="/">
                <img :src="logoVirtu" alt="virtuclass-logo">
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home&emsp;</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/course">Course&emsp;</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About&emsp;</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faq">FAQ&emsp;</a>
                    </li>
                    <li class="nav-item p-0">
                        <div class="dropdown">
                            <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <Icon class='iconify' style="font-size: 25px; color: black"
                                    icon="healthicons:ui-user-profile-outline" />
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <!-- Kasih kondisional login atau belum untuk tampilkan ini -->
                                <RouterLink class="dropdown-item" to="/user/profile">
                                    <p>Disini Isi Username</p>
                                </RouterLink>
                                <RouterLink class="dropdown-item" to="/login">
                                    <span>
                                        <Icon class='iconify-inline' icon="carbon:login" />
                                    </span>
                                    <span class="ml-4">Masuk</span>
                                </RouterLink>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue';

export default {
    name: 'NavbarTop',
    components: {
        RouterLink,
        Icon
    },
    data() {
        return {
            logoVirtu: require('../assets/logo.png') // eslint-disable-line no-undef
        }
    }
}
</script>