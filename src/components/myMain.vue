<template>
    <main>
        <div class="container">
            <h1 class="text-white text-uppercase">Film</h1>
            <myFilmList :filmListArray='filmListArray'/>
            <h1 class="text-white text-uppercase">Serie TV</h1>
            <mySeriesList :seriesListArray='seriesListArray'/>
            
        </div>
    </main>
</template>

<script>
import myFilmList from './partials/myFilmList.vue'
import mySeriesList from './partials/mySeriesList.vue'


export default {
    name: 'myMain',

    components : {
        myFilmList,
        mySeriesList,
    },

    props: {

        "filmListArray": Array,

        "seriesListArray": Array,

    }

}
</script>

<style lang="scss" scoped>
main{
    background-color: #434343;
    height: calc(100vh - 80px);
    width: 100%;
    overflow: auto;
}
</style>