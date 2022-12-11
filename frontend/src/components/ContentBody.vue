<template>
    <!-- Content -->
    <div id="content" class="text-start p-4">
        <button class="btn btn-outline-danger hidden-btn mt-2 mb-4 ps-2 pe-2" id="sidebarBtn" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <Icon class='iconify-inline' style="font-size: 25px; color: black" icon="cil:menu" />
            &nbsp;Materi
        </button>
        <div class="row">
            <div class="row pe-4 mb-5 mt-3">
                <h5>
                    Logika Sederhana
                </h5>
                <p class="mt-2" style="text-align: justify">
                    Kontennya
                </p>
                <!-- <iframe width="100%" height="400" src="https://www.youtube.com/embed/8gS8ecKG63k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            </div>
        </div>
    </div>
    <!-- ------- -->
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'ContentBody',
    components: {
        Icon
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            idSubModul: this.id,
            idEl: `heading${this.id}`,
            idColl: `collapse${this.id}`,
            titled: this.title,
        }
    },
}
</script>