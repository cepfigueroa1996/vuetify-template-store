<template>
    <div>
        <h2 class="font-weight-thin mt-5 ml-8" v-if="data.length > 0">Publicaciones</h2>
        <v-list three-line  class="grey lighten-4 pa-7">
        <template v-for="(item, index) in data">


            <v-list-item

            :key="item.title"
            >
            <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
            <v-divider :key="index"></v-divider>
        </template>
        </v-list>        
    </div>
</template>

<script>
    export default {
        props:['data'],
        data(){
            return{

            }
        }
    }
</script>