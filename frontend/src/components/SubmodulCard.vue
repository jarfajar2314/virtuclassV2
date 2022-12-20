<template>
    <!-- Submodul -->
    <div class="accordion p-2" id="accordionExample">
        <div class="accordion-item">
            <!-- For Implementation -->
            <h2 class="accordion-header" :id="`flush-heading${id}`">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${id}`" aria-expanded="true"
                    :aria-controls="`flush-collapse${id}`">
                    <b>{{ title }}</b>
                </button>
            </h2>
            <div v-for="i in materi" :key="i" :id="`flush-collapse${id}`" class="accordion-collapse collapse"
                :aria-labelledby="`flush-heading${id}`" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="row">
                        <!-- v-for -->
                        <div class="col-md-12 text-start">
                            <div class="btn p-1 me-3" style="background-color:#991311">
                            </div>
                            <RouterLink :to="`/course/sub/${i.id}`" class="text-start text-dark"
                                style="text-transform: none; text-decoration: none">
                                {{ i.nama }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ------- -->
</template>

<script>

export default {
    name: 'SubmodulCard',
    components: {
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        materi: {
            type: Array,
            required: true
        },
        sub: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            subModul: this.sub,
            titled: this.title,
        }
    },
}
</script>