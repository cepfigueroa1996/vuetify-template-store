<template>
    <div>
        <v-snackbar
        v-model="snackbar"
        >
        {{ text }}
        <template v-slot:action="{ attrs }">
            <v-btn
            color="pink"
            text
            v-bind="attrs"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        props:['snackbar'],
        data(){
            return {
                text: `Se incorporo el articulo al carro de compras`,
            }
        }
    }
</script>