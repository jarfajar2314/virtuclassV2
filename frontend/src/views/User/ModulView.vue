<template>
    <div class="container-fluid">
        <div class="row mt-5 pt-5">
            <div class="col-md-3 offset-md-1">
                <div class="row">
                    <div class="pb-5">
                    </div>
                </div>
                <!-- Submodul -->
                <SubmodulCard :id="1" :title="'Aljabar'" />
                <SubmodulCard :id="2" :title="'Geometri'" />
                <SubmodulCard :id="3" :title="'Matematika Diskrit'" />
                <!-- ------- -->
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="mb-3">
                        <h4 class="">Matematika Diskrit</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <ContentBody />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubmodulCard from '../../components/SubmodulCard.vue'
import ContentBody from '../../components/ContentBody.vue'

export default {
    name: 'ModulView',
    components: {
        SubmodulCard,
        ContentBody
    },
    props: {
        id: {
            type: Number,
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

<style>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background-color: white;
    box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.20);
    color: #fff;
    transition: 0.5s;
}

#sidebar.active {
    margin-left: -250px;
}
</style>