<template>
    <div class="col text-white">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <li>{{film.original_language}}</li>
            <li>{{film.vote_average}}</li>
            <li>{{film.overview}}</li>

        </ul>
        
    </div>
</template>

<script>
export default {
    name: 'myCard',

    props: {
        
        "film" : Object,
    }
}
</script>

<style lang="scss" scoped>

</style>