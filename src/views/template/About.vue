<template>
    <v-row  class="grey lighten-3" style="  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);">
        <v-col md="7">
            <v-card flat class="grey lighten-3 mt-10">
                <v-card-text>
                    <v-row
                    class="pa-5"
                    align="center"
                    >
                        <v-avatar
                            class="mr-4 light-blue darken-1"
                        >
                            <v-icon class="white--text">mdi-store</v-icon>
                        </v-avatar>
                        <strong class="title">¿ Quienes somos ?</strong>
                        <v-spacer></v-spacer>
                    </v-row>
                    <p class="ml-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        class="caption pr-10 pl-10 pt-5 pb-5 ml-15 mb-10"
                    >
                        <v-icon class="caption mr-1">mdi-email</v-icon>
                            Contactar
                    </v-btn>
                    <v-btn
                        color="error"
                        class="caption pr-10 pl-10 pt-5 pb-5 ml-2 mb-10"
                    >
                        <v-icon class="caption mr-1">mdi-face</v-icon>
                            Formar parte del equipo
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col md="5">
            <v-img
            src="https://viableknowledgemasters.com/img/about-img.svg"
            class="ma-10"
            ></v-img>
        </v-col>
    </v-row>
</template>