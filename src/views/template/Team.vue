<template>
    <v-row>
        <v-col 
            md="10"
            class="mb-10"
        >
            <h1 class="text-uppercase display-1 font-weight-light mx-10 mt-15">Nuestro equipo </h1>
            <v-divider class="mx-10"></v-divider>
        </v-col>
        
        <v-card
            class="ml-15 mb-10"
            max-width="250"
            v-for="(us,ct) in users"
            :key="ct"
        >

            <v-card-text  >
                <div align="center">
                    <v-img
                        :src="us.src"
                        class="rounded-circle"
                        height="150"
                        width="150"
                    ></v-img>
                </div>

                <small>{{ us.category }}</small>
                <p class="title text--primary">
                    {{ us.name }}
                </p>
                <v-divider></v-divider>
                <h2 class="subtitle-2 text-uppercase text mt-2 ">Skills</h2>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip 
                        v-for="(sk, s) in us.skill"
                        :key="s"
                        :color="sk.color"
                    >
                        <small>{{ sk.name}}</small>
                    </v-chip>
                </v-chip-group>
            </v-card-text>
            <v-card-actions>

            </v-card-actions>
        </v-card>
    </v-row>
</template>

<script>
    export default {
        data(){
            return{
                users:[
                    {

                        name:'Carlos Figueroa',
                        src: "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
                        category:'Fron-end developer',
                        skill:[
                            { name:'CSS', color: 'primary' },
                            { name: 'Javascript', color: 'error' },
                            { name: 'HTML5', color: 'success' }
                        ]
                    }, 
                    {
                        name:'Pablo Gomez',
                        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        category:'Back-end developer',
                        skill:[
                            { name:'PHP', color: 'primary' },
                            { name: 'Linux', color: 'warning' },
                            { name: 'Node', color: 'success' }
                        ]
                    },
                    {
                        name:'Daniela Castillo',
                        src: "https://www.definitionagency.com/wp-content/uploads/2020/08/MA-1029x525.png",
                        category:'Marketing',
                        skill:[
                            { name:'Marketing', color: 'primary' },
                            { name: 'Community manager', color: 'error' },
                        ]
                    }, 
                ]
            }
        }     
    }
</script>