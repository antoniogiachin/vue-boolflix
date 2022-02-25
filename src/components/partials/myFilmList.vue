<template>

    <div class="row">
        <div class="col text-white" v-for="(film, index) in filmListArray" :key="index">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <li>{{film.original_language}}</li>
            <li>{{film.vote_average}}</li>
            <li>{{film.overview}}</li>

        </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'myFilmList',

    props : {

        "filmListArray": Array,
    }
}
</script>

<style lang="scss" scoped>

</style>