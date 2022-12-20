<template>
    <!-- Content -->
    <div id="content" class="text-start p-4">
        <div class="row">
            <div class="row pe-4 mb-5 mt-3">
                <MateriBelajar v-if="isMaterial" :link="link" :id="idModul" :idSub="idSub" />
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
    props: ['id', 'title', 'isMaterial', 'idSub'],
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