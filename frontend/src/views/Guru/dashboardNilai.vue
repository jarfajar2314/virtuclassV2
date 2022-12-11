<template>
    <div class="container mt-5 pt-3 text-start">
        <div class="p-5 mt-5 rounded shadow">
            <div class="wrap p-5">
                <h2 class="title-1 font-weight-bold text-dark">Dashboard Nilai</h2>
            </div>
        </div>
        <form method="post" class="text-start">
        <div class="mb-3 mt-3 pt-5">
            <input name="cari pelajar" class="form-control" id="cari pelajar" placeholder="Cari Pelajar" style="height: 60px">
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
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>SMA Negeri XX Bandung</td>
                        <td>john_doe@mail.com</td>
                        <td>000011112222</td>
                        <td>
                            <button name="detail" class="btn btn-outline-success text-success btn-sm">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>SMA Negeri XX Bandung</td>
                        <td>john_doe@mail.com</td>
                        <td>000011112222</td>
                        <td>
                            <button name="detail" class="btn btn-outline-success text-success btn-sm">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>SMA Negeri XX Bandung</td>
                        <td>john_doe@mail.com</td>
                        <td>000011112222</td>
                        <td>
                            <button name="detail" class="btn btn-outline-success text-success btn-sm">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">John Doe</th>
                        <td>SMA Negeri XX Bandung</td>
                        <td>john_doe@mail.com</td>
                        <td>000011112222</td>
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
export default {
    name: 'profileGuru',
    components: {
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
        }
    },
}
</script>   