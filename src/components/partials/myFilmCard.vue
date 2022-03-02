<template>
    <ul class="text-white">
        <p class=" text-uppercase fw-bold text-center my-3">Scheda Film</p>
        <li><span class="fw-bold text-uppercase">titolo: </span>{{film.title}}</li>
        <li><span class="fw-bold text-uppercase">titolo originale: </span>{{film.original_title}}</li>
        <li>
            <span class="fw-bold text-uppercase">lingua originale: </span>
            <span v-if="film.original_language !== 'en' && film.original_language !== 'it'">{{film.original_language}}</span>
            <span v-if="film.original_language == 'it'" ><country-flag country='it' size='small'/></span> 
            <span v-if="film.original_language == 'en'" ><country-flag  country='gb' size='small'/></span> 
        </li>
        <li> <span class="fw-bold text-uppercase">voto: </span><i class="fa-star text-warning" v-for="n in 5" :key="n" :class="(n< voteInFive) ? 'fa-solid' : 'fa-regular'"></i> </li>
        <li><span class="fw-bold text-uppercase">cast: </span> <span v-for="(actor, index) in castArrayObj " :key="index">{{actor.name}} </span></li>
        <li> <span class="fw-bold text-uppercase">genere: </span><span v-for="(genre, index) in genresArrayObj " :key="index">{{genre.name}} </span></li>
        <li><span class="fw-bold text-uppercase">overview: </span>{{overview}}</li>
        
    </ul>
</template>

<script>
const axios = require('axios');

export default {
    name: 'myFilmCard',

    props: {
        "film" : Object,
    },

    data(){
        return{
            castArrayObj: [],

            genresArrayObj: [],

            api_key: 'f5044f322300c34daea30ea45b73a953',

            id : this.film.id,

            language : 'en_US',

            overview : this.film.overview.slice(0,100) + '...',
            
        }
    },

    methods : {

       
        getActors(){
            
            axios.get(`https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${this.api_key}&language=${this.language}`)
                .then((response) => {
                    // handle success
                    this.castArrayObj= response.data.cast.splice(0, 5);
                    console.log(this.castArrayObj)
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },

        getGenres(){
            axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.api_key}&language=${this.language}`)
                .then((response) => {
                    // handle success
                    this.genresArrayObj= response.data.genres;
                    console.log(this.genresArrayObj)
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }

    },

    computed : {

        voteInFive(){
            
            return Math.ceil(this.film.vote_average / 2);

        }
    },

    created(){
        this.getActors();

        this.getGenres()
    }
}
</script>

<style lang="scss" scoped>

</style>