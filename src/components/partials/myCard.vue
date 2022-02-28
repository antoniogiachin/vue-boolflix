<template>
    <div class="col text-white">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <myFlags :film="film"/>
            <li>{{film.vote_average}}</li>
            <li>{{film.overview}}</li>
            <myPoster :film="film"/>

        </ul>
        
    </div>
</template>

<script>
import myFlags from './myFlags.vue'
import myPoster from './myPoster.vue'


export default {
    name: 'myCard',

    props: {
        
        "film" : Object,
    },

    components : {
        myFlags,

        myPoster,
    }

}
</script>

<style lang="scss" scoped>

</style>