<template>
  <div id="app">
    <myHeader @searchKeyword="setParams"/>
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

      api_key : 'f5044f322300c34daea30ea45b73a953',

      language: 'en_US',

      films : [],

      series: [],

      showListTitle: false,

    }

  },

  methods:{

    setParams(keyword) {

      const params = {

        params: {
          api_key : this.api_key,
  
          query : keyword,
  
          language: this.language,
        }

      };

      this.getFilms(params);

      this.getTv(params);

      this.showListTitle = true;
    },

    getFilms(params){
      axios.get('https://api.themoviedb.org/3/search/movie', params)
        .then((response) => {

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

    getTv(params){
      axios.get('https://api.themoviedb.org/3/search/tv', params)
        .then((response) => {
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
