<template>
    <div class="col-lg-6 offset-lg-3 offset-md-3 mt-5">
        <div class="p-5">
            <div class="card-body">
                <RouterLink style="color: #901311; text-decoration: none;" to="/">
                    <p class="title-no-shadow text-center" style="color: #991311"><b>Virtu</b>Class</p>
                </RouterLink>
            </div>
            <div class="card-text">
                <!-- jika belum validasi -->
                <nav aria-label="breadcrumb" style="background-color: #ba8888; border-radius: 5px !important;"
                    class="mb-4 p-2">
                    <ol class="breadcrumb flex">
                        <li class="breadcrumb-item active" aria-current="page" style="color: white;">Data belum
                            tervalidasi,
                            mohon menunggu</li>
                    </ol>
                </nav>
                <!-- jika data salah -->
                <nav aria-label="breadcrumb" style="background-color: #ba8888; border-radius: 5px !important;"
                    class="mb-4 p-2">
                    <ol class="breadcrumb flex">
                        <li class="breadcrumb-item active" aria-current="page" style="color: white;">Data salah,
                            silahkan
                            login kembali</li>
                    </ol>
                </nav>
                <form method="post" class="text-start">
                    <div class="mb-3 mt-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="Masukkan Email"
                            required>
                    </div>

                    <div class="mb-1">
                        <label for="password" class="form-label">Password</label>
                        <input style="margin-right: -30px;padding-right: 35px;" :type="passwordType" name="password"
                            class="password-field form-control d-inline" placeholder="Masukkan Password"
                            v-model="passwordText">
                        <span class="display-eye fa fa-eye-slash" @click="hidePassword"
                            :style="{ cursor: selectedType }"></span>
                    </div>

                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="form-check"></div>
                        <a href="#" class="text-body link-danger">Lupa password?</a>
                    </div>

                    <div class="d-grid mb-1">
                        <button type="submit" name="submit" class="btn btn-block text-light"
                            style="background-color: #901311; text-transform: none;">Masuk</button>
                    </div>
                </form>

                <div class="text-center mt-2">
                    <p class="text-muted">Belum punya akun?
                        <RouterLink style="color: #901311; text-decoration: none;" to="/register">
                            <span class="link-danger" style="text-decoration: underline;">Daftar</span>
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginView',
    components: {
    },
    props: {
        pass: {
            default: "",
            type: String,
            required: true
        },
        typePass: {
            default: "password",
            type: String,
            required: true
        }
    },
    data() {
        return {
            passwordHidden: {
                default: true,
                type: Boolean
            },
            passwordType: this.typePass,
            passwordText: this.pass,
            selectedType: 'auto'
        }
    },
    methods: {
        hidePassword() {
            this.passwordType = this.passwordType == 'password' ? 'text' : 'password';
            this.passwordHidden = !this.passwordHidden;
            this.selectedType = !this.passwordHidden ? 'auto' : 'pointer';
        }
    },
}
</script>

<style scoped>

</style>