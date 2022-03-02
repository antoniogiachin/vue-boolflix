<template>

    <div class="row my-3">

        <div v-if="showListTitle" class="col-12">
            <h1 class="text-white" v-if="series.length >= 1">Serie Tv</h1>
        </div>

        <div class="col-12">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xxl-3 gy-2 ms_col" :style="{backgroundImage : 'url(' + BackgroundUrlStart + serie.poster_path +')'}" v-for="(serie, index) in series" :key="index">

                    <div class="overlay"></div>
                    <img v-if="serie.poster_path == null" src="https://www.bl2.it/3156-thickbox_default/ciak-professionale-nero-strisce-bianco-nero-277-x-241-cm.jpg" alt="ciak-empty">
                    <mySerieCard :serie="serie"/>
                    
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import mySerieCard from './partials/mySerieCard.vue'

export default {
    name: 'mySeriesList',

    props: {

        "series" : Array,

        "showListTitle" : Boolean,

    }, 

    data(){
        return {
            BackgroundUrlStart: 'https://image.tmdb.org/t/p/w342'
        }
    },

    components:{
        mySerieCard,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.ms_col {

    @include ms_col;

}
</style>