<template>

    <main class="ms_main">
        <div class="container">

            <!-- richiamo i componenti e passo loro la props dell'array di obj  -->

            <myFilmList :films="films" />
                
            <mySeriesList :series="series"/>

        </div>
    </main>
</template>

<script>
import myFilmList from './myFilmList.vue'
import mySeriesList from './mySeriesList.vue'

export default {
    name : 'myMain',

    props: {

        "films" : Array,

        "series" : Array,

    },

    components: {

        myFilmList,

        mySeriesList,
    },
    
}
</script>

<style>
.ms_main{
    background-color: #434343;
    min-height: calc(100vh - 50px);
    padding: 30px 0px;
}
</style>