<template>
    <li>
        <img :src="posterUrlStart + posterSize + film.poster_path " alt="">
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
            posterSize : 'w342',
            
            posterUrlStart: 'https://image.tmdb.org/t/p/',



        }
    }
}
</script>

<style lang="scss" scoped>

</style>