<template>
    <div class="container mt-5 pt-3 text-start">
        <div class="p-5 mt-5 rounded shadow">
            <div class="wrap p-5">
                <h2 class="title-1 font-weight-bold text-dark">Dashboard Nilai</h2>
            </div>
        </div>
        <form method="post" class="text-start">
            <div class="mb-3 mt-3 pt-5">
                <input name="cari pelajar" class="form-control" id="cari pelajar" v-model="search"
                    placeholder="Cari Pelajar" style="height: 60px">
            </div>
        </form>
        <div class="mb-5 mt-3 pt-3 pb-5 px-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nama</th>
                        <th scope="col">Asal Sekolah</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telepon</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in filteredData" :key="i.id">
                        <th scope="row">{{ i.nama }}</th>
                        <td>{{ i.asalSekolah }}</td>
                        <td>{{ i.email }}</td>
                        <td>{{ i.nomorTelp }}</td>
                        <td>
                            <button name="detail" class="btn btn-outline-success text-success btn-sm">Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'profileGuru',
    components: {
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
            search: '',
            siswa: []
        }
    },
    computed: {
        filteredData() {
            return this.siswa
                .filter(
                    ({ nama }) => [nama]
                        .some(val => val.toLowerCase().includes(this.search.toLowerCase()))
                );
        }
    },
    async created() {
        const response1 = await axios.get('http://localhost:8081/api/siswa');
        // const response2 = await axios.get(`http://localhost:8081/api/siswa/detail/${idSiswa}/nilai`);
        this.siswa = response1.data.data;
        // this.siswaDetail = response2.data.data;
    }
}
</script>   