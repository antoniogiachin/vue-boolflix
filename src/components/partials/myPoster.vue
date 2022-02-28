<template>
    <li>
        <img :src="posterUrlStart + posterSize + film.poster_path " alt="poster-img">
    </li>
</template>

<script>
export default {
    name: 'myPoster',

    props: {

        "film" : Object
    },

    data(){
        return {

            // dimensioni immagine
            posterSize : 'w342',
            
            // url iniziale img
            posterUrlStart: 'https://image.tmdb.org/t/p/',

        }
    }
}
</script>

<style lang="scss" scoped>

</style>