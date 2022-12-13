<template>
    <!-- Soal Only-->
    <h5>
        Pertanyaan {{ idSoal }}
    </h5>
    <p class="mt-2" style="text-align: justify">
        {{ pertanyaan }}
    </p>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': check == 1, 'bg-danger text-light': check != 0 && check != 1 }"
        style="text-transform: none;" :onClick="changeStatSatu">
        <p>{{ pilihan[0].pilihan }}</p>
    </button>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': check == 2, 'bg-danger text-light': check != 0 && check != 2 }"
        style="text-transform: none;" :onClick="changeStatDua">
        <p>{{ pilihan[1].pilihan }}</p>
    </button>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': check == 3, 'bg-danger text-light': check != 0 && check != 3 }"
        style="text-transform: none;" :onClick="changeStatTiga">
        <p>{{ pilihan[2].pilihan }}</p>
    </button>
    <button class="text-start p-3 cards mt-3 btn btn-block w-100 border border-secondary flex"
        :class="{ 'bg-success text-light': check == 4, 'bg-danger text-light': check != 0 && check != 4 }"
        style="text-transform: none;" :onClick="changeStatEmpat">
        <p>{{ pilihan[3].pilihan }}</p>
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
            check: 0
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
                    this.check = 1
            } else if (this.dua) {
                if (this.jawaban == 2)
                    this.check = 2
            } else if (this.tiga) {
                if (this.jawaban == 3)
                    this.check = 3
            } else if (this.empat) {
                if (this.jawaban == 4)
                    this.check = 4
            } else {
                this.check = this.jawaban
            }
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
        },
    },
}
</script>