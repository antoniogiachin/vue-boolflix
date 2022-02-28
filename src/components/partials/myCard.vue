<template>
    <div class="col text-white">
        <span>Scheda Film</span>
        <ul >
            
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <li v-if="noFlag">{{film.original_language}}</li>
            <li v-if="enFlag"><lang-flag iso="en"/></li>
            <li v-if="itFlag"><lang-flag iso="it"/></li>
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
    },

    data() {
        return {

            itFlag : '',

            enFlag: '',

            noFlag: '',

        }
    },

    methods : {

        setFlag(objectLang){
            console.log(this.film.original_language)
            if(objectLang == 'en'){
                this.noFlag = false;
                this.enFlag = true;
                this.itFlag =false;
            } else if(objectLang == 'it'){
                this.noFlag = false;
                this.itFlag =true;
                this.enFlag = false;
            } else {
                this.noFlag = true;
            }
        }

    },

    created(){
       this.setFlag(this.film.original_language)
    }
}
</script>

<style lang="scss" scoped>

</style>