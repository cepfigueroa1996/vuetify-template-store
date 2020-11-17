<template>
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
                @click="$store.state.search = item.value"
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
</template>

<script>
    export default {
        data(){
            return{
                items: [
                    { text: 'Caballero', icon: 'mdi-face',  value: 'men clothing' },
                    { text: 'Dama', icon: 'mdi-face',  value: 'women clothing' },
                    { text: 'Joyeria', icon: 'mdi-eject',  value: 'jewelery' },
                    { text: 'Electronica', icon: 'mdi-inbox', value: 'electronics' },
                    { text: 'Alimentos', icon: 'mdi-food', value:'food' },
                ],
                search:null,
                selectedItem:null,
            }
        },
        watch:{
            search(){
                let self = this;

                 self.$store.state.search = self.search;
            }
        }
    }
</script>