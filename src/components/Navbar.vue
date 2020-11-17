<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://sunnewsonline.com/wp-content/uploads/2019/10/sports-logo-png-transparent.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        to="/"
      >
        <v-icon class="subtitle-1">mdi-home</v-icon>
        <span class="mr-2 ml-1 font-weight-light">Inicio</span>

      </v-btn>

      <v-btn
        text
        to="/shop"
      >
        <v-icon class="subtitle-1">mdi-store</v-icon>
        <span class="mr-2 ml-1 font-weight-light">Tienda</span>

      </v-btn>

      <v-btn
        text
        to="/cart"
      >
        <v-icon class="subtitle-1">mdi-cart</v-icon>
        <span class="mr-2 ml-1 font-weight-light">Carro</span>
        <v-chip class="green lighten-2">{{ $store.state.count }}</v-chip>
      </v-btn>

      <v-btn
        text
        to="/admin"
      >
        <v-icon class="subtitle-1">mdi-key</v-icon>
        <span class="mr-2 ml-1 font-weight-light">Administrador</span>

      </v-btn>

    </v-app-bar>
</template>