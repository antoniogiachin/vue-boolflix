<template>
  <div id="app">
    <!-- Ascolto emit parola ricercata ==> lancio funzione per chiamata axios -->
    <myHeader @searchKeyword="setParams"/>

    <!-- Passo con props a main array di oggetti dei film e delle serie ricevute in risposta dal server -->
    <myMain  :films="films" :series="series" :showListTitle="showListTitle"/>
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myMain from './components/myMain.vue'

const axios = require('axios');


export default {
  name: 'App',
  components: {
    myHeader,
    myMain,
  },

  data(){

    return{

      // api key personale
      api_key : 'f5044f322300c34daea30ea45b73a953',

      // lingua predefinita ricerca
      language: 'en_US',

      // array oggetti films
      films : [],

      // array oggetti serie
      series: [],

    }

  },

  methods:{

    // imposto i parametri, la parola cercata diventa la query per la chiamata al server
    setParams(keyword) {

      const params = {

        params: {
          api_key : this.api_key,
  
          query : keyword,
  
          language: this.language,
        }

      };

      // lancio funzione chiamata film
      this.getFilms(params);

      // lancio funzione chiamata serie
      this.getTv(params);

    },

    // chiamata axios film
    getFilms(params){
      axios.get('https://api.themoviedb.org/3/search/movie', params)
        .then((response) => {

          // popolo array oggetti
          this.films=response.data.results;
          console.log(this.films);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    },

    // chiamata axios serie
    getTv(params){
      axios.get('https://api.themoviedb.org/3/search/tv', params)
        .then((response) => {
          //popolo array oggetti
          this.series=response.data.results;
          console.log(this.series)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }

  }
}
</script>

<style lang="scss">

</style>
