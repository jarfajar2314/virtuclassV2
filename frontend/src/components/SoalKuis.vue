<template>
    <!-- Soal Kuis -->
    <div class="container">
        <SoalOnly :id="idModul" :idSoall="idSoal" :pertanyaan="soal" :pilihan="pilihan" :jawaban="jawaban" />
        <div class="row mt-4">
            <div class="col-md-3 text-start">
                <button class="btn btn-inline flex text-light" style="background-color: #901311; text-transform: none;"
                    :onClick="decreaseIdSoal">
                    Sebelumnya
                </button>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary btn-block flex text-light" style="text-transform: none;"
                    :onClick="enhanceIdSoal">
                    Cek Jawaban
                </button>
            </div>
            <div class="col-md-3 text-end">
                <button class="btn btn-inline flex text-light" style="background-color: #901311; text-transform: none;"
                    :onClick="enhanceIdSoal">
                    Selanjutnya
                </button>
            </div>
        </div>
    </div>
    <!-- ------- -->
</template>

<script>
import SoalOnly from './SoalOnly.vue'
import DataSoal from '../data/dataSoal.json'

export default {
    name: 'SoalKuis',
    components: {
        SoalOnly
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        idSoall: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            idModul: this.id,
            idSoal: parseInt(this.idSoall) % 15,
            soal: DataSoal[parseInt(this.idSoall) - 1].soal,
            pilihan: DataSoal[parseInt(this.idSoall) - 1].pilihan,
            jawaban: DataSoal[parseInt(this.idSoall) - 1].jawaban
        }
    },
    methods: {
        enhanceIdSoal() {
            if (this.idSoal % 15 != 0) {
                this.idSoal++
                this.idSoal = parseInt(this.idSoal) % 16
                this.soal = DataSoal[(this.idSoal % 16) - 1].soal
                this.pilihan = DataSoal[(this.idSoal % 16) - 1].pilihan
            }
        },
        decreaseIdSoal() {
            if (this.idSoal % 16 >= 1 && this.idSoal > 1) {
                this.idSoal--
                this.idSoal = parseInt(this.idSoal) % 16
                this.soal = DataSoal[(this.idSoal % 16)].soal
                this.pilihan = DataSoal[(this.idSoal % 16)].pilihan
            }
        },
    },
    watch: {
        idSoall: function (val) {
            this.idSoal = val
        }
    }
}
</script>