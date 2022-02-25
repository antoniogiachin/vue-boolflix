<template>
    <main>
        <div class="container">

            <myFilmList :filmListArray='filmListArray'/>
            
        </div>
    </main>
</template>

<script>
import myFilmList from './partials/myFilmList.vue'

export default {
    name: 'myMain',

    components : {
        myFilmList,
    },

    props: {

        "filmListArray": Array,

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