<template>
    <div class="container-fluid">
        <div class="row mt-5 pt-5">
            <div class="col-md-3 offset-md-1">
                <div class="row">
                    <div class="py-5">
                        <RouterLink class="btn btn-danger" to=""></RouterLink>
                    </div>
                </div>
                <!-- Submodul -->
                <div>
                    <div v-if="!isMaterial" class="col-md-12 mb-4">
                        <SubmodulCard :id="``" :title="dataModul.judul" :materi="``" />
                    </div>
                    <div v-else v-for="n in dataModul.submodul" :key="n" class="col-md-12 mb-4">
                        <SubmodulCard :id="n.id" :title="n.nama" :materi="n.materi" :idSub="idSub" :sub="sub" />
                    </div>
                </div>
                <!-- ------- -->
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="mb-3">
                        <div class="card px-2 py-3">
                            <h4 class="">{{ dataModul.judul }}</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <ContentBody :id="idModul" :isMaterial="isMaterial" :idSub="idSub" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import SubmodulCard from '../../components/SubmodulCard.vue'
import ContentBody from '../../components/ContentBody.vue'
import dataModul from '../../data/dataModul.json'

export default {
    name: 'ModulView',
    components: {
        RouterLink,
        SubmodulCard,
        ContentBody,
    },
    props: {
        id: {
            type: String,
            required: true
        },
        idsoal: {
            type: String,
            required: true
        },
        idSub: {
            default: "1",
            type: String,
            required: true
        }
    },
    mounted() {
        this.dataModul = dataModul[parseInt(this.id) - 1]
        this.sub = dataModul[parseInt(this.id) - 1].submodul
    },
    data() {
        return {
            idModul: this.id,
            isMaterial: this.idsoal == undefined ? true : false,
            dataModul,
        }
    },
    watch: {
        idsoal: function (val) {
            this.isMaterial = val == undefined ? true : false
        }
    },
}
</script>

<style>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background-color: white;
    box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.20);
    color: #fff;
    transition: 0.5s;
}

#sidebar.active {
    margin-left: -250px;
}
</style>