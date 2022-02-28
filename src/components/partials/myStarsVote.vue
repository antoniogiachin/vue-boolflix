<template>
    <li>

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
            voteFive: 0,
        }
    },

    methods : {
        voteTransform(){
            this.voteFive = Math.ceil(this.film.vote_average / 2);

            console.log(this.voteFive);
        }
    },

    created(){
        this.voteTransform();
    }

    
}
</script>

<style lang="scss" scoped>

</style>