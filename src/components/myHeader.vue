<template>
    <header class="ms_header">
        <h4 class="text-danger">BoolFix</h4>
        <form action="">
            <!-- v-model sulla parola cercata keyword -->
            <input type="text" placeholder="cerca qui" v-model="keyword">
            <!-- prevent per evitare reload pagina nel form ==> al click genera un evento in cui viene messa
            in store la parola cercata  -->
            <button @click.prevent="$emit('searchKeyword', keyword)">Cerca</button>
        </form>
    </header>
</template>

<script>
export default {
    name: 'myHeader',

    data(){
        return{
            
            keyword: '',
        
        }
    }
}
</script>

<style lang="scss" scoped>
.ms_header{
    background-color: #000;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
}
</style>