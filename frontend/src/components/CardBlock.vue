<template>
    <div class="card text-start">
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-text">
                {{ desc }}
            </p>
            <RouterLink :to=idModul class="btn btn-block text-light"
                style="background-color: #901311; text-transform: none;">Baca</RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'CardBlock',
    components: {
        RouterLink
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
        desc: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            idModul: `course/${this.id}`,
        }
    },
}
</script>