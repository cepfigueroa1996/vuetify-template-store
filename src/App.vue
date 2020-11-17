<template>
  <v-app>
    <Navbar />
    <v-main>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar' //menu de navegacion

  export default {
    components:{ Navbar },
    name: 'App',
    data: () => ({
      //
    }),
  };
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>