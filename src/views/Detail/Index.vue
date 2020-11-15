<template>
    <v-container class="pa-0 ma-0 fill-height" fluid>
        <v-row v-if="showDe == false">
            <v-col 
                md="7"
            >
                <v-img
                    class="ma-15 pa-15"
                    :src="pro.image"
                    height="600"
                ></v-img>
            </v-col>
            <v-col md="5">
                <v-col md="12" class="mr-10 pr-10 pt-10">
                    <h1 class="font-weight-thin">{{ pro.title }}</h1>
                    <h2 class="font-weight-regular">
                        {{ pro.price}}
                        <small class="green--text">USD</small>
                    </h2>
                    <br>
                    <span class="font-weight-light ">{{ pro.description }}</span>
                </v-col>
                <v-col md="12">
                    <v-btn 
                        @click="$store.commit('cart', pro.id), snackbar = true"
                        color="success"
                    >
                        <v-icon class="body-1 mr-1">mdi-cart</v-icon>
                        Agregar
                    </v-btn>
                    <v-btn color="secondary ml-5">
                        <v-icon class="body-1 mr-1">mdi-phone</v-icon>
                        Contactar
                    </v-btn>
                </v-col>
            </v-col>
            <add :snackbar="snackbar"></add>
        </v-row>
        <v-row v-if="showDe == true">
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
        <v-row class="grey lighten-4">
            <v-col 
                md="6"
                class="ma-5"
            >
                <h1 class="font-weight-thin">Dejar comentario</h1>
                <v-divider class="mt-2 mb-5"></v-divider>
                <v-col md="9">
                    <v-text-field
                        outlined
                        label="Nombre.."
                        prepend-inner-icon="mdi-account"
                    ></v-text-field>

                    <v-textarea
                    outlined
                    name="input-7-4"
                    label="Dejar comentario.."
                    ></v-textarea>

                    <v-btn
                        color="primary"
                    >
                        <v-icon class="mr-1 body-1">mdi-send</v-icon>
                        Enviar
                    </v-btn>

                </v-col>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import  Add from '@/views/notifications/Add'

    export default {
        components:{ Add },
        created: function(){
            this.product();
        },
        data(){
            return{
                snackbar:false,
                pro:[],
                showDe:false,
            }
        },
        methods:{
            product(){

                let self = this;
                self.showDe = true;

                axios.get('https://fakestoreapi.com/products/'+this.$route.params.id)
                    .then(response=>{
                        self.pro = response.data;
                    })
                    .finally(()=>{
                        self.showDe = false;
                    })
            }
        }
    }
</script>

<style scoped>
    .mt-center{
        margin:100px;
        margin-left:400px;
    }
</style>