<template>
    <v-container  class="pa-0 ma-5">
        <v-row>
            <Category />
            <Products 
                :datos="da" 
                :search="$store.state.search"  
                :loading="showPro" 
            />
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import Products from '@/views/shop/components/Products' //Lista de productos
    import Category from '@/views/shop/components/Category' //Lista de categorias



    export default {
        components:{ Products, Category },
        created: function(){
            this.productos();
        },
        data(){
            return{
                showPro:false,
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