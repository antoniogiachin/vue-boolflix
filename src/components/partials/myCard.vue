<template>
    <div :style="{backgroundImage: 'url(' +posterUrlStart + posterSize + film.poster_path+')'}" class=" col-12 col-md-6 col-lg-4 ms_col text-white">
        <div class="overlay"></div>
        <span class="text-uppercase fw-bold text-center">Scheda Film</span>
        <ul >
            
            <li> <span class="fw-bold">Titolo:</span>  {{film.title}}</li>
            <li><span class="fw-bold">Titolo originale:</span> {{film.original_title}}</li>
            <!-- componente bandiera -->
            <myFlags :film="film"/>
            <!-- componente voto stelle -->
            <myStarsVote :film="film"/>
            <li><span class="fw-bold">Overview:</span> {{film.overview}}</li>
            <!-- componente poster -->

        </ul>
        
    </div>
</template>

<script>
import myFlags from './myFlags.vue'
import myStarsVote from './myStarsVote.vue'


export default {
    name: 'myCard',

    props: {
        
        "film" : Object,
    },

    components : {
        myFlags,

        myStarsVote,
    },

    data(){
        return{

            // dimensioni immagine
            posterSize : 'w342',
            
            // url iniziale img
            posterUrlStart: 'https://image.tmdb.org/t/p/',

            // stringa url finale img
            stringaUrlImg:``,

        }
    },

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
        padding: 0;
    }
}
</style>