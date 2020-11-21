<template>
    <v-row>
        
        <v-col md="12">
            <v-btn
                elevation="0"
                class="grey lighten-5"
            >
                <v-icon class="subtitle-1 mr-1">mdi-store</v-icon>
                <small class="caption">Productos</small>
            </v-btn>
        </v-col>
        <v-col 
            md="12"
        >
            <v-card>
                <v-card-title class="font-weight-light">
                    Productos registrados
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text
                    v-if="show == false"
                >
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Foto</th>
                                <th class="text-left">Titulo</th>
                                <th class="text-left">Precio</th>
                                <th class="text-left">Acciòn</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(item, index) in info"
                                :key="index"
                            >
                                <td>
                                    <v-img
                                        :src="item.image"
                                        width="50"
                                        height="50"
                                        class="mt-2 mb-2"
                                    ></v-img>
                                </td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.price }}</td>
                                <td>
                                    <v-btn
                                        color="error"
                                        @click="deleteProduct(index)"
                                    >
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
                <div  v-if="show == true">
                    <v-progress-linear
                        v-for="pr in 5"
                        :key="pr"
                        color="light-blue darken-1"
                        indeterminate
                        reverse
                    ></v-progress-linear>
                </div>


            </v-card>
            <v-snackbar
                v-model="snackbar"
                color="error"    
            >

                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="black"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    class="caption"
                    >
                        Cerrar
                    </v-btn>
                </template>
                </v-snackbar>
        </v-col>
    </v-row>
</template>

<script>
    import axios from 'axios'

    export default {
        created: function(){
            this.products();
        },
        data() {
            return {
                snackbar:false,
                show:false,
                text: `Articulo eliminado`,
                info:[],
            }
        },
        methods:{
            deleteProduct(id){
                let self = this;
                let arrayProduct = self.info;
                arrayProduct.splice(id , 1);
                self.snackbar = true;
            },
            products(){
                let self = this;
                self.show = true;

                axios.get('https://fakestoreapi.com/products')
                     .then(response=>{
                         self.info = response.data;
                     })
                     .finally(() =>{
                         self.show = false;
                     })
            }
        }
    }
</script>
