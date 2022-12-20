<template>
    <div class="container-fluid">
        <div class="row mt-5 pt-5">
            <div class="col-md-3 offset-md-1">
                <div class="row">
                    <div class="pb-5">
                    </div>
                </div>
                <button class="cards btn btn-block text-dark" @click="loadModul('x')"
                    style="text-transform: none;"><b>Kelas X</b>
                </button>
                <button class="cards btn btn-block text-dark mt-3" @click="loadModul('xi')"
                    style="text-transform: none;"><b>Kelas
                        XI</b>
                </button>
                <button class="cards btn btn-block text-dark mt-3" @click="loadModul('xii')"
                    style="text-transform: none;"><b>Kelas
                        XII</b>
                </button>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="mb-3">
                        <input type="text" v-model="search" class="form-control" id="search" placeholder="Cari Modul">
                    </div>
                </div>
                <div class="row">
                    <div v-for="n in filteredData" :key="n.idModul" class="col-md-4 mb-4">
                        <CardBlock :title="n.judul" :desc="n.deskripsi" :id="n.idModul" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardBlock from '../../components/CardBlock.vue'
import dataModul from '../../data/dataModul.json'

export default {
    name: 'CourseView',
    components: {
        CardBlock
    },
    data() {
        return {
            search: '',
            dataModul,
            dataKelasModul: []
        }
    },
    mounted() {
        this.dataModul = dataModul
    },
    computed: {
        filteredData() {
            return this.dataKelasModul
                .filter(
                    ({ judul }) => [judul]
                        .some(val => val.toLowerCase().includes(this.search.toLowerCase()))
                );
        }
    },
    methods: {
        loadModul(kelas) {
            this.dataKelasModul = this.dataModul.filter(modul => modul.kelas == kelas)
        }
    },
}
</script>