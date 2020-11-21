<template>
    <v-navigation-drawer
    app
    permanent
    dark
    :mini-variant="true"

    >
        <v-divider></v-divider>

        <v-list 
            dense
        >
            <v-list-item
            class="pointer"
            v-for="item in items"
            :key="item.title"
            @click="$store.state.view = item.to"
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>

<script>
    
    export default {
        data(){
            return{
                items: [
                    { title: 'Home', icon: 'mdi-home', to: 0 },
                    { title: 'My Account', icon: 'mdi-poll', to: 1 },
                    { title: 'Users', icon: 'mdi-comment', to: 2 },
                    { title: 'Email', icon: 'mdi-email', to: 3 }
                ]
            }
        }
    }
</script>

<style scoped>
    .pointer:hover{
        cursor:pointer;
    }
</style>