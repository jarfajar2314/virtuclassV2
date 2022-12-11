<template>
    <div class="col-lg-6 offset-lg-3 offset-md-3">
        <div class="p-5">
            <div class="card-body">
                <RouterLink style="color: #901311; text-decoration: none;" to="/">
                    <p class="title-no-shadow text-center" style="color: #991311"><b>Virtu</b>Class</p>
                </RouterLink>
            </div>

            <div class="card-text text-start">
                <!-- Jika gagal daftar -->
                <nav aria-label="breadcrumb" style="background-color: #ba8888; border-radius: 5px !important;"
                    class="mb-4 p-2 text-start">
                    <ol class="breadcrumb flex">
                        <li class="breadcrumb-item active text-start" aria-current="page" style="color: white">
                            Pendaftaran gagal,
                            silahkan <RouterLink class="link-primary" to="/register" style="text-decoration: none;">
                                <b>Daftar
                                    kembali</b>
                            </RouterLink>
                        </li>
                    </ol>
                </nav>
                <!-- Jika pendaftaran berhasil -->
                <nav aria-label="breadcrumb" style="background-color: #97cc9b; border-radius: 5px !important;"
                    class="mb-4 p-2">
                    <ol class="breadcrumb flex">
                        <li class="breadcrumb-item active" aria-current="page" style="color: #262626;">Pendaftaran
                            berhasil,
                            silahkan <RouterLink class="link-primary" style="text-decoration: none;" to="/"><b>Masuk</b>
                            </RouterLink>
                        </li>
                    </ol>
                </nav>

                <form method="post" action="" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input type="text" name="nama_siswa" class="form-control" id="nama"
                            placeholder="Masukkan Nama Lengkap" required>
                    </div>

                    <div class="mb-3">
                        <label for="asalsekolah" class="form-label">Asal sekolah</label>
                        <input type="text" name="asal_sekolah" class="form-control" id="asalsekolah"
                            placeholder="Masukkan Asal sekolah" required>
                    </div>

                    <label for="jk" class="mb-2">Jenis Kelamin</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Perempuan" name="jk" id="jk1" required>
                        <label class="form-check-label" for="jk1">
                            Perempuan
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="radio" value="Laki-Laki" name="jk" id="jk2" required>
                        <label class="form-check-label" for="jk2">
                            Laki-Laki
                        </label>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="Masukkan Email"
                            required>
                    </div>

                    <div class="mb-3">
                        <label for="telepon" class="form-label">Nomor telepon</label>
                        <input type="text" name="telepon" class="form-control" id="telepon"
                            placeholder="Masukkan Nomor Telepon" required>
                    </div>

                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" id="passwordHelpBlock"
                            placeholder="Masukkan Password" required>
                        <!-- <div id="passwordHelpBlock" class="form-text"> Your password must be 8-20 characters long, contain letters and numbers.</div> -->
                    </div>

                    <label for="kartupelajar" class="mb-2">Kartu Pelajar</label>
                    <div class="input-group">
                        <input type="file" name="file1" class="form-control" id="inputGroupFile04"
                            aria-describedby="inputGroupFileAddon04" aria-label="Upload" required>
                    </div>

                    <div class="d-grid mb-1 mt-5">
                        <button type="submit" name="submit" class="btn btn-block text-light"
                            style="background-color: #901311; text-transform: none;">Validasi Akun</button>
                    </div>
                </form>

                <div class="text-center mb-3">
                    Sudah punya akun? <RouterLink class='link-primary' style="color: #901311; text-decoration: none;"
                        to="/login"><b>Masuk</b>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { RouterLink } from 'vue-router'
// import { Icon } from '@iconify/vue';

export default {
    name: 'RegisterView',
    components: {
        // RouterLink,
        // Icon
    }
}
</script>