<template>
  <div id="app">

    <!-- ascolto emit della lingua e imposto stringa con valore corrispondente
      ascolto $emit della parola ricercata e lancio funzione per richiesta al server
     -->
    <myHeader @langValue="setLangString" @keywordValue="getContentFromApi"/>

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
      // stringa vuota per valore lingua
      lang: '',

      // array vuoto per lista dei film cercati, passo con props per popolare al main
      filmListArray : [],

      // setto variabili api_key per params dinamici
      api_key : 'f5044f322300c34daea30ea45b73a953',
    }
  },

  methods:{
    setLangString(lang){
      this.lang=lang;
    },

    getContentFromApi(keywordValue){

      // rendo chiamata dinamica con il params
      const params = {

        params: {

          api_key : this.api_key,
  
          query : keywordValue,
  
          language: this.lang,
        }

      };

      // sintassi con params
      axios.get('https://api.themoviedb.org/3/search/movie', params)
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
  },

  created(){
    this.lang = 'it-IT'
  }
}
</script>

<style lang="scss">

</style>
