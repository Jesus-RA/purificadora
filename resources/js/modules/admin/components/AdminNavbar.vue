<template>
  <b-navbar toggleable="lg" type="light" variant="transparent">
    <b-navbar-brand href="#">
      <img :src="logo" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item>
          <router-link
            :to="{ name: 'administrar-contenido' }"
            class="nav-link"
          >
            Administrar Contenido
          </router-link>
        </b-nav-item>
        
        <b-nav-item>
          <router-link
            :to="{ name: 'pedidos' }"
            class="nav-link"
          >
            Pedidos
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link
            :to="{ name: 'login' }"
            class="nav-link"
          >
            Cerrar Sesión
          </router-link>
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
</template>

<script>
import logo from '../../../../../public/images/logo.png'

export default {
  data(){
    return {
      logo
    }
  }
}
</script>

<style scoped>
  img{
    max-height: 20%;
    max-width: 30%;
  }  
</style>