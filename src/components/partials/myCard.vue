<template>
    <div :style="{backgroundImage: stringaUrlImg}" class="col-4 ms_col text-white">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <!-- componente bandiera -->
            <myFlags :film="film"/>
            <!-- componente voto stelle -->
            <myStarsVote :film="film"/>
            <li>{{film.overview}}</li>
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

    methods : {
        getUrl(){
            this.stringaUrlImg = `url(${this.posterUrlStart}${this.posterSize}${this.film.poster_path}`;
        }
    },

    mounted(){
        this.getUrl()
        console.log(this.stringaUrlImg)
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