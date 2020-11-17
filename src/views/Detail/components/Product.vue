<template>
    <v-row 
        v-if="validar == false"
    >
            <v-col 
                md="7"
            >
                <v-img
                    class="ma-15 pa-15"
                    :src="datos.image"
                    height="600"
                ></v-img>
            </v-col>
            <v-col md="5">
                <v-col md="12" class="mr-10 pr-10 pt-10">
                    <h1 class="font-weight-thin">{{ datos.title }}</h1>
                    <h2 class="font-weight-regular">
                        {{ datos.price}}
                        <small class="green--text">USD</small>
                    </h2>
                    <br>
                    <span class="font-weight-light ">{{ datos.description }}</span>
                </v-col>
                <v-col md="12">
                    <v-btn 
                        @click="$store.commit('cart', datos.id), snackbar = true"
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
    </v-row>
</template>

<script>
    export default {
        props:[ 'datos', 'validar' ],
        data(){
            return{

            }
        }
    }
</script>