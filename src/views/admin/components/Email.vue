<template>

    <v-container
        class=" ml-3 pa-0"
        fluid
    >       
        <v-row
        >
            <v-col
                md="5"
                class="ma-0 pa-0"
            >
                <v-card
                    v-for="(em, index) in viewEmail"
                    :key="index"
                    class="color"
                    @click="selectEmail = em"
                >
                    <v-card-title class="subtitle-1 pb-0">{{ em.email }}</v-card-title>
                    <v-card-text class="body-1 mt-0 pt-0 grey--text">
                        <small>{{ limit(em.body)}}</small>
                        
                    </v-card-text>
                </v-card>
                <v-card 
                    v-if="show == true"
                    class="grey lighten-5 "
                    elevation="0"
                >
                    <v-progress-circular
                    :size="150"
                    color="primary"
                    indeterminate
                    class="ma-15"
                    ></v-progress-circular>
                </v-card>
            </v-col>
            <v-col md="7">
                <v-card
                    class="grey lighten-5 fixed "
                    elevation="0"
                    v-if="selectEmail != null"
                >
                    <v-card-title>
                        <h1 class="display-1 font-weight-thin">{{ selectEmail.name }}</h1>
                    </v-card-title>
                    <v-card-text>
                        <span class="subtitle-2 font-weight-light pl-3 grey--text">
                            Enviado: 
                        </span>
                        <span class="subtitle-1 font-weight-light">
                            {{ selectEmail.email }}
                        </span>
                        <br>
                        <span class="subtitle-2 font-weight-light pl-3 grey--text">
                            Para: 
                        </span>
                        <span class="subtitle-1 font-weight-light">
                            prueba@gmail.com
                        </span>
                        <p class="font-weight-medium pa-1 mt-5">
                            {{ selectEmail.body }}
                        </p>
                    </v-card-text>
                    <v-card-action>
                        <v-btn 
                            color="primary"
                            class="ml-5"
                        >
                            <v-icon class="subtitle-2 pr-1">mdi-send</v-icon>
                            Responder
                        </v-btn>
                        <v-btn 
                            color="success"
                            class="ml-5"
                        >
                            <v-icon class="subtitle-2 pr-1">mdi-email</v-icon>
                            Reenviar
                        </v-btn>
                    </v-card-action>
                </v-card>
                <v-card 
                    class="grey lighten-5 fixed "
                    elevation="0"
                    v-else
                >
                    <v-card-title>
                        <h1 class="display-1 font-weight-thin">No hay correo seleccionado</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-img 
                            src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/email-mail-sent.png"
                            width="300"
                        ></v-img>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  
</template>

<script>
    import axios from 'axios'

    export default {
        created: function(){
            this.emails();
        },
        data(){
            return{
                email:[],
                selectEmail:null,
                show:false
            }
        },
        computed:{
            viewEmail(){
                let self = this;

                return self.email.filter(item => item.id <= 40)
            }
        },
        methods:{
            limit(id){
                if(id.length > 60) {
                    let separate;
                    separate = id.substr(0, 60);
                    return separate+'..';
                } else {
                    return id;
                }
                
            },
            emails(){
                let self = this;
                self.show = true;


                axios.get('https://jsonplaceholder.typicode.com/comments')
                    .then(response=>{
                        self.email = response.data;
                    })
                    .finally(() => {
                        self.show = false;
                    })
            }
        }    
    }
</script>

<style scoped>
    .fixed{
        position:fixed;
    }
    .color:hover{
        background-color:#F5F5F5;
        transition: 0.5s;;
        cursor:pointer;
    }
</style>