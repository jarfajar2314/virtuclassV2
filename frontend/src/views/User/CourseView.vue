<template>
    <div class="container-fluid">
        <div class="row mt-5 pt-5">
            <div class="col-md-3 offset-md-1">
                <div class="row">
                    <div class="pb-5">
                    </div>
                </div>
                <RouterLink to='/' class="cards btn btn-block text-dark" style="text-transform: none;"><b>Kelas X</b>
                </RouterLink>
                <RouterLink to='/' class="cards btn btn-block text-dark mt-3" style="text-transform: none;"><b>Kelas
                        XI</b>
                </RouterLink>
                <RouterLink to='/' class="cards btn btn-block text-dark mt-3" style="text-transform: none;"><b>Kelas
                        XII</b>
                </RouterLink>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="search" placeholder="Cari Modul">
                    </div>
                </div>
                <div class="row">
                    <div v-for="n in 6" :key="n" class="col-md-3 mb-4">
                        <CardBlock :title="'Matematika'" :desc="'lorem ipsum dolor sit amet'" :id="n" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardBlock from '../../components/CardBlock.vue'
import { RouterLink } from 'vue-router';

export default {
    name: 'CourseView',
    components: {
        CardBlock,
        RouterLink
    }
}
</script>