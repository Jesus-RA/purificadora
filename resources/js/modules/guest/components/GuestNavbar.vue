<template>
  <b-navbar toggleable="lg" type="light" variant="white" sticky>
    <b-navbar-brand href="#">
      <img :src="logo" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item>
          <router-link
            :to="{ name: 'home' }"
            class="nav-link"
          >
            Inicio
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/#about" class="nav-link">
            Sobre nosotros
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/#contact" class="nav-link">
            Contacto
          </router-link>
        </b-nav-item>
        
        <b-nav-item>
          <router-link
            :to="{ name: 'login' }"
            class="nav-link"
          >
            Login
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link
            :to="{ name: 'register' }"
            class="nav-link"
          >
            Register
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
    max-height: auto;
    max-width: 8rem;
  }  

  .ml-auto{
    color: #000000 !important;
  }
</style>