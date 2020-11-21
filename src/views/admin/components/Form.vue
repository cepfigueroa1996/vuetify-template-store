<template>
    <v-row>
        <v-col md="12">
            <v-btn
                elevation="0"
                class="grey lighten-5"
            >
                <v-icon class="subtitle-1 mr-1">mdi-card</v-icon>
                <small class="caption">Formulario</small>
            </v-btn>
        </v-col>
        <v-col
            md="12"
        >
            <v-card>
                <v-card-title>Formulario</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-text-field
                    v-model="title"
                    solo
                    prepend-inner-icon="mdi-account"
                    color="blue darken-1"
                    label="Nombre del producto.."
                    required
                    ></v-text-field>     

                    <v-text-field
                    v-model="price"
                    solo
                    type="number"
                    prepend-inner-icon="mdi-bank"
                    color="blue darken-1"
                    label="Precio del producto.."
                    required
                    ></v-text-field>   

                    <v-textarea
                    v-model="description"
                    solo
                    name="input-7-4"
                    label="Descripcion del producto.."
                    ></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="primary"
                    >
                        <v-icon class="mr-1 caption">mdi-send</v-icon>
                        Crear
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data(){
            return{
                name:null,
                price:null,
                description:null,
            }
        }
    }
</script>