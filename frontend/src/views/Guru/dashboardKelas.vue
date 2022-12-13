<template>
    <div class="container mt-5 pt-3 text-start">
        <div class="p-5 text-center">
            <h1 class="mb-5 red-maroon-text">Manajemen Materi VirtuClass</h1>
            <div class="d-flex flex-row justify-content-start">
                <a class="btn w-25 mx-3 red-maroon white" href="" role="button" 
                >Upload</a>
            </div>
            <div class="mb-5 mt-5 pt-3 pb-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th scope="col">Course</th>
                            <th scope="col">Kelas</th>
                            <th scope="col">Modul</th>
                            <th scope="col">Sub-Modul</th>
                            <th scope="col">Content</th>
                            <th scope="col">Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fisika</td>
                            <td>XI</td>
                            <td>Suhu dan Kalor</td>
                            <td>Sifat Sifat</td>
                            <td>content submodul</td>
                            <td>
                                <MDBBtn outline="success">
                                    <MDBIcon icon="edit" />
                                </MDBBtn>
                                <MDBBtn class="red-maroon" outline="light">
                                    <MDBIcon icon="trash" />
                                </MDBBtn>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fisika</td>
                            <td>XI</td>
                            <td>Suhu dan Kalor</td>
                            <td>Sifat Sifat</td>
                            <td>content submodul</td>
                            <td>
                                <MDBBtn outline="success">
                                    <MDBIcon icon="edit" />
                                </MDBBtn>
                                <MDBBtn class="red-maroon" outline="light">
                                    <MDBIcon icon="trash" />
                                </MDBBtn>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fisika</td>
                            <td>XI</td>
                            <td>Suhu dan Kalor</td>
                            <td>Sifat Sifat</td>
                            <td>content submodul</td>
                            <td>
                                <MDBBtn outline="success">
                                    <MDBIcon icon="edit" />
                                </MDBBtn>
                                <MDBBtn class="red-maroon" outline="light">
                                    <MDBIcon icon="trash" />
                                </MDBBtn>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fisika</td>
                            <td>XI</td>
                            <td>Suhu dan Kalor</td>
                            <td>Sifat Sifat</td>
                            <td>content submodul</td>
                            <td>
                                <MDBBtn outline="success">
                                    <MDBIcon icon="edit" />
                                </MDBBtn>
                                <MDBBtn class="red-maroon" outline="light">
                                    <MDBIcon icon="trash" />
                                </MDBBtn>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fisika</td>
                            <td>XI</td>
                            <td>Suhu dan Kalor</td>
                            <td>Sifat Sifat</td>
                            <td>content submodul</td>
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

  export default {
    components: {
      MDBIcon,
      MDBBtn,
    },
  };
</script>