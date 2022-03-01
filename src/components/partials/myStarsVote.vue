<template>
    <li>
        <!-- bind della classe corrispondente -->
        <span class="fw-bold me-2">Voto:</span>
        <i v-for="(star, index) in voteStars" :key="index" :class="star" class="text-warning"></i>
    </li>
</template>

<script>
export default {
    name: 'myStarsVote',

    props : {

        "film" : Object
    },

    data(){
        return {

            // variabile voto da scala 10 a 5 arrotondato per eccesso
            voteFive: 0,

            // Array di stelle fontawasome
            voteStars: [],

            // variabile stella piena
            fullStar: 'fa-solid fa-star ',

            //variabile stella vuota
            emptyStar: 'fa-regular fa-star '
        }
    },

    methods : {
        voteTransform(){

            // trasformo il numero su base 5 e arrotondo per eccesso
            this.voteFive = Math.ceil(this.film.vote_average / 2);

            // ciclo il voto e aggiungo stella piena
            for (let i = 0; i < this.voteFive; i++) {
                
                this.voteStars.push(this.fullStar);
            }

            // stelle vuote per arrivare a 5 tramite ciclo while
            while(this.voteStars.length < 5){
                this.voteStars.push(this.emptyStar);
            }

        }
    },

    created(){
        this.voteTransform();
    }

    
}
</script>

<style lang="scss" scoped>

</style>