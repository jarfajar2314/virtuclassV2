<template>
    <div class="container mt-5 pt-3 text-start">
        <div class="p-5 mt-5 rounded red-maroon">
            <div class="row reverse">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 flex">
                    <div class="wrap p-4">
                        <div class="row">
                            <h2 class="title-1">Guru Kita</h2>
                            <h3 class="title-2 mt-4">SMA Negeri XX Bandung</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                    <img :src=thumb class="flex">
                </div>
            </div>
        </div>
        <div class="container p-2 mt-5">
            <div class="row">
                <div class="p-3 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="cards p-3" style="width: 100%;">
                        <RouterLink to="/edit/profile">
                            <img class="flex editTombol" :src=editLogo
                                style="align-items:flex-end; !important justify-content: flex-end; margin:0 0 0 auto"
                                alt="">
                        </RouterLink>
                        <img class="flex" :src=profileLogo alt="">
                        <div class="text-center">
                            <h3 class="mt-4">Guru Kita</h3>
                            <h4>00000888833212</h4>
                            <h4>Perempuan</h4>
                        </div>
                    </div>
                </div>
                <div class="p-3 col-lg-8 col-md-8 col-sm-12 col-12 mb-5">
                    <div class="cards p-3" style="width: 100%;">
                        Chart JS
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profileGuru',
    components: {
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
        }
    },
}
</script>   