<template>

    <div class="row gy-2">
        <myCard v-for="(film, index) in filmListArray" :key="index" :film="film"/>
    </div>
    
</template>

<script>
import myCard from './myCard.vue'

export default {
    name: 'myFilmList',

    components: {
        myCard,
    },

    props : {

        "filmListArray": Array,
    }
}
</script>

<style lang="scss" scoped>

</style>