<template>
  <b-navbar toggleable="lg" type="light" variant="white" :sticky="sticky">
    <b-navbar-brand :to="{ name: 'home' }">
      <img :src="logo" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <slot></slot>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import logo from '../../../../../public/images/logo.png'
export default {
  data(){
    return {
      logo,
      sticky: null,
    }
  },
  watch: {
    '$route'(to){
      this.sticky = to.name === 'home'
    }
  },
  created(){
    this.sticky = this.$router.history.current.name === 'home'
  }
}
</script>

<style scoped>
  img{
    max-height: auto;
    max-width: 7rem;
  }  

  .ml-auto{
    color: #000000 !important;
  }
</style>