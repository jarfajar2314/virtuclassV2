<template>
    <div class="container mt-5 pt-3 pb-5 text-start">
        <div class="d-flex flex-column">
            <div class="p-5 mt-5 rounded red-maroon">
                <div class="row reverse">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 flex">
                        <div class="wrap p-4">
                            <div class="row">
                                <h2 class="title-1">Roger Sumatra</h2>
                                <h3 class="title-2 mt-4">SMPN 2 Bandung</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                        <img :src=thumb class="flex">
                    </div>
                </div>
            </div>
            <div class="p-5 mt-5 rounded shadow w-75 align-self-center">
                <div class="d-flex flex-column">
                    <div class="mt-5">
                        <label for="kategori-nilai">Kategori Nilai</label>
                        <select v-model="dataNilai.kategori" class="form-control md-2">
                            <option>PHB</option>
                            <option>UTS</option>
                            <option>UAS</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <label for="kategori-nilai">Nilai</label>
                        <input v-model="dataNilai.nilai" name="nilai" class="form-control" id="nilai" required>
                    </div>
                    <div class="d-grid mt-5 mb-1 align-self-end" style="width:100px">
                    <button @click="editNilai" type="submit" name="submit" class="btn btn-block text-light"
                        style="background-color: #901311; text-transform: none;">Nilai</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

// import {
//     MDBTabs,
//     MDBTabNav,
//     MDBTabContent,
//     MDBTabItem,
//     MDBTabPane,
//   } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

export default {
    name: 'profileGuru',
    components: {
    //   MDBTabs,
    //   MDBTabNav,
    //   MDBTabContent,
    //   MDBTabItem,
    //   MDBTabPane,
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
            dataNilai: {
                kategori: '',
                nilai: '',
                id_siswa: 1
            }
        }
    },
    setup() {
      const activeTabId1 = ref('ex1-1');

      return {
        activeTabId1,
      };
    },
    async created() {
        const response1 = await axios.get('http://localhost:8081/api/moduls');
        // const response2 = await axios.get(`http://localhost:8081/api/siswa/detail/${idSiswa}/nilai`);
        this.testing = response1.data.data;
        // this.siswaDetail = response2.data.data;
    },
    methods: {
        async editNilai() {
            await axios.post('http://localhost:8081/api/nilai/update', {
                id_siswa: this.dataNilai.id_siswa,
                kategori: this.dataNilai.kategori,
                nilai: this.dataNilai.nilai
            });
        },
    },

}
</script>   