<template>
    <div class="d-flex flex-column pt-3 text-start" style="background-color: white !important;">
        <div class="p-5 text-center">
            <h1 class="mt-5 red-maroon-text">Manajemen Materi VirtuClass</h1>
        </div>
        <div class="p-5 rounded shadow w-75 align-self-center">
            <MDBTabs v-model="activeTabId1">
                <!-- Tabs navs -->
                <MDBTabNav tabsClasses="mb-3">
                <MDBTabItem tabId="ex1-1" href="ex1-1">Upload Course</MDBTabItem>
                <MDBTabItem tabId="ex1-2" href="ex1-2">Upload Modul</MDBTabItem>
                <MDBTabItem tabId="ex1-3" href="ex1-3">Upload Sub-modul</MDBTabItem>
                <MDBTabItem tabId="ex1-4" href="ex1-4">Upload Soal</MDBTabItem>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <MDBTabContent>
                <MDBTabPane tabId="ex1-1">
                    <div class="d-flex flex-column">
                        <div class="mt-3">
                            <label for="nama-course">Nama Course</label>
                            <input name="nama-course" class="form-control" id="nama-course" required>
                        </div>
                        <div class="mt-3">
                            <label for="url-background">Url Background</label>
                            <input name="url-background" class="form-control" id="url-background" required>
                        </div>
                        <div class="mt-3">
                            <label for="deskripsi-course">Deskripsi Course</label>
                            <input name="deskripsi-course" class="form-control" id="deskripsi-course" required>
                        </div>
                        <div class="mt-3">
                            <label for="kategori-kelas">Kategori Kelas</label>
                            <select class="form-control md-2">
                                <option>X</option>
                                <option>XI</option>
                                <option>XII</option>
                            </select>
                        </div>
                        <div class="d-grid mt-5 mb-1 align-self-end" style="width:100px">
                        <button type="submit" name="upload" class="btn btn-block text-light"
                            style="background-color: #901311; text-transform: none;">Upload</button>
                        </div>
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="ex1-2">
                    <div class="d-flex flex-column">
                        <div class="mt-3">
                            <label for="nama-modul">Nama Modul</label>
                            <input name="nama-modul" class="form-control" id="nama-modul" required>
                        </div>
                        <div class="mt-3">
                            <label for="kategori-pelajaran">Kategori Pelajaran (Course)</label>
                            <select class="form-control md-2">
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>
                        </div>
                        <div class="d-grid mt-5 mb-1 align-self-end" style="width:100px">
                        <button type="submit" name="upload" class="btn btn-block text-light"
                            style="background-color: #901311; text-transform: none;">Upload</button>
                        </div>
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="ex1-3">
                    <div class="d-flex flex-column">
                        <div class="mt-3">
                            <label for="judul-sub-modul">Judul Sub Modul</label>
                            <input name="judul-sub-modul" class="form-control" id="judul-sub-modul" required>
                        </div>
                        <div class="mt-3">
                            <label for="content">Content</label>
                            <MDBTextarea rows="4" v-model="textareaValue" />
                        </div>
                        <div class="mt-3">
                            <label for="kategori-kelas">Kategori Modul</label>
                            <select class="form-control md-2">
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>
                        </div>
                        <div class="d-grid mt-5 mb-1 align-self-end" style="width:100px">
                        <button type="submit" name="upload" class="btn btn-block text-light"
                            style="background-color: #901311; text-transform: none;">Upload</button>
                        </div>
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="ex1-4">
                    <div class="d-flex flex-column">
                        <div class="mt-3">
                            <label for="nama-soal">Judul Soal</label>
                            <input name="nama-soal" class="form-control" id="nama-soal" required>
                        </div>
                        <div class="mt-3">
                            <label for="kategori-modul">Kategori Modul</label>
                            <select class="form-control md-2">
                                <option>ABC</option>
                                <option>ABC</option>
                                <option>ABC</option>
                            </select>
                        </div>
                        <div class="mt-3">
                            <label for="soal">Soal</label>
                            <input name="soal" class="form-control" id="soal" required>
                        </div>
                        <div class="mt-3 d-flex flex-row justify-content-between">
                            <div>
                                <MDBRadio
                                    label="Opsi 1"
                                    name="flexRadioDefault"
                                    v-model="radio1"
                                    value="flexRadioDefault1"
                                />
                                <MDBRadio
                                    label="Opsi 2"
                                    name="flexRadioDefault"
                                    v-model="radio1"
                                    value="flexRadioDefault2"
                                />
                                <MDBRadio
                                    label="Opsi 3"
                                    name="flexRadioDefault"
                                    v-model="radio1"
                                    value="flexRadioDefault3"
                                />
                                <MDBRadio
                                    label="Opsi 4"
                                    name="flexRadioDefault"
                                    v-model="radio1"
                                    value="flexRadioDefault4"
                                />
                            </div>
                            <div>
                                <label for="opsi-benar">Opsi Benar</label>
                                <select class="form-control md-2">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-grid mt-3 mb-5 align-self-center w-25">
                        <button type="submit" name="tambah-soal" class="btn btn-block grey red-maroon-text"
                            style="background-color: #901311; text-transform: none;">Tambah Soal</button>
                        </div>
                        <div class="d-grid mt-5 mb-1 align-self-end" style="width:200px">
                        <button type="submit" name="upload" class="btn btn-block text-light"
                            style="background-color: #901311; text-transform: none;">Upload</button>
                        </div>
                    </div>
                </MDBTabPane>
                </MDBTabContent>
                <!-- Tabs content -->
            </MDBTabs>
        </div>
    </div>
</template>

<script>
import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBTextarea,
    MDBRadio,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

export default {
    name: 'profileGuru',
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
      MDBTextarea,
      MDBRadio,
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
        }
    },
    setup() {
      const activeTabId1 = ref('ex1-1');
      const radio1 = ref('flexRadioDefault2');

      return {
        radio1,
        activeTabId1,
      };
    },
}
</script>