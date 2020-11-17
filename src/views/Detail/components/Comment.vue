<template>
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
</template>
