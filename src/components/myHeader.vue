<template>

    <header class="bg-black">

        <div class="container-fluid">
        <div class="row">

            <div class="col text-uppercase">
                <span class="text-danger fs-4">Boolfix</span> 
            </div>

            <div class="col-1 me-2">
                <!-- v-model su valore della lingue e creazione emit al cambio su select -->
                <select name="lang-select" v-model="languageValue" @change="setLanguageValue()" id="lang-select">
                    <option value="">Inglese</option>
                    <option value="it-IT">Italiano</option>
                </select>
            </div>

            <div class="col d-flex justify-content-end">
                <input type="text" placeholder="Cerca qui" v-model="searchKeyword">
                <button @click="setKeywordValue">Cerca</button>
            </div>

        </div>
        </div>

    </header>

</template>

<script>
export default {
    name: 'myHeader',

    data(){
        return{

            // V-model su ricerca nome film input
            searchKeyword:'',

            // V-model su select lingua
            languageValue : ''

        }
    },

    methods : {
        // emit ricerca film
        setKeywordValue(){
            this.$emit('keywordValue', this.searchKeyword);
        },

        // emit selezione lingua
        setLanguageValue(){
            this.$emit('langValue', this.languageValue);
        }
        
    }
}
</script>

<style lang="scss" scoped>
header{
    height: 80px;
    display: flex;
    align-items: center;
}
</style>