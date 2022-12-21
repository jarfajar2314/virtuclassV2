<template>
    <div class="container mt-5 pt-3 text-start">
        <div class="p-5 text-center">
            <h1 class="mb-5 red-maroon-text">Manajemen Materi VirtuClass</h1>
            <div class="d-flex flex-row justify-content-start">
                <a class="btn w-25 mx-3 red-maroon white" href="" role="button">Upload</a>
            </div>
            <div class="mb-5 mt-5 pt-3 pb-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">Course</th>
                            <th scope="col">Kelas</th>
                            <th scope="col">Modul</th>
                            <th scope="col">Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in course" :key="i.id">
                            <th scope="row">{{ i.id }}</th>
                            <td>{{ i.nama }}</td>
                            <td>{{ i.kelas }}</td>
                            <td>Suhu dan Kalor</td>
                            <td>
                                <MDBBtn outline="success">
                                    <MDBIcon icon="edit" />
                                </MDBBtn>
                                <MDBBtn class="red-maroon" outline="light">
                                    <MDBIcon icon="trash" />
                                </MDBBtn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { MDBIcon } from 'mdb-vue-ui-kit';
import { MDBBtn } from "mdb-vue-ui-kit";
import axios from 'axios';

export default {
    components: {
        MDBIcon,
        MDBBtn,
    },
    data() {
        return {
            course: [],
            moduls: []
        }
    },
    async created() {
        const response1 = await axios.get('http://localhost:8081/api/courses');
        // const response2 = await axios.get('http://localhost:8081/api/moduls');
        this.course = response1.data.data;
        // this.moduls = response2.data.data;
    }
};
</script>