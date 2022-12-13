<template>
    <div class="header mt-5">
        <div class="container p-5">
            <div class="row reverse">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 flex">
                    <div class="wrap">
                        <div class="row">
                            <p class="title-1"><b>Virtu</b>Class</p>
                            <p class="title-2">Belajar, Bercanda, Mengerti</p>
                            <RouterLink class="tombol" to="/course">Coba Sekarang</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                    <img :src=thumb class="flex">
                </div>
            </div>
        </div>
    </div>

    <p id="about"></p>
    <div class="container mt-5">
        <div class="text-center mt-5 mb-5">
            <br><br>
            <h4>
                <b>VIRTUCLASS MERUPAKAN SEBUAH KOMUNITAS BELAJAR</b>
            </h4>
            <h5>
                Apa saja yang kami lakukan?
            </h5>
            <br>
        </div>

        <div class="row row-cols-1 row-cols-lg-3 row-cols-md-1 g-4">
            <div class="col">
                <div class="card shadow p-3 mb-5 bg-body rounded">
                    <img :src=group1 class="rounded mx-auto d-block mt-5" alt="people">
                    <div class="card-body" style="min-height: 260px;">
                        <h5 class="card-title" style="text-align: center;">
                            <b>
                                200+
                                <br>
                                Teman Belajar
                            </b>
                        </h5>
                        <p class="card-text" style="text-align: justify;">
                            Saat ini VirtuClass telah memiliki murid belajar yang kami sebut dengan teman belajar. Lebih
                            dari 200 teman belajar telah bergabung dengan kami untuk mengikuti kelas belajar berbasis
                            online
                            bersama kami.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow p-3 mb-5 bg-body rounded">
                    <img :src="group2" class="rounded mx-auto d-block mt-5" alt="informasi">
                    <div class="card-body" style="min-height: 310px;">
                        <h5 class="card-title" style="text-align: center;">
                            <b>
                                VISI & MISI
                            </b>
                            <br><br>
                        </h5>
                        <p class="card-text" style="text-align: justify;">
                            VirtuClass hadir sebagai media belajar yang memiliki prinsip Belajar, Bercanda, dan
                            Mengerti.
                            Kami hadir sebagai komunitas belajar yang bertujuan untuk memberikan kesempatan kepada
                            seluruh
                            pelajar di Indonesia untuk merasakan kegiatan belajar yang sama dari daerah pelosok hingga
                            perkotaan.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow p-3 mb-5 bg-body rounded">
                    <img :src=group3 class="rounded mx-auto d-block mt-5" alt="">
                    <div class="card-body" style="min-height: 260px;">
                        <h5 class="card-title" style="text-align: center;">
                            <b>
                                Berkoneksi dengan Sekolah Menengah Atas
                            </b>
                            <br>
                        </h5>
                        <p class="card-text" style="text-align: justify;">
                            Pada saat ini kami telah berkoneksi dengan beberapa SMA, salah satunya merupakan SMA Negeri
                            35
                            Jakarta.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <h4 class="mt-5 mb-5 text-center" style="color: #991311">
            <b class="mb-5">Kenapa Harus VirtuClass?</b>
        </h4>

        <br>
        <div class="row padding mt-5">
            <div class="col-lg col-sm-12 space flex">
                <div class="cards">
                    <div class="cardTop flex">
                        <img :src=illustrate1 class="pict" alt="">
                    </div>
                    <div class="cardBottom spaceContent">
                        <div>
                            <h6 style="font-weight: 700;" class="mb-3">Pembelajaran <br> Gratis</h6>
                        </div>
                        <div>
                            <p style="font-size: 13px;">Virtuclass menyediakan pembelajaran yang tidak dikenakan biaya
                                apapun.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg col-sm-12 space flex">
                <div class="cards">
                    <div class="cardTop flex">
                        <img :src=illustrate2 class="pict" alt="">
                    </div>
                    <div class="cardBottom spaceContent">
                        <div>
                            <h6 style="font-weight: 700;" class="mb-3">BFA <br> (Belajar From Anywhere)</h6>
                        </div>
                        <div>
                            <p style="font-size: 13px;">Pembelajaran berbasis daring sehingga kegiatan belajar tetap
                                dapat
                                terlaksana darimanapun.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg col-sm-12 space flex">
                <div class="cards">
                    <div class="cardTop flex">
                        <img :src=illustrate3 class="pict" alt="">
                    </div>
                    <div class="cardBottom spaceContent">
                        <div>
                            <h6 style="font-weight: 700;" class="mb-3">Konseling di luar jam belajar</h6>
                        </div>
                        <div>
                            <p style="font-size: 13px;">Mentor Virtuclass bisa menjawab pertanyaan teman belajar di luar
                                jam
                                belajar.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg col-sm-12 space flex">
                <div class="cards">
                    <div class="cardTop flex">
                        <img :src=illustrate4 class="pict" alt="">
                    </div>
                    <div class="cardBottom spaceContent">
                        <div>
                            <h6 style="font-weight: 700;" class="mb-3">Pembelajaran yang interaktif</h6>
                        </div>
                        <div>
                            <p style="font-size: 13px;">Virtuclass mengajarkan konsep sains dengan contoh penerapan di
                                kehidupan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="video mb-5 mt-5 flex">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/V3fnvxaiQsk"></iframe>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="box-carousel flex">
                        <h3 style="text-align: center; color: #991311;">
                            <b>
                                Nobody ever figures out what life is all about, and it doesn't matter. Explore the
                                world.
                                Nearly everything is really interesting if you go into it deeply enough.
                            </b>
                        </h3>
                    </div>
                    <br><br>
                    <h5 style="text-align: center; font-size: 14px;">
                        - RICHARD P. FEYNMAN
                    </h5>
                </div>
                <div class="carousel-item">
                    <div class="box-carousel flex">
                        <h3 style="text-align: center; color: #991311;">
                            <b>
                                Those who can imagine anything, can create the impossible.
                            </b>
                        </h3>
                    </div>
                    <br><br>
                    <h5 style="text-align: center; font-size: 14px;">
                        - ALAN TURING <br><br><br>
                    </h5>
                </div>
                <div class="carousel-item">
                    <div class="box-carousel flex">
                        <h3 style="text-align: center; color: #991311;">
                            <b>
                                If you can't explain it to a six year old, <br> you don't understand it yourself 3.
                            </b>
                        </h3>
                    </div>
                    <br><br>
                    <h5 style="text-align: center; font-size: 14px;">
                        - ALBERT EINSTEIN <br><br><br>
                    </h5>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="iconify-inline" data-icon="ooui:next-rtl" style="color: gray; font-size: 40px;"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="iconify-inline" data-icon="ooui:next-ltr" style="color: gray; font-size: 40px;"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <br><br><br><br>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1" style="background-color: red;"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2" style="background-color: red;"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3" style="background-color: red;"></button>
            </div>
        </div>
        <br><br>

        <div class="mt-5 mb-5">
            <h3 style="text-align: center; color: #901311;"><b>Kata Teman Belajar</b></h3>
        </div>

        <div class="row mt-5">
            <div class="col-lg col-sm-12 space flex">
                <div class="card shadow" style="border-radius: 10px !important;">
                    <div class="card-body p-3">
                        <img :src=testimoni1 class="rounded mx-auto d-block mt-4 mb-3" alt="">
                        <div class="card-body">
                            <h5 class="card-title mb-4" style="text-align: center;">
                                <b>Chesta Adabi Karnen</b>
                            </h5>
                            <p class="card-text" style="text-align: justify;">Kalo dari saya sangat membantu ka soalnya
                                saya
                                kurang bisa belajar sendiri.
                                Jadi dengan adanya virtuclass saya jadi bisa belajar bareng dan itu membuat saya mudah
                                memahami.
                                Selain itu juga virtuclass tidak hanya menerangkan materi yang biasa tapi dari dasar
                                materi
                                tersebut sampai materinya selesai.
                                Pokoknya enak deh belajar di virtuclass.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg col-sm-12 space flex">
                <div class="card shadow" style="border-radius: 10px !important;">
                    <div class="card-body p-3">
                        <img :src=testimoni2 class="rounded mx-auto d-block mt-4 mb-3" alt="">
                        <div class="card-body">
                            <h5 class="card-title mb-4" style="text-align: center;">
                                <b>Ahmad Hidayat</b>
                            </h5>
                            <p class="card-text" style="text-align: justify;">Seraf tolong maju seraf, ajarin
                                teman-temannya.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg col-sm-12 space flex">
                <div class="card shadow" style="border-radius: 10px !important;">
                    <div class="card-body p-3">
                        <img :src=testimoni3 class="rounded mx-auto d-block mt-4 mb-3" alt="">
                        <div class="card-body">
                            <h5 class="card-title mb-4" style="text-align: center;">
                                <b>Chesta Adabi Karnen</b>
                            </h5>
                            <p class="card-text" style="text-align: justify;">Kalo dari saya sangat membantu ka soalnya
                                saya
                                kurang bisa belajar sendiri.
                                Jadi dengan adanya virtuclass saya jadi bisa belajar bareng dan itu membuat saya mudah
                                memahami.
                                Selain itu juga virtuclass tidak hanya menerangkan materi yang biasa tapi dari dasar
                                materi
                                tersebut sampai materinya selesai.
                                Pokoknya enak deh belajar di virtuclass.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p id="faq" class="mb-5"></p>

        <h3 class="mb-5 text-center">
            <b>Frequently Ask Question</b>
        </h3>

        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item m-3" style="border: 1px solid lightgrey; border-radius: 10px;">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" style="background-color: white !important;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                        aria-controls="flush-collapseOne">
                        Bagaimana cara ikut belajar di Virtuclass.id?
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-4 text-start" style="background-color: white !important;">Syarat
                        pertama, sekolah
                        kamu
                        harus sudah bekerja sama dengan kami terlebih dahulu. Kemudian, kalian bisa mendaftar langsung
                        di
                        website kami.</div>
                </div>
            </div>
            <div class="accordion-item m-3" style="border: 1px solid lightgrey; border-radius: 10px;">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" style="background-color: white !important;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                        Apakah Virtuclass.id membuka kelas mata pelajaran IPS?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-4 text-start" style="background-color: white !important;">Sejauh ini
                        kami baru
                        menyiapkan kelas fisika, kimia, matematika, dan bahasa inggris.</div>
                </div>
            </div>
            <div class="accordion-item m-3" style="border: 1px solid lightgrey; border-radius: 10px;">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" style="background-color: white !important;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Bagaimana sistem pembelajaran di Virtuclass.id?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-4 text-start" style="background-color: white !important;">Sistem
                        pembelajaran
                        virtuclass dilakukan secara daring (<i>online</i>) menggunakan media google meet atau zoom
                        dengan
                        materi belajar yang diintegrasikan menggunakan website virtuclass.</div>
                </div>
            </div>
            <div class="accordion-item m-3" style="border: 1px solid lightgrey; border-radius: 10px;">
                <h2 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" style="background-color: white !important;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                        aria-controls="flush-collapseFour">
                        Berapakah biaya yang harus dikeluarkan untuk mengikuti kegiatan belajar di Virtuclass.id?
                    </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-4 text-start" style="background-color: white !important;">Gratis.</div>
                </div>
            </div>
            <div class="accordion-item m-3" style="border: 1px solid lightgrey; border-radius: 10px;">
                <h2 class="accordion-header" id="flush-headingFive">
                    <button class="accordion-button collapsed" style="background-color: white !important;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                        aria-controls="flush-collapseFive">
                        Apa saja syarat dan ketentuan mengikuti program-program Virtuclass?
                    </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-4" style="background-color: white !important;">
                        <ul class="text-start" style="list-style-type: none;">
                            <li>Kamu termasuk murid dari sekolah yang bekerja sama dengan Virtuclass.id.</li>
                            <li>Kamu memiliki niat belajar yang tinggi.</li>
                            <li>Mengisi form pendaftaran.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    components: {
    },
    data() {
        return {
            group1: require('../assets/Group1.png'),
            group2: require('../assets/Group2.png'),
            group3: require('../assets/Group3.png'),
            thumb: require('../assets/Thumb.png'),
            illustrate1: require('../assets/illustrate1.png'),
            illustrate2: require('../assets/illustrate2.png'),
            illustrate3: require('../assets/illustrate3.png'),
            illustrate4: require('../assets/illustrate4.png'),
            testimoni1: require('../assets/testimoni1.png'),
            testimoni2: require('../assets/testimoni2.png'),
            testimoni3: require('../assets/testimoni3.png'),
        }
    },
}

</script>