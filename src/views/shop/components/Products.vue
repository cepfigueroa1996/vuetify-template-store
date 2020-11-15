<template>
    <div>
        <v-col 
            md="12"
        >
            <h1 class="font-weight-light display-1 text-uppercase">Tienda online</h1>
            <v-divider class="mt-5 mb-5"></v-divider>
            <span 
                class="subtitle font-weight-light"
                v-if="search != ''"
            >
                Resultado de la busqueda
                <strong>{{ search }}</strong>
            </span>
        </v-col>

        <v-card
            v-for="(n, index) in filtro"
            :key="index"
            width="200px"
            class="float-l"
            v-on:mouseover="snackbar = false"
        >
            <v-img
                class="mt-5 mr-5 ml-5"
                height="150"
                width="150"
                :src="n.image"
            ></v-img>
            <v-card-text>
                <span class="subtitle-2 font-weight-bold" v-if="n.title.length > 20">{{ limitar(n.title) }}..</span>
                <span class="subtitle-2 font-weight-bold" v-else>{{ n.title }}</span> 
                <br>
                <span class="subtitle-1 font-weight-light">{{ n.price }}</span> 
                <small class="font-weight-bold"> USD</small>
                <br>
                <v-chip
                class="ml-0"
                color="grey darken-3 green--text caption"
                >
                <v-icon class="overline">mdi-copyright</v-icon>
                <small>{{ n.category }}</small>
                </v-chip>
            </v-card-text>
            <v-card-actions>
                
                <v-btn
                    class="pa-5 ml-5"
                    dark
                    large
                    color="primary"
                    @click="$store.commit('cart', n), snackbar = true"
                >
                    <v-icon dark class="title">
                        mdi-cart
                    </v-icon>
                    Agregar 
                </v-btn>
            </v-card-actions>
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
                <v-scale-transition>
                <v-icon

                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                ></v-icon>
                </v-scale-transition>
            </v-row>
        </v-card>    
        <add :snackbar="snackbar"></add>
    </div>
</template>

<script>
    import  Add from '@/views/notifications/Add'


    export default {
        props:['datos', 'search'],
        components:{ Add },
        data(){
            return{
                snackbar:false,
            }
        },
        computed:{
            filtro(){
                let self = this;

                return self.datos.filter((item) =>{
                    return item.category.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
                    || item.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
                })
            }
        },
        methods:{
            limitar(id){
                return id.substr(0, 20);
            }
        }
        
    }
</script>

<style scoped>
  .float-l{
    float:left;
    margin:10px;
    margin-top:15px;
  }
</style>