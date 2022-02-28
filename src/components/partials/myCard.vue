<template>
    <div class="col text-white">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <myFlags :film="film"/>
            <li>{{film.vote_average}}</li>
            <li>{{film.overview}}</li>

        </ul>
        
    </div>
</template>

<script>
import myFlags from './myFlags.vue'

export default {
    name: 'myCard',

    props: {
        
        "film" : Object,
    },

    components : {
        myFlags,
    }

}
</script>

<style lang="scss" scoped>

</style>