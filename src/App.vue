<template>
  <div id="app">

    <!-- ascolto $emit della parola ricercata e lancio funzione per richiesta al server -->
    <myHeader @keywordValue="getContentFromApi"/>
    <myMain/>
    
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

  methods:{
    getContentFromApi(keywordValue){
      axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=f5044f322300c34daea30ea45b73a953&language=it-IT&query=${keywordValue}`)
        .then(function (response) {
        // handle success
        console.log(response);
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
