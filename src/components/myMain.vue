<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col text-white" v-for="(film, index) in filmListArray" :key="index">
                    scheda film
                    <ul >
                        <li>{{film.title}}</li>
                        <li>{{film.original_title}}</li>
                        <li>{{film.original_language}}</li>
                        <li>{{film.vote_average}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'myMain',

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