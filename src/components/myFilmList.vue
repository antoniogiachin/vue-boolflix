<template>

    <div class="row">

        <div  v-if="showListTitle" class="col-12">
            <h1 class="text-white" v-if="films.length >= 1">Film</h1>
        </div>

        <div class="col-12">
            <div class="row">
                <div class=" col-12 col-sm-6 col-lg-4 col-xxl-3 g-2 ms_col" :style="{backgroundImage : 'url(' + BackgroundUrlStart + film.poster_path +')'}" v-for="(film, index) in films" :key="index">
                    <div class="overlay"></div>
                    <img v-if="film.poster_path == null" src="https://www.bl2.it/3156-thickbox_default/ciak-professionale-nero-strisce-bianco-nero-277-x-241-cm.jpg" alt="ciak-empty">
                    <myFilmCard :film="film"/>
                    
                </div>
            </div>
        </div>

    </div>


</template>

<script>
import myFilmCard from "./partials/myFilmCard.vue"

export default {
    name: 'myFilmList',

    props: {

        "films" : Array,

        "showListTitle" : Boolean,

    },

    data(){
        return {
            BackgroundUrlStart: 'https://image.tmdb.org/t/p/w342'
        }
    },

    components: {
        myFilmCard,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.ms_col {

    @include ms_col;
    
}
</style>