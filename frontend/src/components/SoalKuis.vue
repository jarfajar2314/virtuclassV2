<template>
    <!-- Soal Kuis -->
    <div class="container">
        <SoalOnly ref="SoalOnly" :id="idModul" :idSoall="idSoal" :pertanyaan="soal" :pilihan="pilihan"
            :jawaban="jawaban" :check="check" />
        <div class="row mt-4">
            <div class="col-md-3 text-start">
                <button class="btn btn-inline flex text-light" style="background-color: #901311; text-transform: none;"
                    :onClick="decreaseIdSoal">
                    Sebelumnya
                </button>
            </div>
            <div class="offset-md-6 col-md-3 text-end">
                <button class="btn btn-inline flex text-light" :class="{ 'bg-success': !notEnd }"
                    style="background-color: #901311; text-transform: none;" :onClick="enhanceIdSoal">
                    <span v-if="notEnd">Selanjutnya</span><span v-else>Selesai</span>
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
            jawaban: DataSoal[parseInt(this.idSoall) - 1].jawaban,
            notEnd: true,
            check: 0
        }
    },
    methods: {
        enhanceIdSoal() {
            this.$refs.SoalOnly.nullCheckst()
            if (this.idSoal % 15 != 0) {
                this.idSoal++
                this.idSoal = parseInt(this.idSoal) % 16
                this.soal = DataSoal[(this.idSoal % 16) - 1].soal
                this.pilihan = DataSoal[(this.idSoal % 16) - 1].pilihan
                this.jawaban = DataSoal[(this.idSoal % 16) - 1].jawaban
            }
            if (this.idSoal > 14) {
                this.notEnd = false
            }
            if (!this.notEnd) {
                this.$router.push({ name: 'modul', params: { id: this.idModul } })
            }
        },
        decreaseIdSoal() {
            this.$refs.SoalOnly.nullCheckst()
            if (this.idSoal % 16 >= 1 && this.idSoal > 1) {
                this.idSoal--
                this.idSoal = parseInt(this.idSoal) % 16
                this.soal = DataSoal[(this.idSoal % 16) - 1].soal
                this.pilihan = DataSoal[(this.idSoal % 16) - 1].pilihan
                this.jawaban = DataSoal[(this.idSoal % 16) - 1].jawaban
            }
            if (this.idSoal <= 14) {
                this.notEnd = true
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