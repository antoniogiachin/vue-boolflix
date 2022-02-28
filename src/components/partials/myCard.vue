<template>
    <div class="col text-white">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <!-- componente bandiera -->
            <myFlags :film="film"/>
            <!-- componente voto stelle -->
            <myStarsVote :film="film"/>
            <li>{{film.vote_average}}</li>
            <li>{{film.overview}}</li>
            <!-- componente poster -->
            <myPoster :film="film"/>

        </ul>
        
    </div>
</template>

<script>
import myFlags from './myFlags.vue'
import myPoster from './myPoster.vue'
import myStarsVote from './myStarsVote.vue'


export default {
    name: 'myCard',

    props: {
        
        "film" : Object,
    },

    components : {
        myFlags,

        myPoster,

        myStarsVote,
    }

}
</script>

<style lang="scss" scoped>

</style>