<template>
    <!-- Submodul -->
    <div class="accordion p-2" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" :id=idEl>
                <button class="accordion-button" style="background-color: white !important;" type="button"
                    data-bs-toggle="collapse" :data-bs-target=idColl aria-expanded="true" :aria-controls=idColl>
                    <b style="color: black">
                        {{ titled }}
                    </b>
                </button>
            </h2>
            <div :id=idColl class="accordion-collapse collapse text-start" :aria-labelledby=idEl
                data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: white !important; color: black;">
                    <RouterLink style="text-decoration: none;" to="'/'">
                        Materi
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- ------- -->
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'SubmodulCard',
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
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            idSubModul: this.id,
            idEl: `heading${this.id}`,
            idColl: `collapse${this.id}`,
            titled: this.title,
        }
    },
}
</script>