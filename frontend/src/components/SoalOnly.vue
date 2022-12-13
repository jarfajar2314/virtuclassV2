<template>
    <!-- Soal Only-->
    <h5>
        Pertanyaan {{ idSoal }}
    </h5>
    <p class="mt-2" style="text-align: justify">
        {{ pertanyaan }}
    </p>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': checkSt == 1, 'bg-danger text-light': checkSt != 0 && checkSt != 1 }"
        style="text-transform: none;" :onClick="changeStatSatu">
        <b>A.</b> {{ pilihan[0].pilihan }}
    </button>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': checkSt == 2, 'bg-danger text-light': checkSt != 0 && checkSt != 2 }"
        style="text-transform: none;" :onClick="changeStatDua">
        <b>B.</b> {{ pilihan[1].pilihan }}
    </button>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': checkSt == 3, 'bg-danger text-light': checkSt != 0 && checkSt != 3 }"
        style="text-transform: none;" :onClick="changeStatTiga">
        <b>C.</b> {{ pilihan[2].pilihan }}
    </button>
    <button class="text-start p-3 cards mt-3 btn w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': checkSt == 4, 'bg-danger text-light': checkSt != 0 && checkSt != 4 }"
        style="text-transform: none;" :onClick="changeStatEmpat">
        <b>D.</b> {{ pilihan[3].pilihan }}
    </button>
    <!-- ------- -->
</template>

<script>

export default {
    name: 'SoalOnly',
    components: {
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        check: {
            type: Number,
            required: true
        },
        idSoall: {
            type: Number,
            required: true
        },
        pertanyaan: {
            type: String,
            required: true
        },
        pilihan: {
            type: Array,
            required: true
        },
        jawaban: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            idSubModul: this.id,
            idSoal: this.idSoall,
            satu: false,
            dua: false,
            tiga: false,
            empat: false,
            checkSt: this.check
        }
    },
    methods: {
        changeStatSatu() {
            this.satu = !this.satu
        },
        changeStatDua() {
            this.dua = !this.dua
        },
        changeStatTiga() {
            this.tiga = !this.tiga
        },
        changeStatEmpat() {
            this.empat = !this.empat
        },
        checkJawaban() {
            if (this.satu) {
                if (this.jawaban == 1)
                    this.checkSt = 1
            } else if (this.dua) {
                if (this.jawaban == 2)
                    this.checkSt = 2
            } else if (this.tiga) {
                if (this.jawaban == 3)
                    this.checkSt = 3
            } else if (this.empat) {
                if (this.jawaban == 4)
                    this.checkSt = 4
            }
            this.checkSt = this.jawaban
        },
        nullCheckst() {
            this.checkSt = 0
        }
    },
    watch: {
        idSoall: function (val) {
            this.idSoal = val
        },
        satu: function (val) {
            if (val) {
                this.dua = false
                this.tiga = false
                this.empat = false
                this.checkJawaban()
            }
        },
        dua: function (val) {
            if (val) {
                this.satu = false
                this.tiga = false
                this.empat = false
                this.checkJawaban()
            }
        },
        tiga: function (val) {
            if (val) {
                this.satu = false
                this.dua = false
                this.empat = false
                this.checkJawaban()
            }
        },
        empat: function (val) {
            if (val) {
                this.satu = false
                this.dua = false
                this.tiga = false
                this.checkJawaban()
            }
        }
    },
}
</script>