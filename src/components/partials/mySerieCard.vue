<template>
    <ul class="text-white">
        <p class=" text-uppercase fw-bold text-center my-3">Scheda Serie</p>
        <li> <span class="fw-bold text-uppercase">titolo: </span>{{serie.name}}</li>
        <li><span class="fw-bold text-uppercase">titolo originale: </span>{{serie.original_name}}</li>
        <li>
            <span class="fw-bold text-uppercase">lingua originale: </span>
            <!-- visualizza le bandiere se si soddisfano i requisiti altrimenti scrivi solo la nazione -->
            <span v-if="serie.original_language !== 'en' && film.original_language !== 'it'">{{serie.original_language}}</span>
            <span v-if="serie.original_language == 'it'" ><country-flag country='it' size='small'/></span> 
            <span v-if="serie.original_language == 'en'" ><country-flag  country='gb' size='small'/></span> 
        </li>
        <!-- ciclo 5 volte l'icona delle stelle di fontawasome, se soddisfa requisiti stilizza piena e vuota -->
        <li >  <span class="fw-bold text-uppercase">voto: </span> <i class="fa-star text-warning" v-for="n in 5" :key="n" :class="(n< voteInFive) ? 'fa-solid' : 'fa-regular'"></i> </li>
        <li> <span class="fw-bold text-uppercase">cast: </span>  <span v-for="(actor, index) in castArrayObj " :key="index">{{actor.name}} </span></li>
        <li><span class="fw-bold text-uppercase">genere: </span> <span v-for="(genre, index) in genresArrayObj " :key="index">{{genre.name}} </span></li>
        <li><span class="fw-bold text-uppercase">overview: </span> {{overview}}</li>
    </ul>
</template>

<script>
const axios = require('axios');

export default {
    name: 'myFilmCard',

    props: {
        "serie" : Object,
    },

    data(){
        return{
            castArrayObj: [],

            genresArrayObj: [],

            api_key: 'f5044f322300c34daea30ea45b73a953',

            id : this.serie.id,

            language : 'en_US',

            overview : this.serie.overview.slice(0,100) + '...',
            
        }
    },

    methods : {

       
        getActors(){
            
            axios.get(`https://api.themoviedb.org/3/tv/${this.id}/credits?api_key=${this.api_key}&language=${this.language}`)
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
            axios.get(`https://api.themoviedb.org/3/tv/${this.id}?api_key=${this.api_key}&language=${this.language}`)
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
            
            return Math.ceil(this.serie.vote_average / 2);

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