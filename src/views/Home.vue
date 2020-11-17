<template>
  <v-container 
    class="ma-0 pa-0 fill-height" 
    fluid
  >
    <Head/> 
    <Products/>
    <About/>
    <Team/>
    <Foot/>
  </v-container>
</template>

<script>

  import Head from '@/views/template/Header' //componente con template del encabezado y el slider
  import Products from '@/views/template/Products'//componente con template de productos slider
  import About from '@/views/template/About' //componente con template de nosotros 
  import Team from '@/views/template/Team' //componente con template de equipo de trabajo
  import Foot from '@/views/template/Footer' //componente con template del footer



  export default {
    name: 'Home',
    components:{ About, Team, Foot, Head, Products },

  }
</script>

