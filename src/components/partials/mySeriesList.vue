<template>
    <div class="row gy-2">
        <div :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w342${film.poster_path}`}" class="col-12 col-md-6 col-lg-4 col-xxl-3 ms_col text-white" v-for="(film, index) in seriesListArray" :key="index">
            <div class="overlay"></div>
            <ul>
                <li class="text-uppercase fw-bold text-center my-3">Scheda Serie</li>
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
    background-size: cover;
    filter: opacity(0.8);
    background-position: center;
    position: relative;
    overflow: auto;

    .overlay{
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.9);
        display: none;
    }

    &:hover{
       
       .overlay{
           display: block;
        }

        ul {
            display: block;
        }

    }

    ul {
        list-style-type: none;
        position: absolute;
        display: none;
        overflow: auto;
        padding: 5px;
    }
}
</style>