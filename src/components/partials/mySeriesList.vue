<template>
    <div class="row">
        <div class="col text-white" v-for="(film, index) in seriesListArray" :key="index">
            <ul>
                <li>{{film.name}}</li>
                <li>{{film.original_name}}</li>
                <myFlags :film="film"/>
                <li>{{film.vote_average}}</li>
                <li>{{film.overview}}</li>
                <myPoster :film="film"/>
            </ul>
        </div>
    </div>
</template>

<script>
import myFlags from './myFlags.vue'
import myPoster from './myPoster.vue'

export default {
    name: 'mySeriesList',

    components: {
        myFlags,

        myPoster,
    },

    props: {

        "seriesListArray": Array,
    },

    data(){
        return {
            
        }
    },

    methods: {

    },

    created(){

    }
}
</script>

<style lang="scss" scoped>

</style>