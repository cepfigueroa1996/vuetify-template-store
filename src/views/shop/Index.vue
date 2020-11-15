<template>
    <v-container  class="pa-0 ma-5">
        <v-row>
            <v-col 
                md="3"
            >
                <v-col 
                    md="12"
                >

                    <v-text-field
                        elevation="0"
                        solo
                        class="mt-5"
                        label="FILTRAR.."
                        append-icon="mdi-magnify"
                        v-model="search"
                    ></v-text-field>
                     <v-divider></v-divider>
                </v-col>
                <v-card
                    class="mx-auto"
                    max-width="300"
                    tile
                    elevation="0"
                >
                    <v-list rounded>
                    <v-subheader>CATEGORIAS</v-subheader>
                    <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                    >
                        <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="search = item.value"
                        >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
            <v-col 
                md="9"
            >

                <products :datos="da" :search="search"></products>
                <load :load="showPro"></load>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import Products from '@/views/shop/components/Products'
    import Load from '@/views/notifications/Load'


    export default {
        components:{ Products, Load },
        created: function(){
            this.productos();
        },
        data(){
            return{
                showPro:false,
                search:'',
                selectedItem:null,
                items: [
                    { text: 'Caballero', icon: 'mdi-face',  value: 'men clothing' },
                    { text: 'Dama', icon: 'mdi-face',  value: 'women clothing' },
                    { text: 'Joyeria', icon: 'mdi-eject',  value: 'jewelery' },
                    { text: 'Electronica', icon: 'mdi-inbox', value: 'electronics' },
                    { text: 'Alimentos', icon: 'mdi-food', value:'food' },
                ],
                da:[],
            }
        },
        methods:{
            productos(){
                let self = this;

                self.showPro  = true;

                axios.get('https://fakestoreapi.com/products')
                    .then(response=>{
                    self.da = response.data;
                    })
                    .finally(()=>{
                        self.showPro  = false;
                    })
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