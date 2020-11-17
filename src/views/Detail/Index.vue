<template>
    <v-container 
        class="pa-0 ma-0 fill-height" 
        fluid
    >
            <Product :datos="pro" :validar="showDe" />
            <Add :snackbar="snackbar"/>
            <Load :validar="showDe" />
            <Comment/>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import Add from '@/views/notifications/Add' //notificacion al agregar al carro
    import Comment from '@/views/Detail/components/Comment' //template de comentarios
    import Product from '@/views/Detail/components/Product' // Template de productos
    import Load from '@/views/Detail/components/Load' // Template load

    export default {
        components:{ Add, Comment, Product, Load },
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
