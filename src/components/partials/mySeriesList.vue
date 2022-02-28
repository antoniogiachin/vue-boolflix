<template>
    <div class="row">
        <div :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w342${film.poster_path}`}" class="col-4 ms_col text-white" v-for="(film, index) in seriesListArray" :key="index">
            <ul>

                <li>{{film.name}}</li>
                <li>{{film.original_name}}</li>
                <!-- componente bandiera -->
                <myFlags :film="film"/>
                <!-- componente voto stelle -->
                <myStarsVote :film="film"/>
                <li>{{film.overview}}</li>

            </ul>
        </div>
    </div>
</template>

<script>
import myFlags from './myFlags.vue'
import myStarsVote from './myStarsVote.vue'

export default {
    name: 'mySeriesList',

    components: {
        myFlags,

        myStarsVote,
    },

    props: {

        "seriesListArray": Array,
    },

    data(){
        return {

            // dimensioni immagine
            posterSize : 'w342',
            
            // url iniziale img
            posterUrlStart: 'https://image.tmdb.org/t/p/',

            // stringa url finale img
            stringaUrlImg: this.film.poster_path,
        }
    },

    methods: {

    },

    created(){

    }
}
</script>

<style lang="scss" scoped>
.ms_col{
    height: 513px;
    width: 342px;
    background-size: cover;
    filter: opacity(0.8);
    overflow: auto;
}
</style>