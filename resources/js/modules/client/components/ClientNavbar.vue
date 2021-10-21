<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      
    <a class="navbar-brand" href="#">
      <img :src="logo" alt="">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">

        <li class="nav-item">
          <router-link
            :to="{ name: 'login' }"
            class="nav-link"
          >
            Cerrar Sesión
          </router-link>
        </li>

      </ul>
    </div>

  </div>
</nav>    
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