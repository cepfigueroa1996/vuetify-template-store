<template>
    <v-row >
        <v-col md="12" 
            class="pb-0"
        >
            <v-footer
                color="primary lighten-1"
                padless
            >
                <v-row
                justify="center"
                no-gutters
                >
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                <v-col
                    class="primary lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Desarrollador por Carlos Figueroa</strong>
                </v-col>
                </v-row>
            </v-footer>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data(){
            return{
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us',
                ],
                icons: [
                    'mdi-github',
                    'mdi-instagram',
                ],
            }
        }
    }
</script>