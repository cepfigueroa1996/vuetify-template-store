<template>
    <v-row class="grey lighten-4">
        <v-col 
            md="6"
            class="ma-5"
        >
            <Post :data="comments" />
            <h2 class="font-weight-thin mt-5">Dejar comentario</h2>
            <v-divider class="mt-2 mb-5"></v-divider>
            <v-col md="9">
                <v-text-field
                    v-model="affair"
                    outlined
                    label="Nombre.."
                    prepend-inner-icon="mdi-account"
                ></v-text-field>

                <v-textarea
                    v-model="comment"
                    outlined
                    name="input-7-4"
                    label="Dejar comentario.."
                ></v-textarea>

                <v-btn
                    color="primary"
                    @click="message"
                >
                    <v-icon class="mr-1 body-1">mdi-send</v-icon>
                    Enviar
                </v-btn>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>

    import Post from '@/views/Detail/components/Post'

    export default {
        components:{ Post },
        data(){
            return{
                items: [
                    { header: 'Publicaciones' },
                ],
                affair:null,
                comment:null,
                comments:[],
            }
        },     
        methods:{
            message(){
                let self = this;

                self.comments.push(
                    {
                        title: self.affair, 
                        description: self.comment, 
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    }
                );

                self.affair = null;
                self.comment = null;
            }
        }
    }
</script>
