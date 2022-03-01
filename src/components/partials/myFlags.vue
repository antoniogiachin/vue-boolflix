<template>
    <li>
        <span class="fw-bold me-2">Paese di produzione:</span>
        <span v-if="noFlag">{{film.original_language}}</span>
        <span v-if="enFlag"><lang-flag iso="en"/></span>
        <span v-if="itFlag"><lang-flag iso="it"/></span>
    </li>
</template>

<script>
export default {
    name: 'myFlags',

    props : {

        "film" : Object,

    },
    
    data() {
        return {

            // varibili bandiere
            itFlag : '',

            enFlag: '',

            noFlag: '',

        }
    },

    methods : {

        // funzione per set bandiere
        setFlag(objectLang){
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