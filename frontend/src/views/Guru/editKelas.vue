<template>
    <div class="d-flex flex-column pt-3 text-start" style="background-color: white !important;">
        <div class="p-5 text-center">
            <h1 class="mt-5 red-maroon-text">Manajemen Materi VirtuClass</h1>
        </div>
        <div class="p-5 rounded shadow w-75 align-self-center">
            <MDBTabs v-model="activeTabId1">
                <!-- Tabs navs -->
                <MDBTabNav tabsClasses="mb-3">
                <MDBTabItem tabId="ex1-1" href="ex1-1">Upload Modul</MDBTabItem>
                <MDBTabItem tabId="ex1-2" href="ex1-2">Upload Sub-Modul</MDBTabItem>
                <MDBTabItem tabId="ex1-3" href="ex1-3">Upload Soal</MDBTabItem>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <MDBTabContent>
                <MDBTabPane tabId="ex1-1">
                    <div class="d-flex flex-column">
                        <div class="mt-3">
                            <label for="nama-modul">Nama Modul</label>
                            <input v-model="dataKelas.judul" name="nama-modul" class="form-control" id="nama-modul" required>
                        </div>
                        <div class="mt-3">
                            <label for="kelas">Kelas</label>
                            <input v-model="dataKelas.kelas" name="kelas" class="form-control" id="kelas" required>
                        </div>
                        <div class="mt-3">
                            <label for="deskripsi">Deskripsi</label>
                            <MDBTextarea rows="4" v-model="dataKelas.deskripsi" />
                        </div>
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="ex1-2">
                    <div class="d-flex flex-column">
                        <div class="mt-3">
                            <label for="judul-sub-modul">Judul Sub Modul</label>
                            <input v-model="dataKelas.judulSubmodul" name="judul-sub-modul" class="form-control" id="judul-sub-modul" required>
                        </div>
                        <div class="mt-3">
                            <label for="content">Content</label>
                            <MDBTextarea rows="5" v-model="dataKelas.editor" />
                            <!-- <QuillEditor v-model:content="dataKelas.editor" theme="snow"/> -->
                        </div>
                        <div class="mt-3">
                            <label for="kategori-kelas">Kategori Modul</label>
                            <select v-model="dataKelas.kategoriModul" class="form-control md-2">
                                <option v-for="i in testing" :key="i.id" :value="i.id">{{ i.judul }}</option>
                            </select>
                        </div>
                        <!-- <div class="d-grid mt-3 mb-5 align-self-center w-25">
                        <button type="submit" name="tambah-soal" class="btn btn-block grey red-maroon-text"
                            style="background-color: #901311; text-transform: none;">Tambah Soal</button>
                        </div> -->
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="ex1-3">
                    <div class="d-flex flex-column">  
                        <div class="mt-3">
                            <label for="kategori-modul">Kategori Modul</label>
                            <select v-model="dataSoal.kategoriModul" class="form-control md-2">
                                <option v-for="i in testing" :key="i.id" :value="i.id">{{ i.judul }}</option>
                            </select>
                        </div>
                        <div class="mt-3">
                            <label for="soal">Soal</label>
                            <input v-model="dataSoal.soal" name="soal" class="form-control" id="soal" required>
                        </div>
                        <div class="mt-5 d-flex flex-sm-row justify-content-between">
                            <div>
                                <div class="row mb-3 justify-content-center">
                                    <label for="soal" class="col-sm-2 col-form-label">1</label>
                                    <div class="col-sm-10">
                                        <input v-model="dataSoal.opsiA" name="soal" class="form-control form-control-sm" id="soal" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="soal" class="col-sm-2 col-form-label">2</label>
                                    <div class="col-sm-10">
                                        <input v-model="dataSoal.opsiB" name="soal" class="form-control form-control-sm" id="soal" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="soal" class="col-sm-2 col-form-label">3</label>
                                    <div class="col-sm-10">
                                        <input v-model="dataSoal.opsiC" name="soal" class="form-control form-control-sm" id="soal" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="soal" class="col-sm-2 col-form-label">4</label>
                                    <div class="col-sm-10">
                                        <input v-model="dataSoal.opsiD" name="soal" class="form-control form-control-sm" id="soal" required>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="opsi-benar">Opsi Benar</label>
                                <select v-model="dataSoal.opsiBenar" class="form-control md-2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <!-- <div class="d-grid mt-3 mb-5 align-self-center w-25">
                        <button @click="editdataKelas" type="submit" name="tambah-soal" class="btn btn-block grey red-maroon-text"
                            style="background-color: #901311; text-transform: none;">Tambah Soal</button>
                        </div> -->
                    </div>
                </MDBTabPane>
                </MDBTabContent>
                <!-- Tabs content -->
            </MDBTabs>
            <div class="d-grid mt-5 mb-3 align-self-center w-25">
                <button @click="postData" type="submit" name="upload" class="btn btn-block text-light"
                 style="background-color: #901311; text-transform: none;">Upload</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios'


import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBTextarea,
    // MDBRadio,
  } from 'mdb-vue-ui-kit';

export default {
    name: 'profileGuru',
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
      MDBTextarea,
    //   QuillEditor
    //   MDBRadio,
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
            testing: [],
            idMod:'',
            dataKelas: {
                judul: '',
                kelas: '',
                deskripsi: '',
                judulSubmodul: '',
                kategoriModul: '',
                editor: '',
                background: 'bg.com',
                id_guru: 1
            },
            dataSoal: {
                kategoriModul: '',
                soal: '',
                opsiA: '',
                opsiB: '',
                opsiC: '',
                opsiD: '',
                opsiBenar: ''
            }
        }
    },
    // methods:{
    //     async editdataKelas(){
    //         try {
    //             const response = await axios.post('http://localhost:8081/api/course', {
    //                 kelas:this.dataKelas.kelas
    //             })
    //             console.log(response.data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // },
    async created() {
        const response1 = await axios.get('http://localhost:8081/api/moduls');
        // const response2 = await axios.get(`http://localhost:8081/api/siswa/detail/${idSiswa}/nilai`);
        this.testing = response1.data.data;
        // this.siswaDetail = response2.data.data;
    },
    methods: {
        async postData() {
            await axios.post('http://localhost:8081/api/modul/create', {
                judul:this.dataKelas.judul,
                deskripsi:this.dataKelas.deskripsi,
                kelas:this.dataKelas.kelas
            });
            await axios.post('http://localhost:8081/api/modul/sub/create', {
                nama:this.dataKelas.judulSubmodul,
                materi:[{
                    nama: 'Judul',
                    materi:this.dataKelas.editor}],
                id_modul:this.dataKelas.kategoriModul
            });
            await axios.post('http://localhost:8081/api/soal/create', {
                soal:this.dataSoal.soal,
                jawaban:this.dataSoal.opsiBenar,
                pilihan:[
                    {
                        idPilihan:1,
                        pilihan: this.dataSoal.opsiA
                    },
                    {
                        idPilihan:2,
                        pilihan: this.dataSoal.opsiB
                    },
                    {
                        idPilihan:3,
                        pilihan: this.dataSoal.opsiC
                    },
                    {
                        idPilihan:4,
                        pilihan: this.dataSoal.opsiD
                    },
                ],
                idModul: this.dataKelas.kategoriModul
            });
        },
    },

}
</script>