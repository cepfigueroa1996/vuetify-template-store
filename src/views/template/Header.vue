<template>
        <v-row>
            <v-col
                md="4"
                class="pa-0 ma-0"
            >
                <v-card
                class="mx-auto"
                max-width="500"
                >
                <v-list>
                    <v-list-item-group v-model="model">
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
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
            <v-col 
                md="8"
                class="pa-0 ma-0"
            >
                <v-carousel :show-arrows="false"  height="295" >
                <v-carousel-item
                    v-for="sl in sli"
                    :key="sl.src"
                    :src="sl.src"
                ></v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col 
                md="12"
                class="pa-0 ma-0"
            >
                <v-alert
                text
                prominent
                class="grey darken-4 white--text font-weight-thin"
                >
                    <v-icon class="white--text">mdi-cart</v-icon>
                    Agrega todo lo que quieras  al carrito de compras, puedes ver nuestros productos
                    <v-btn
                        color="error"
                        to="/shop"
                    >
                        Aqui
                    </v-btn>
                </v-alert>
            </v-col>
        </v-row>

</template>

<script>
    export default {
        data(){
            return{
                sli: [
                {
                    src: 'https://www.xtrafondos.com/wallpapers/gigi-hadid-en-ropa-deportiva-4708.jpg',
                },
                {
                    src: 'https://slidesgo.com/storage/68684/0-sport-shop-business-plan.png',
                },
                {
                    src: 'https://i.pinimg.com/originals/44/a8/96/44a896b49c923eacb70404f85cada62a.jpg',
                },
                ],
                model: 1,
                items: [
                    {
                        icon: 'mdi-face',
                        text: 'Caballero',
                    },
                    {
                        icon: 'mdi-face',
                        text: 'Dama',
                    },
                    {
                        icon: 'mdi-eject',
                        text: 'joyeria',
                    },
                    {
                        icon: 'mdi-inbox',
                        text: 'Electronica',
                    },
                    {
                        icon: 'mdi-food',
                        text: 'Alimentos',
                    },
                ],
            }
        }
    }
</script>