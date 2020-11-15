<template>
    <v-container>
        <v-row>
            <v-col md="12">
                <h2 class="font-weight-light">Carro de compras</h2>
                <v-divider></v-divider>
                <v-simple-table class="ma-5" v-if="$store.state.add.length > 0">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center">Foto</th>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Precio</th>
                        <th class="text-center">Acciòn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in $store.state.add"
                        :key="index"
                        >
                            <td class="text-center">
                                <v-img
                                    class="ma-5 rounded-lg"
                                    :src="item.image"
                                    aspect-ratio="1.4"
                                    rounded="5"
                                ></v-img>
                            </td>
                            <td class="text-center">
                                <span v-if="item.title.length > 20">{{ limitar(item.title) }}...</span>
                                <span v-else>{{ item.title }}</span>
                            </td>
                            <td class="text-center">
                                {{ item.price }}
                                <small class="font-weight-bold">USD</small>
                            </td>
                            <td class="text-center">
                                <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    small
                                    color="error"
                                    @click="$store.commit('remove', index)"
                                >
                                    <v-icon dark>
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td class="text-center">
                                {{ sum }} 
                                <small class="font-weight-bold">USD</small>
                            </td>
                            <td class="text-center">
                                <v-btn
                                    color="success"
                                >
                                    <v-icon>mdi-bank</v-icon>
                                    Procesar
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <h3 class="font-weight-light ma-5" v-if="$store.state.add.length == 0">
                    No hay items en el carro
                </h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                count:null,
            }
        },
        computed: {
            sum(){
                let self = this;

                let mapeo = self.$store.state.add.map((x)=>{
                    return x.price;
                })

                return mapeo.reduce((arr, total) =>{
                    return arr + total;
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