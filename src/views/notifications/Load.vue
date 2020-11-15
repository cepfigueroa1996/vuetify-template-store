<template>
    <div  v-if="load == true">
        <v-sheet
            class="pa-3 float-l"

            v-for="ct in 6"
            :key="ct"
        >
            <v-skeleton-loader
            max-width="200"
            type="card"
            ></v-skeleton-loader>
        </v-sheet>
    </div>
</template>

<script>
export default {
    props:['load'],
}
</script>

<style scoped>
  .float-l{
    float:left;
    margin:10px;
    margin-top:15px;
    width:200px;
  }
</style>