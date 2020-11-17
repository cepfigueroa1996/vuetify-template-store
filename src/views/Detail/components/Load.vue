<template>
    <v-row v-if="validar == true">
        <div align="center">
            <v-progress-circular
            :size="200"
            :width="30"
            color="primary"
            class="mt-center"
            indeterminate
            ></v-progress-circular>
        </div>
    </v-row>
</template>

<script>
    export default {
        props:['validar']
    }
</script>

<style scoped>
    .mt-center{
        margin:100px;
        margin-left:400px;
    }
</style>