<template>
  <div id="app">

    <!-- ascolto $emit della parola ricercata e lancio funzione per richiesta al server -->
    <myHeader @keywordValue="getContentFromApi"/>

    <!-- passo al main l'oggetto dei film cercati -->
    <myMain :filmListArray='filmListArray'/>
    
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

      // array vuoto per lista dei film cercati, passo con props per popolare al main
      filmListArray : [],
    }
  },

  methods:{
    getContentFromApi(keywordValue){
      // sintassi con backtick
      axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=f5044f322300c34daea30ea45b73a953&language=it-IT&query=${keywordValue}`)
        // Arrow function per riferirmi ad array vuoto fuori axios
        .then((response) =>{

        // handle success
        console.log(response);
        
        // array di film
        this.filmListArray = response.data.results
        console.log(this.filmListArray)

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
