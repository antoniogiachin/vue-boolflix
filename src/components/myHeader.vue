<template>

    <header class="bg-black">

        <div class="container-fluid">
        <div class="row">

            <div class="col text-uppercase">
                <span class="text-danger fs-4">Boolfix</span> 
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

            // V-model su input
            searchKeyword:'',

        }
    },

    methods : {

        setKeywordValue(){
            this.$emit('keywordValue', this.searchKeyword);
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