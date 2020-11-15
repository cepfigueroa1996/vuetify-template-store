<template>
    <v-row>
      <v-col
        md="12"
        
      >
        <v-sheet
          class="mx-auto"
          elevation="0"

        >
          <v-slide-group
            v-model="slide"
            class="pa-4"
            center-active
            show-arrows
          >
            <v-slide-item
              v-for="(n, index) in da"
              :key="index"
              v-slot="{ active}"
            >
              <v-card
                
                class="ma-4"
                width="200"
              >
                <v-img
                  class="mt-5 mr-5 ml-5"
                  height="150"
                  width="150"
                  :src="n.image"
                ></v-img>
                <v-card-text>
                  <span class="subtitle-2 font-weight-bold" v-if="n.title.length > 20">{{ limitar(n.title) }}..</span>
                  <span class="subtitle-2 font-weight-bold" v-else>{{ n.title }}</span> 
                  <br>
                  <span class="subtitle-1 font-weight-light">{{ n.price }}</span> 
                  <small class="font-weight-bold"> USD</small>
                  <br>
                  <v-chip
                    class="ml-0"
                    color="grey darken-3 green--text caption"
                  >
                    <v-icon class="overline">mdi-copyright</v-icon>
                    <small>{{ n.category }}</small>
                  </v-chip>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    fab
                    dark
                    small
                    color="error"
                    @click="$store.commit('cart', n), snackbar = true"
                  >
                    <v-icon dark class="pa-10 title">
                      mdi-cart
                    </v-icon>
                  </v-btn>
                  <v-btn

                    fab
                    dark
                    small
                    color="success"
                    :to="{ name: 'Detail', params:{ id: n.id } }"
                  >
                    <v-icon dark class="pa-10 title">
                      mdi-eye
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>   
      <add :snackbar="snackbar"></add>
    </v-row>
</template>

<script>
    import axios from 'axios'
    import  Add from '@/views/notifications/Add'

    export default {
        components:{ Add },
        created: function(){
            this.productos();
        },
        data(){
            return{
                da:[],
                snackbar:false,
                slide:null,
            }
        },
        methods:{

        limitar(id){
            return id.substr(0, 20);
        },
        productos(){
            let self = this;

            axios.get('https://fakestoreapi.com/products')
                .then(response=>{
                self.da = response.data;
                })
        }
        }
    }
</script>