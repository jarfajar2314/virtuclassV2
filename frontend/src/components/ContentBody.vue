<template>
    <!-- Content -->
    <div id="content" class="text-start p-4">
        <!-- <button style="text-transform: none;" class="btn btn-outline-danger hidden-btn mt-2 mb-4 ps-2 pe-2"
            id="sidebarBtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <Icon class='iconify-inline' style="font-size: 25px; color: black" icon="cil:menu" />
            &nbsp;Materi
        </button> -->
        <div class="row">
            <div class="row pe-4 mb-5 mt-3">
                <MateriBelajar v-if="isMaterial" :link="link" :id="idModul" />
                <SoalKuis v-else :id="idModul" :idSoall="idsoal" />
            </div>
        </div>
    </div>
    <!-- ------- -->
</template>

<script>
import MateriBelajar from './MateriBelajar.vue'
import SoalKuis from './SoalKuis.vue'

export default {
    name: 'ContentBody',
    components: {
        MateriBelajar,
        SoalKuis
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
        isMaterial: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            idEl: `heading${this.id}`,
            idColl: `collapse${this.id}`,
            idModul: this.id,
            titled: this.title,
            link: `${this.id}/soal/${this.id}`,
            idsoal: this.id,
        }
    }
}
</script>