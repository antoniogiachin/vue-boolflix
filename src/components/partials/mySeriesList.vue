<template>
    <div class="row">
        <div class="col text-white" v-for="(film, index) in seriesListArray" :key="index">
            <ul>
                <li>{{film.name}}</li>
                <li>{{film.original_name}}</li>
                <!-- componente bandiera -->
                <myFlags :film="film"/>
                <!-- componente voto stelle -->
                <myStarsVote :film="film"/>
                <li>{{film.overview}}</li>
                <!-- componente poster -->
                <myPoster :film="film"/>
            </ul>
        </div>
    </div>
</template>

<script>
import myFlags from './myFlags.vue'
import myPoster from './myPoster.vue'
import myStarsVote from './myStarsVote.vue'

export default {
    name: 'mySeriesList',

    components: {
        myFlags,

        myPoster,

        myStarsVote,
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